import SkillItem from '../SkillItem.jsx';
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact
} from 'react-icons/fa';
import {SiCplusplus, SiPostgresql, SiPrisma, SiTailwindcss} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';

export default function Skills() {
    const skills = [
        {icon: <FaJs/>, label: 'JavaScript'},
        {icon: <FaReact/>, label: 'React'},
        {icon: <FaNodeJs/>, label: 'Node.js'},
        {icon: <FaHtml5/>, label: 'HTML5'},
        {icon: <FaCss3/>, label: 'CSS3'},
        {icon: <SiTailwindcss />, label: 'Tailwind'},
        {icon: <FaBootstrap />, label: 'Bootstrap'},
        {icon: <FaPython/>, label: 'Python'},
        {icon: <SiCplusplus/>, label: 'C++'},
        {icon: <SiPostgresql/>, label: 'Postgres'},
        {icon: <GrMysql/>, label: 'MySQL'},
        {icon: <SiPrisma/>, label: 'Prisma'},
    ];

    return (
        <section id="skills" className={'md:grid md:grid-cols-6'}>
            <h2 className={'md:col-span-2 md:max-w-1/3 mb-10 md:mb-0'}>Skills</h2>
            <div
                className="md:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-y-5 min-w-max">
                {skills.map((skill) => (
                    <SkillItem key={skill.label} icon={skill.icon} label={skill.label}/>
                ))}
            </div>
        </section>
    );
}
