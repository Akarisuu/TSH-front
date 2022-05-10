import { paginationMeta } from "utils/types/cms/products";
import { searchQueryType, setSearchQuery } from "utils/types/products";
import DefaultPageButton from "./buttons/default";
import FirstPageButton from "./buttons/firstPage";
import ClosingPagesButton from "./buttons/closing";
import SmallQueryButton from "./buttons/small";

export default function PaginationSection({
  meta,
  searchQuery,
  setSearchQuery,
}: {
  meta: paginationMeta;
  searchQuery: searchQueryType;
  setSearchQuery: setSearchQuery;
}) {
  const buttonsArr =
    meta.totalPages <= 6
      ? new Array(meta.totalPages).fill(0)
      : new Array(3).fill(0);
  return (
    <section className="flex justify-center gap-8 text-sm leading-4 pb-16">
      <button
        className="text-grey-400"
        onClick={() => setSearchQuery({ ...searchQuery, page: 1 })}
      >
        First
      </button>
      <div className="flex gap-4">
        {meta.totalPages <= 6 ? (
          buttonsArr.map((_, index) => (
            <SmallQueryButton
              index={index}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              key={index}
            />
          ))
        ) : (
          <>
            {buttonsArr.map((_, index) =>
              searchQuery.page === 1 ||
              searchQuery.page >= meta.totalPages - 2 ? (
                <FirstPageButton
                  index={index}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  key={index}
                />
              ) : (
                <DefaultPageButton
                  index={index}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  key={index}
                />
              )
            )}
            <span>...</span>
            {buttonsArr.map((_, index) => (
              <ClosingPagesButton
                index={index}
                maxPage={meta.totalPages}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                key={index}
              />
            ))}
          </>
        )}
      </div>
      <button
        onClick={() =>
          setSearchQuery({ ...searchQuery, page: meta.totalPages })
        }
      >
        Last
      </button>
    </section>
  );
}
