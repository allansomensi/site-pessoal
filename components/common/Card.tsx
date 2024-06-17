import Link from "next/link";
import SocialIcon from "../SocialIcon";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="flex h-auto min-h-96 w-auto min-w-80 cursor-default flex-col justify-between rounded-xl border-2 bg-neutral-100 p-6 text-center shadow-md duration-200 md:hover:scale-105 dark:border-0 dark:bg-slate-700">
      <div className="flex flex-col items-center">
        <img
          src={props.image}
          alt="Project Image"
          width={32}
          height={32}
          className="h-full max-h-32 min-h-32 w-full rounded-xl border-2 border-slate-400 bg-white object-cover"
        />
        <h1 className="my-2 text-xl font-medium text-black dark:text-white">
          {props.title}
        </h1>
        <p className="text-md text-slate-800 dark:text-gray-200">
          {props.description}
        </p>
      </div>
      <Link
        className="mx-3.5 mt-2 flex justify-center self-center rounded border border-black px-4 duration-100 hover:bg-neutral-200 active:bg-neutral-200 dark:border-0 dark:bg-gray-800 active:dark:bg-gray-900 md:dark:hover:bg-gray-900"
        href={`https://github.com/allansomensi/${props.title}`}
        target="_blank"
      >
        <SocialIcon name="github" className="h-12 w-12 scale-75" />
        <p className="ml-2 justify-center self-center text-lg dark:text-white">
          Ver no Github
        </p>
      </Link>
    </div>
  );
}
