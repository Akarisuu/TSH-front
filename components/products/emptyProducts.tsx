import Clipboard from "public/icons/clipboard.svg";

export default function EmptyProducts() {
  return (
    <section className="px-mobile py-6 flex justify-center">
      <div className="w-full bg-white rounded-lg h-[350px] max-w-[600px] flex flex-col items-center justify-center">
        <Clipboard />
        <h3 className="mt-5 text-lg leading-4">Ooops… It&apos;s empty here</h3>
        <p className="mt-2 text-grey-400 text-sm leading-4">
          There are no products on the list
        </p>
      </div>
    </section>
  );
}
