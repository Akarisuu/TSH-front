import Accept from "public/icons/accept.svg";

export default function Checkbox({
  children,
  id,
  onChange,
  checked,
}: {
  checked: boolean;
  onChange: () => void;
  id: string;
  children: any;
}) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        className="hidden"
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={`w-6 h-6 box-border border-[1px] border-grey-200 cursor-pointer rounded bg-white border-tertiary mr-2 flex items-center justify-center ${
          checked ? "bg-primary-800" : ""
        }`}
      >
        <Accept className={`w-3 h-[9px] ${checked ? "" : "hidden"}`} />
      </label>
      <label htmlFor={id} className="cursor-pointer">
        {children}
      </label>
    </div>
  );
}
