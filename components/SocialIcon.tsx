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
        className={`w-12 h-12 border rounded-full text-center text-sm text-gray-300 dark:bg-gray-900 bg-white ${props.className}`}
      />
    </a>
  );
}
