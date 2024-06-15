import Link from "next/link";

interface ButtonProps {
  text: string;
  primary?: boolean;
  className?: string;
  redirect?: string;
}

export default function TheButton({
  text,
  primary = false,
  className = "",
  redirect = "",
}: ButtonProps) {
  return (
    <Link
      href={redirect}
      className={`cursor-pointer select-none self-center rounded-lg px-10 py-3 font-medium text-white duration-100 active:scale-95 ${primary ? "bg-orange-600 active:bg-orange-800 md:hover:bg-orange-700" : "bg-gray-600 hover:bg-gray-700 active:bg-gray-800"} ${primary ? "md:px-20 md:py-4" : "md:px-16 md:py-3"} ${className}`}
    >
      {text}
    </Link>
  );
}
