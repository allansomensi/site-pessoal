import Button from "./Button";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="h-auto w-auto min-w-80 min-h-96 bg-gradient-to-b from-cyan-900 to-cyan-800 flex flex-col justify-between p-6 rounded-xl text-center shadow-md hover:scale-105 duration-200 cursor-default">
      <div className="flex flex-col items-center">
        <img
          src={props.image}
          alt=""
          className="bg-white w-full max-h-32 min-h-32 object-cover h-full rounded-xl border-2 border-orange-500"
        />
        <h1 className="text-white text-xl my-2 font-medium">{props.title}</h1>
        <p className="text-gray-200 text-md">{props.description}</p>
      </div>
      <div className="mt-2">
        <Button text="Ver mais" primary />
      </div>
    </div>
  );
}
