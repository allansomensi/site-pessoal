interface ButtonProps {
  text: string;
  primary?: boolean;
  className?: string;
  redirect?: string;
}

export default function Button({
  text,
  primary = false,
  className = "",
  redirect,
}: ButtonProps) {
  return (
    <a
      className={`text-white py-3 px-10 rounded-lg font-medium duration-100 active:scale-95 select-none self-center cursor-pointer
        ${primary ? "bg-orange-600 md:hover:bg-orange-700 active:bg-orange-800" : "bg-gray-600 hover:bg-gray-700 active:bg-gray-800"}
        ${primary ? "md:px-20 md:py-4" : "md:px-16 md:py-3"}
        ${className}`}
      href={redirect}
    >
      {text}
    </a>
  );
}
