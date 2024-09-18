import SkillItem from '../SkillItem.jsx';
import {FaCss3, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact} from 'react-icons/fa';
import {SiCplusplus, SiPostgresql, SiPrisma} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';

export default function Skills() {
    const skills = [
        { icon: <FaJs />, label: "JavaScript" },
        { icon: <FaReact />, label: "React" },
        { icon: <FaNodeJs />, label: "Node.js" },
        { icon: <FaHtml5 />, label: "HTML5" },
        { icon: <FaCss3 />, label: "CSS3" },
        { icon: <FaPython />, label: "Python" },
        { icon: <SiPostgresql />, label: "Postgres" },
        { icon: <GrMysql />, label: "MySQL" },
        { icon: <SiPrisma />, label: "Prisma" },
        { icon: <SiCplusplus />, label: "C++" },
    ]

    return (
        <div id="skills" className={"flex flex-col md:flex-row"}>
            <h2 className={'mr-auto'}>Skills</h2>
            <div
                className="mt-4 md:mt-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-3 md:gap-y-5">
                {skills.map(skill => <SkillItem key={skill.label} icon={skill.icon} label={skill.label}/>)}
            </div>
        </div>
    )
}