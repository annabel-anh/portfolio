import BackgroundGradient from "../BackgroundGradients.jsx";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <BackgroundGradient
        top={"-top-40 sm:-top-70"}
        left={"left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)]"}
        rotate={"30deg"}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Hi, I&apos;m Quynh Anh.
          <br />
          Welcome to my portfolio!
        </h1>
        <p className="mt-6 font-manrope text-lg leading-8">
          I&apos;m currently a Computer Science student at Utah Valley
          University in Orem, UT. Here you can find some of my projects and get
          to know me. Feel free to poke around or reach out!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            target={"_blank"}
            rel={"noopener noreferrer"}
            href="https://www.linkedin.com/in/quynhanhninh151/"
            className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-300 ease-in hover:bg-amber-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige"
          >
            Reach out via Linkedin
          </a>
          <a href="#about" className="group text-sm font-semibold leading-6">
            <span className={"underline-offset-8 group-hover:underline"}>
              Poke around 👀
            </span>{" "}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </motion.div>
      <BackgroundGradient
        top={"top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)]"}
        left={"left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)]"}
      />
    </div>
  );
}
