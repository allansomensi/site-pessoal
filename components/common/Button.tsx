interface ButtonProps {
  text: string;
  primary?: boolean;
  className?: string;
}

export default function Button({
  text,
  primary = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      className={`text-white py-3 px-10 rounded-lg font-medium duration-100 active:scale-95 select-none self-center 
        ${primary ? "bg-orange-600 hover:bg-orange-700 active:bg-orange-800" : "bg-gray-600 hover:bg-gray-700 active:bg-gray-800"}
        ${primary ? "md:px-20 md:py-4" : "md:px-16 md:py-3"}
        ${className}`}
    >
      {text}
    </button>
  );
}
