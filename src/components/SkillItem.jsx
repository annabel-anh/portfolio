export default function SkillItem({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-2xl min-w-fit">
      {icon}
      <span className={"font-medium font-manrope"}>{label}</span>
    </div>
  );
}
