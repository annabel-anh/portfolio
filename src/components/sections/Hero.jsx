import BackgroundGradient from "../BackgroundGradients.jsx";

export default function Hero() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <BackgroundGradient top={"-top-40 sm:-top-70"} left={"left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)]"} rotate={"rotate-[30deg]"}/>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-yellow">
          Hi, I&apos;m Quynh Anh.
          <br />
          Welcome to my portfolio!
        </h1>
        <p className="mt-6 text-lg leading-8 font-light">
          I&apos;m currently a Computer Science student at Utah Valley
          University in Orem, UT. Here you can find some of my projects and get
          to know me. Feel free to poke around or reach out!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://www.linkedin.com/in/quynhanhninh151/"
            className="rounded-md bg-yellow text-navy-blue px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors ease-in duration-300 hover:bg-light-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige"
          >
            Reach out via Linkedin
          </a>
          <a href="#about" className="group text-sm font-semibold leading-6">
            <span className={"group-hover:underline underline-offset-8"}>
              Poke around 👀
            </span>{" "}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <BackgroundGradient top={"top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)]"} left={"left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)]"}/>
    </div>
  );
}
