
interface SkillBadgeProps {
  name: string;
}

const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <span className="inline-block px-3 py-1.5 bg-secondary rounded-full text-sm font-medium m-1">
      {name}
    </span>
  );
};

export default SkillBadge;
