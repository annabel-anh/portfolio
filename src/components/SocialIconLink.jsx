export default function SocialIconLink({ href, icon, className }) {
  return (
    <a
      href={href}
      className={`${className} hover:text-amber-600 text-xl`}
      target={"_blank"}
      rel={"noopener noreferrer"}
    >
      {icon}
    </a>
  );
}
