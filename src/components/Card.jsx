export default function Card({ img, title, description, link }) {
    return (
        <article className={"md:grid md:grid-cols-5 text-red"}>
            <div>
                <img
                    src={img}
                    alt={title}
                    className={"w-36 h-36"}
                />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link}>Learn more</a>
            </div>
        </article>
    )

}