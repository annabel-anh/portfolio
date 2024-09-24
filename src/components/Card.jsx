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
        "flex flex-col overflow-clip rounded-xl bg-white shadow-sm ring-1 ring-gray-900/10 transition-all duration-300 ease-in-out hover:shadow-md md:grid md:grid-cols-7 lg:w-full lg:grid-cols-6"
      }
    >
      <div
        className={
          "flex items-center justify-center bg-amber-50 p-6 ring-1 md:col-span-3 lg:col-span-3" +
          " ring-gray-900/15"
        }
      >
        <img src={img} alt={title} className={"rounded-lg"} />
      </div>
      <div className={"flex flex-col gap-3 p-10 md:col-span-4 lg:col-span-3"}>
        <h3 className={"font-manrope text-xl font-medium text-gray-900"}>
          {title}
        </h3>
        <p className={"font-manrope"}>{description}</p>
        <div className={"mt-6 flex items-center gap-6"}>
          {liveDemoLink && (
            <a
              target={"_blank"}
              rel={"noopener noreferrer"}
              href={liveDemoLink}
              className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-300 ease-in hover:bg-amber-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige"
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
              <span className={"underline-offset-8 group-hover:underline"}>
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
