export default function SocialIconLink({ href, icon, className }) {
  return (
    <a
      href={href}
      className={`${className} hover:text-light-blue text-lg`}
      target={"_blank"}
      rel={"noopener noreferrer"}
    >
      {icon}
    </a>
  );
}
