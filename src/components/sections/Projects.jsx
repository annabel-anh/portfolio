import Card from '../Card.jsx';

export default function Projects() {
    const projects = [
        {
            id: 1,
            img: '/assets/portfolio_screenshot.png',
            title: 'Personal Portfolio Website',
            description: 'This portfolio website showcases my projects and skills as a Computer Science student, featuring a modern and responsive design with smooth animations, built using React, Tailwind CSS, and Framer Motion.',
            link: 'https://github.com/annabel-anh/portfolio'
        },
        {
            id: 2,
            img: '/assets/vanlife_screenshot.png',
            title: 'VanLife - A Travel Van Rental App',
            description: 'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
            link: 'https://www.myportfolio.com'
        },
        {
            id: 3,
            img: '/assets/mockup.png',
            title: 'Promotional Landing Page for Our Favorite Show',
            description: 'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
            link: 'https://www.myportfolio.com'
        }
    ]

    return (
        <section id="projects">
            <h2 className="mb-10">Featured Projects</h2>
            <div className={'flex flex-col gap-10'}>
                {projects.map(project => Card({...project}))}
            </div>
        </section>
    );
}
