import Card from '../Card.jsx';

export default function Projects() {
    const projects = [
        {
            id: 1,
            img: '/assets/button.jpg',
            title: 'Project 1',
            description: 'Description 1',
            link: 'https://www.google.com'
        },
        {
            id: 2,
            img: '/assets/button.jpg',
            title: 'Project 2',
            description: 'Description 2',
            link: 'https://www.google.com'
        },
        {
            id: 3,
            img: '/assets/button.jpg',
            title: 'Project 3',
            description: 'Description 3',
            link: 'https://www.google.com'
        }
    ]

    return (
        <section id="projects">
            <h2 className="mb-10">Projects</h2>
            <div>
                {projects.map(project => Card({ ...project }))}
            </div>
        </section>
    );
}
