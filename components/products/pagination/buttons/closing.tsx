import { searchQueryType, setSearchQuery } from "utils/types/products";

export default function ClosingPagesButton({
  index,
  maxPage,
  searchQuery,
  setSearchQuery,
}: {
  index: number;
  maxPage: number;
  searchQuery: searchQueryType;
  setSearchQuery: setSearchQuery;
}) {
  return (
    <button
      onClick={() =>
        setSearchQuery({ ...searchQuery, page: maxPage - 2 + index })
      }
      className={
        maxPage - 2 + index === searchQuery.page ? "text-primary-800" : ""
      }
    >
      {maxPage - 2 + index}
    </button>
  );
}
