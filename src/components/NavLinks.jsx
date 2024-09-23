const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function NavLinks({ className, mobile = false, setOpen }) {
  const linkClass = mobile
    ? "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-blue-100"
    : "text-sm font-semibold leading-6 hover:underline hover:underline-offset-8";

  const handleLinkClick = () => {
    if (mobile && setOpen) setOpen(false);
  };

  return (
    <div className={className}>
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={linkClass}
          onClick={handleLinkClick}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
