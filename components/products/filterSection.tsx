import Button from "components/shared/button";
import Checkbox from "components/shared/checkbox";
import Logo from "components/shared/logo";
import useIsMobile from "hooks/useIsMobile";
import Link from "next/link";
import { searchQueryType, setSearchQuery } from "utils/types/products";

function LogInButton() {
  return (
    <Button alt className="px-6 ml-auto">
      <Link href="/login" passHref>
        <a>Log in</a>
      </Link>
    </Button>
  );
}

export default function FilterSection({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: searchQueryType;
  setSearchQuery: setSearchQuery;
}) {
  const isMobile = useIsMobile(1024);

  return (
    <section className="px-mobile pt-12 pb-8 bg-white flex flex-col lg:px-desktop lg:flex-row lg:items-center lg:py-12">
      <div className="mb-7 lg:mb-0 lg:mr-[10%] flex justify-between items-center">
        <Logo />
        {isMobile && <LogInButton />}
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-[url('/icons/search.svg')] bg-no-repeat bg-[center_right_20px] bg-[length:18px_18px] p-4 pr-12 rounded-lg border-[1px] border-grey-200 text-sm leading-4 placeholder:text-grey-900 placeholder:font-semibold lg:w-[30vw]"
        value={searchQuery.search}
        onChange={(e) =>
          setSearchQuery({ ...searchQuery, search: e.target.value })
        }
      />
      <div className="flex gap-8 mt-6 lg:mt-0 lg:ml-6">
        <Checkbox
          checked={searchQuery.active}
          id="active"
          onChange={() =>
            setSearchQuery({ ...searchQuery, active: !searchQuery.active })
          }
        >
          Active
        </Checkbox>
        <Checkbox
          checked={searchQuery.promo}
          id="promo"
          onChange={() =>
            setSearchQuery({ ...searchQuery, promo: !searchQuery.promo })
          }
        >
          Promo
        </Checkbox>
      </div>
      {!isMobile && <LogInButton />}
    </section>
  );
}
