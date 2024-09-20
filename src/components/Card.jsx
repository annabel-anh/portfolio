export default function Card({img, title, description, link}) {
    return (
        <article className={'flex flex-col md:grid md:grid-cols-7 lg:grid-cols-6 lg:w-full bg-muted-blue/70 rounded-xl'}>
            <div
                className={'md:col-span-3 lg:col-span-3 flex justify-center items-center bg-muted-blue p-6 rounded-t-xl md:rounded-r-none md:rounded-l-xl'}>
                <img
                    src={img}
                    alt={title}
                    className={'rounded-lg'}
                />
            </div>
            <div className={'flex flex-col gap-3 md:col-span-4 lg:col-span-3 p-10'}>
                <h3 className={'font-medium font-manrope text-xl text-white'}>{title}</h3>
                <p className={'font-manrope text-light-blue leading-6'}>{description}</p>
                <a href="#" className="group text-sm font-semibold leading-6 text-yellow">
                    <span className={'group-hover:underline underline-offset-8'}>
                      Learn more
                    </span>
                    <span aria-hidden="true"> →</span>
                </a>
            </div>
        </article>
    )

}