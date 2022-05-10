import Image from "next/image";
import Close from "public/icons/decline.svg";
import { productPopup, setProductPopup } from "utils/types/products";

export default function DetailsPopup({
  content,
  setContent,
}: {
  content: productPopup;
  setContent: setProductPopup;
}) {
  return (
    <section className="fixed top-0 left-0 w-full h-full bg-grey-900/90 mix-blend-normal flex items-center justify-center px-mobile z-50">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="relative h-[50vh] max-h-[350px]">
          <Close
            onClick={() => setContent(null)}
            className="w-3.5 h-3.5 top-4 right-4 absolute z-10 hover:cursor-pointer lg:top-6 lg:right-6"
          />
          <Image
            src={content.image}
            layout="fill"
            objectFit="cover"
            alt="popup image"
          />
        </div>
        <div className="p-6 lg:px-8 lg:pb-14">
          <h3 className="text-2xl leading-10 mb-2">{content.name}</h3>
          <p className="text-lg leading-6 text-grey-400">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}
