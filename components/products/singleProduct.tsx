import Image from "next/image";
import { productItem } from "utils/types/cms/products";
import EmptyStar from "public/icons/star.svg";
import FilledStar from "public/icons/starFilled.svg";
import Button from "components/shared/button";
import { setProductPopup } from "utils/types/products";

export default function SingleProduct({
  content,
  setPopupContent,
}: {
  content: productItem;
  setPopupContent: setProductPopup;
}) {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden mt-6 lg:mt-0 lg:h-full">
      <div
        className={`h-[50vw] relative lg:h-[20vh] ${
          !content.active
            ? "after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-grey-300"
            : ""
        }`}
      >
        <Image
          layout="fill"
          src={content.image}
          objectFit="cover"
          alt="product image"
          className={
            !content.active ? "mix-blend-normal opacity-50 z-10 grayscale" : ""
          }
        />
        {content.promo && (
          <span className="absolute left-0 top-4 text-center bg-secondary z-20 text-white px-4 py-1">
            Promo
          </span>
        )}
      </div>
      <div className="px-4 pt-4 pb-6 bg-white lg:flex-1 flex flex-col">
        <h3 className="text-lg leading-4 mb-2">{content.name}</h3>
        <p className=" text-sm leading-4 h-16 text-grey-400 lg:mb-auto">
          {content.description}
        </p>
        <div className="flex mt-8 mb-4">
          {new Array(5)
            .fill(0)
            .map((_, index) =>
              index < content.rating ? (
                <FilledStar key={index} className="w-4 h-4 mr-2.5 last:mr-0" />
              ) : (
                <EmptyStar key={index} className="w-4 h-4 mr-2.5 last:mr-0" />
              )
            )}
        </div>
        <Button
          onClick={() =>
            setPopupContent({
              name: content.name,
              description: content.description,
              image: content.image,
            })
          }
          className="w-full"
          disabled={!content.active}
        >
          {content.active ? "Show details" : "Unavailable"}
        </Button>
      </div>
    </div>
  );
}
