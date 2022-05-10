import { searchQueryType, setSearchQuery } from "utils/types/products";

export default function FirstPageButton({
  index,
  searchQuery,
  setSearchQuery,
}: {
  index: number;
  searchQuery: searchQueryType;
  setSearchQuery: setSearchQuery;
}) {
  return (
    <button
      onClick={() =>
        setSearchQuery({
          ...searchQuery,
          page: index + 1,
        })
      }
      className={index + 1 === searchQuery.page ? "text-primary-800" : ""}
    >
      {index + 1}
    </button>
  );
}
