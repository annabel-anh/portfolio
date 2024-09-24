export default function Contact() {
  return (
    <section
      id="contact"
      className={"mt-12 bg-gray-900 px-6 py-20 text-white sm:px-12"}
    >
      <h2 className={"mb-10 text-amber-600"}>Let&apos;s Connect</h2>
      <div className={"mb-10 font-manrope"}>
        <p className={"mb-3"}>
          Say hello at{" "}
          <a
            href={"mailto:qanh.ninh@gmail.com"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className={"underline underline-offset-8 hover:text-amber-400"}
          >
            qanh.ninh@gmail.com
          </a>
        </p>
      </div>
      <a
        href="https://www.linkedin.com/in/quynhanhninh151/"
        target={"_blank"}
        rel={"noopener noreferrer"}
        className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-300 ease-in hover:bg-amber-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige"
      >
        Connect with me on Linkedin
      </a>
    </section>
  );
}
