import { useState } from "react";
import { productsData } from "utils/types/cms/products";
import { productPopup } from "utils/types/products";
import DetailsPopup from "./detailsPopup";
import SingleProduct from "./singleProduct";

export default function ProductsSection({ data }: { data: productsData }) {
  const [popupContent, setPopupContent] = useState<null | productPopup>(null);
  return (
    <section className="flex flex-col px-mobile pb-16 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-x-6 lg:gap-y-8 lg:px-desktop lg:pt-14">
      {data.items.map((item, index) => (
        <SingleProduct
          content={item}
          key={index}
          setPopupContent={setPopupContent}
        />
      ))}
      {popupContent && (
        <DetailsPopup content={popupContent} setContent={setPopupContent} />
      )}
    </section>
  );
}
