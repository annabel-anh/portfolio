export default function SocialIconLink({ href, icon, className }) {
  return (
    <a
      href={href}
      className={`${className} text-xl hover:text-amber-600`}
      target={"_blank"}
      rel={"noopener noreferrer"}
    >
      {icon}
    </a>
  );
}
