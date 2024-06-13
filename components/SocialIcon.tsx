import React from "react";

interface SocialIconProps {
  name: string;
  path: string;
  redirect: string;
  className?: string;
}

export default function SocialIcon(props: SocialIconProps) {
  return (
    <a href={`${props.redirect}`} target="blank" className="select-none">
      <img
        src={`${props.path}`}
        alt={`${props.name} icon`}
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full text-center text-sm text-gray-300 ${props.className}`}
      />
    </a>
  );
}
