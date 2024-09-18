export default function About() {
    return (
        <section id={'about'} className={'md:grid md:grid-cols-6'}>
            <h2 className={'md:col-span-2 md:max-w-1/3 mb-5 md:mb-0'}>About Me</h2>
            <article className={"md:col-span-4"}>
                <img
                    src="/assets/button.jpg"
                    alt="Quynh Anh photo"
                    className={'w-36 h-36 rounded-full'}
                />
            </article>
        </section>
    );
}
