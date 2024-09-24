export default function Card({
  id,
  img,
  title,
  description,
  liveDemoLink,
  gitHubLink,
}) {
  return (
    <article
      key={id}
      className={
        "flex flex-col md:grid md:grid-cols-7 lg:grid-cols-6 lg:w-full rounded-xl overflow-clip bg-white ring-1 ring-gray-900/10 shadow-sm hover:shadow-md transition-all ease-in-out duration-300"
      }
    >
      <div
        className={
          "md:col-span-3 lg:col-span-3 flex justify-center items-center p-6 bg-amber-50 ring-1" +
          " ring-gray-900/15"
        }
      >
        <img src={img} alt={title} className={"rounded-lg"} />
      </div>
      <div className={"flex flex-col gap-3 md:col-span-4 lg:col-span-3 p-10"}>
        <h3 className={"font-medium font-manrope text-xl text-gray-900"}>
          {title}
        </h3>
        <p className={"font-manrope"}>{description}</p>
        <div className={"flex gap-6 items-center mt-6"}>
          {liveDemoLink && (
            <a
              target={"_blank"}
              rel={"noopener noreferrer"}
              href={liveDemoLink}
              className="rounded-md bg-amber-600 text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors ease-in duration-300 hover:bg-amber-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige"
            >
              Live demo
            </a>
          )}
          {gitHubLink && (
            <a
              href={gitHubLink}
              className="group text-sm font-semibold leading-6 hover:text-amber-600"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <span className={"group-hover:underline underline-offset-8"}>
                Learn more
              </span>
              <span aria-hidden="true"> →</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
