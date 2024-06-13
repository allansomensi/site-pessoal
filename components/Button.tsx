interface ButtonProps {
  text: string;
  primary?: boolean;
  className?: string;
}

export default function Button(props: ButtonProps) {
  return props.primary ? (
    <button
      className={`text-white py-3 md:hover:bg-orange-700 sm:px-10 sm:py-2 md:active:bg-orange-800 md:hover:scale-105 select-none self-center rounded-lg bg-orange-600 px-20 font-medium duration-100 active:scale-105 active:bg-orange-700 active:duration-75 ${props.className}`}
    >
      {props.text}
    </button>
  ) : (
    <button
      className={`text-white py-3 md:hover:bg-orange-700 sm:px-20 sm:py-5 md:active:bg-orange-800 md:hover:scale-105 select-none self-center rounded-lg bg-orange-600 px-20 font-medium duration-100 active:scale-105 active:bg-orange-700 active:duration-75 ${props.className}`}
    >
      {props.text}
    </button>
  );
}
