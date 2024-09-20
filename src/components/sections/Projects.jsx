import Card from '../Card.jsx';

export default function Projects() {
    const projects = [
        {
            id: 1,
            img: '/assets/mockup.png',
            title: 'Promotional Landing Page for Our Favorite Show',
            description: 'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
            link: 'https://www.myportfolio.com'
        },
        {
            id: 2,
            img: '/assets/mockup.png',
            title: 'Promotional Landing Page for Our Favorite Show',
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
            <h2 className="mb-10">Projects</h2>
            <div className={'flex flex-col gap-10'}>
                {projects.map(project => Card({...project}))}
            </div>
        </section>
    );
}
