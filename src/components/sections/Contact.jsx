export default function Contact() {
    return (<section id="contact" className={'mt-12 bg-gray-900 text-white px-6 py-12 sm:px-12'}>
            <h2 className={'mb-10 text-blue-400'}>Let&apos;s Connect</h2>
            <div className={'font-manrope mb-10'}>
                <p className={'mb-3'}>Say hello at <a href={'mailto:qanh.ninh@gmail.com'}
                       target={"_blank"}
                       rel={"noopener noreferrer"}
                       className={'hover:text-blue-400 underline underline-offset-8'}>qanh.ninh@gmail.com
                    </a>
                </p>
                <p className={'group'}>For more information, here&apos;s my <a href="/public/cv/quynhanhninh_swe_cv.pdf"
                       className={'hover:text-blue-400 underline underline-offset-8'}
                       target={'_blank'}>resume
                    </a>
                </p>
            </div>
            <a
                href="https://www.linkedin.com/in/quynhanhninh151/"
                target={"_blank"}
                rel={"noopener noreferrer"}
                className="rounded-md bg-blue-600 text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors ease-in duration-300 hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige"
            >
                Connect with me on Linkedin
            </a>
        </section>);
}
