import Button from "../common/Button";

export default function Hero() {
  return (
    <div>
      {background}
      <div className="flex flex-col flex-grow cursor-default items-center justify-center text-center mt-10 sm:mt-20 md:mt-30">
        <div className="flex -rotate-3 flex-col items-center">
          <h2 className="w-fit select-none text-9xl font-semibold duration-300 active:translate-x-1 sm:text-7xl md:hover:translate-x-1">
            Ei!
          </h2>
          <h2 className="w-fit select-none text-4xl font-normal duration-300 active:translate-x-1 sm:text-5xl md:hover:translate-x-1">
            Precisando de um
          </h2>
          <h2 className="w-fit select-none rounded bg-orange-600 px-2 pb-2 text-4xl font-medium underline duration-300 active:translate-x-1 active:duration-150 sm:text-6xl md:hover:translate-x-1">
            Desenvolvedor Web?
          </h2>
          <h1 className="-ml-10 mt-10 w-fit select-none border-2 px-2 text-7xl duration-300 active:translate-x-1 active:border-current active:text-amber-300 active:backdrop-brightness-75 active:duration-100 sm:ml-10 sm:mt-9 sm:text-7xl md:-ml-3.5 md:text-8xl md:hover:translate-x-1 md:hover:border-current md:hover:text-amber-300 md:hover:backdrop-brightness-75">
            Allan Somensi
          </h1>
        </div>
        <div className="flex justify-center p-4">
          <Button
            text="Ver mais"
            className="z-10 mb-28 mt-12 sm:mt-12 md:mt-20 lg:mt-24"
            primary
          />
        </div>
      </div>
    </div>
  );
}

const background = (
  <div>
    <div className="absolute inset-0">
      <svg
        width="10%"
        height="10%"
        viewBox="0 0 110 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-3.5 top-3.5 mix-blend-multiply"
      >
        <g style={{ mixBlendMode: "multiply" }}>
          <path
            d="M0.000199671 86.1645L62.5634 4.40638e-05L109.513 34.0898L0.000199671 86.1645Z"
            fill="#646F8B"
            fillOpacity="0.44"
          />
        </g>
      </svg>
      <svg
        width="10%"
        height="10%"
        viewBox="0 0 152 179"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-2/3 top-1/4 size-1/3"
      >
        <g style={{ mixBlendMode: "multiply" }}>
          <path
            d="M0.710846 -6.45328e-05L151.314 86.0675L98.6035 178.303L0.710846 -6.45328e-05Z"
            fill="#646F8B"
            fillOpacity="0.44"
          />
        </g>
      </svg>
      <svg
        width="6%"
        height="8%"
        viewBox="0 0 104 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-3.5 top-1/2 size-2/12"
      >
        <g style={{ mixBlendMode: "multiply" }}>
          <path
            d="M31.6306 115.657L-0.000139433 66.2544L103.479 0L31.6306 115.657Z"
            fill="#646F8B"
            fillOpacity="0.44"
          />
        </g>
      </svg>
      <svg
        width="10%"
        height="12%"
        viewBox="0 0 104 139"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/4 top-1/2 size-1/6"
      >
        <g style={{ mixBlendMode: "multiply" }}>
          <path
            d="M76.2526 -0.000139115L103.735 113.537L0.482422 138.53L76.2526 -0.000139115Z"
            fill="#646F8B"
            fillOpacity="0.44"
          />
        </g>
      </svg>
      <svg
        width="20%"
        height="10%"
        viewBox="0 0 264 173"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-20 top-3.5 size-3/12"
      >
        <g style={{ mixBlendMode: "multiply" }}>
          <path
            d="M263.346 0.462396L133.68 173.002L0 72.54L263.346 0.462396Z"
            fill="#646F8B"
            fillOpacity="0.44"
          />
        </g>
      </svg>
      <svg
        width="8%"
        height="10%"
        viewBox="0 0 104 139"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-1/4 right-1.5 size-1/5"
      >
        <g style={{ mixBlendMode: "multiply" }}>
          <path
            d="M76.2526 -0.000139115L103.735 113.537L0.482422 138.53L76.2526 -0.000139115Z"
            fill="#646F8B"
            fillOpacity="0.44"
          />
        </g>
      </svg>
      <svg
        width="16%"
        height="8%"
        viewBox="0 0 110 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-1/4 top-1/2 size-3/12"
      >
        <g style={{ mixBlendMode: "multiply" }}>
          <path
            d="M-0.00028861 86.1645L62.5629 4.40638e-05L109.513 34.0898L-0.00028861 86.1645Z"
            fill="#646F8B"
            fillOpacity="0.44"
          />
        </g>
      </svg>
      <svg
        width="15%"
        height="17%"
        viewBox="0 0 152 179"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-2/3 top-3/4"
      >
        <g style={{ mixBlendMode: "multiply" }}>
          <path
            d="M0.710846 -6.45328e-05L151.314 86.0675L98.6035 178.303L0.710846 -6.45328e-05Z"
            fill="#646F8B"
            fillOpacity="0.44"
          />
        </g>
      </svg>
      <svg
        width="10%"
        height="15%"
        viewBox="0 0 155 358"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-2/3 top-1/4 size-3/12"
      >
        <g style={{ mixBlendMode: "multiply" }}>
          <path
            d="M0.909227 0.649689L155 305L51.7549 357.272L0.909227 0.649689Z"
            fill="#646F8B"
            fillOpacity="0.44"
          />
        </g>
      </svg>
    </div>
    <svg
      width="104"
      height="116"
      viewBox="0 0 104 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-3/4 top-3.5 size-3/12"
    >
      <g style={{ mixBlendMode: "multiply" }}>
        <path
          d="M31.6306 115.657L-0.000139433 66.2544L103.479 0L31.6306 115.657Z"
          fill="#646F8B"
          fillOpacity="0.44"
        />
      </g>
    </svg>
    <svg
      width="173"
      height="125"
      viewBox="0 0 173 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-2/3 top-2/3 size-3/12"
    >
      <g style={{ mixBlendMode: "multiply" }}>
        <path
          d="M0.281141 -7.68717e-05L172.762 18.4201L161.481 124.054L0.281141 -7.68717e-05Z"
          fill="#646F8B"
          fillOpacity="0.44"
        />
      </g>
    </svg>
  </div>
);
