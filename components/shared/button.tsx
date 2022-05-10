export default function Button({
  children,
  onClick,
  className,
  disabled,
  alt,
}: {
  children: any;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  alt?: boolean;
}) {
  return (
    <button
      className={`${className || ""} ${
        !alt
          ? disabled
            ? "bg-grey-400"
            : "bg-primary-800 hover:bg-primary-900 transition-colors duration-200"
          : disabled
          ? "bg-white border-[1px] border-grey-400"
          : "bg-white border-[1px] border-primary-800 text-primary-800 hover:border-primary-900 hover:text-primary-900 transition-colors duration-200"
      } text-center text-white py-3 rounded-[4px] leading-4 `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
