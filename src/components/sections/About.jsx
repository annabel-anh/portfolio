export default function About() {
    return (<section id={'about'} className={'md:grid md:grid-cols-6'}>
            <h2 className={'md:col-span-2 md:max-w-1/3 mb-10 md:mb-0'}>About Me</h2>
            <article className={'md:col-span-4'}>
                <div className={'flex flex-col gap-6 lg:flex-row'}>
                    <img
                        src="/assets/button.jpg"
                        alt="Quynh Anh photo"
                        className={'w-36 h-36 rounded-full filter grayscale'}
                    />
                    <div className={'font-manrope tracking-wide leading-8 flex flex-col gap-3'}>
                        <p>
                            I&apos;m a Computer Science student focusing on full-stack web development. My journey into
                            coding started with a love for graphic design, which naturally led me to the world of web
                            development. I get to combine my creative skills with the challenge of building robust
                            backend systems – it&apos;s the best of both worlds!
                            I chose CS because it keeps me on my toes. There&apos;s always something new to learn in
                            this
                            fast-paced field, and I find that exciting.
                        </p>
                        <p>
                            When I&apos;m not coding, you&apos;ll probably find me reading a historical fiction, binging
                            British comedy shows, or hanging out with my three cats (Yes, I&apos;m one of those <i>childless cat ladies</i> that J.D. Vance was criticizing).
                        </p>
                    </div>
                </div>
            </article>
        </section>);
}
