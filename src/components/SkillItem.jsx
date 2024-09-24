export default function SkillItem({ icon, label }) {
  return (
    <div className="flex min-w-fit items-center gap-2 text-2xl">
      <span className={"text-gray-900"}>{icon}</span>
      <span className={"font-manrope font-medium"}>{label}</span>
    </div>
  );
}
