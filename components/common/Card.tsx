import SocialIcon from "../SocialIcon";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="h-auto w-auto min-w-80 min-h-96 bg-gradient-to-b from-cyan-900 to-cyan-800 flex flex-col justify-between p-6 rounded-xl text-center shadow-md md:hover:scale-105 duration-200 cursor-default">
      <div className="flex flex-col items-center">
        <img
          src={props.image}
          alt=""
          className="bg-white w-full max-h-32 min-h-32 object-cover h-full rounded-xl border-2 border-orange-500"
        />
        <h1 className="text-white text-xl my-2 font-medium">{props.title}</h1>
        <p className="text-gray-200 text-md">{props.description}</p>
      </div>
      <a
        className="mt-2 flex justify-center border rounded bg-gray-800 mx-3.5 self-center px-4 md:hover:bg-gray-900 active:bg-gray-900 duration-100"
        href={`https://github.com/allansomensi/${props.title}`}
        target="_blank"
      >
        <img
          src="icons/social/github.svg"
          alt="Github logo"
          className="w-12 h-12 scale-75"
        />
        <p className="text-white text-lg justify-center self-center ml-2">
          Ver no Github
        </p>
      </a>
    </div>
  );
}
