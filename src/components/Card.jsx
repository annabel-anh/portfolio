import { Button } from "flowbite-react";

export default function Card({ img, title, description, link }) {
    return (
        <article className={"md:grid md:grid-cols-6 rounded-2xl w-3/5"}>
            <div className={"md:col-span-3 flex justify-center items-center p-6 rounded-3xl bg-red"}>
                <img
                    src={img}
                    alt={title}
                    className={"rounded-2xl h-48"}
                />
            </div>
            <div className={"md:col-span-3 p-6"}>
                <h3 className={"font-bold tracking-tight text-lg text-yellow"}>{title}</h3>
                <p className={"font-light"}>{description}</p>
                <Button>Learn more</Button>
            </div>
        </article>
    )

}