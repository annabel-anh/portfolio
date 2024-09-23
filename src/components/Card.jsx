export default function Card({img, title, description, link}) {
    return (
        <article className={'group flex flex-col md:grid md:grid-cols-7 lg:grid-cols-6 lg:w-full rounded-xl overflow-clip bg-white ring-1 ring-gray-900/10 shadow-sm hover:shadow-md transition-all ease-in-out duration-300'}>
            <div
                className={'md:col-span-3 lg:col-span-3 flex justify-center items-center p-6 bg-blue-100 ring-1 ring-gray-900/15'}>
                <img
                    src={img}
                    alt={title}
                    className={'rounded-lg'}
                />
            </div>
            <div className={'flex flex-col gap-3 md:col-span-4 lg:col-span-3 p-10'}>
                <h3 className={'font-medium font-manrope text-xl text-gray-900'}>{title}</h3>
                <p className={'font-manrope leading-6'}>{description}</p>
                <a href="#" className="group text-sm font-semibold leading-6 group-hover:text-blue-600" target={"_blank"}
                   rel={"noopener noreferrer"}>
                    <span className={'group-hover:underline underline-offset-8'}>
                      Learn more
                    </span>
                    <span aria-hidden="true"> →</span>
                </a>
            </div>
        </article>
    )

}