import ProductsSection from "components/products/productsSection";
import axios from "config/axios";
import { GetServerSideProps } from "next";
import { productsData } from "utils/types/cms/products";
import useSWR, { SWRConfig, mutate } from "swr";
import useIsMobile from "hooks/useIsMobile";
import { desktopMaxPosts, mobileMaxPosts } from "utils/products/staticData";
import { useEffect, useRef, useState } from "react";
import PaginationSection from "components/products/pagination/paginationSection";
import FilterSection from "components/products/filterSection";
import EmptyProducts from "components/products/emptyProducts";
import { searchQueryType } from "utils/types/products";

export default function Products({
  data,
  query,
}: {
  data: productsData;
  query: searchQueryType;
}) {
  const isMobile = useIsMobile(1024);
  const [searchQuery, setSearchQuery] = useState({
    page: Number(query.page) || 1,
    search: query.search || "",
    promo: query.promo || false,
    active: query.active || false,
  });
  const didMountRef = useRef(false);

  const queryString = `?limit=${
    isMobile ? mobileMaxPosts : desktopMaxPosts
  }&page=${searchQuery.page}&search=${searchQuery.search}&promo=${
    searchQuery.promo || ""
  }&active=${searchQuery.active || ""}`;

  const { data: swrData } = useSWR(
    "/products",
    async () =>
      (await axios.get(`/products${queryString}`)).data as productsData
  );

  useEffect(() => {
    if (!didMountRef.current) return;
    if (searchQuery.page === 1) {
      mutate("/products");
    }
    setSearchQuery({ ...searchQuery, page: 1 });
  }, [isMobile, searchQuery.search, searchQuery.promo, searchQuery.active]);

  useEffect(() => {
    if (!didMountRef.current) didMountRef.current = true;
    mutate("/products");
  }, [searchQuery.page]);

  useEffect(() => {
    if (window) window.history.pushState({}, "", queryString);
  }, [isMobile, searchQuery]);

  return (
    <main>
      <FilterSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <SWRConfig
        value={{
          fallback: {
            "/products": data,
          },
        }}
      >
        {swrData && swrData.meta.totalItems === 0 ? (
          <EmptyProducts />
        ) : (
          <>
            <ProductsSection data={swrData || data} />
            <PaginationSection
              meta={swrData?.meta || data.meta}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </>
        )}
      </SWRConfig>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const isMobile = req.headers["user-agent"]?.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  )
    ? true
    : false;

  const { data } = await axios.get(
    `/products?limit=${isMobile ? mobileMaxPosts : desktopMaxPosts}&page=${
      query.page || 1
    }&search=${query.search || ""}&promo=${query.promo || ""}&active=${
      query.active || ""
    }`
  );

  return { props: { data, query } };
};
