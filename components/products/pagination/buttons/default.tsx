import { searchQueryType, setSearchQuery } from "utils/types/products";

export default function DefaultPageButton({
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
          page: searchQuery.page - 1 + index,
        })
      }
      className={
        searchQuery.page - 1 + index === searchQuery.page
          ? "text-primary-800"
          : ""
      }
    >
      {searchQuery.page - 1 + index}
    </button>
  );
}
