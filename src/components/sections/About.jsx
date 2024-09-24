export default function About() {
  return (
    <section id={"about"} className={"md:grid md:grid-cols-6"}>
      <h2 className={"md:max-w-1/3 mb-10 md:col-span-2 md:mb-0"}>About Me</h2>
      <article className={"md:col-span-4"}>
        <div className={"flex flex-col gap-6 lg:flex-row"}>
          <img
            src="/assets/qanh.jpeg"
            alt="Quynh Anh photo"
            className={"h-36 w-36 rounded-full grayscale filter"}
          />
          <div
            className={
              "flex flex-col gap-3 font-manrope leading-8 tracking-wide"
            }
          >
            <p>
              Hi there! I&apos;m Quynh Anh (pronounced like <i>Quinn Ann</i>).
            </p>
            <p>
              I moved to the U.S. from Vietnam a few years ago. While waiting
              for my permanent residency, I wasn&apos;t able to work due to visa
              restrictions, so I decided to go back to school. This led me to
              pursue a degree in <b>Computer Science</b>. I first chose CS
              because of its practicality, but once I started, I discovered a
              passion for problem-solving, and building things from scratch.
            </p>
            <p>
              I&apos;ve since developed a strong foundation in{" "}
              <b>full-stack web development</b>, with experience in technologies
              such as React, Node.js, Express.js, and relational databases. One
              of my key projects involved building a full-stack web application
              that integrates a front end using Bootstrap and React with a
              RESTful API built with Express.js and MySQL. This project allowed
              me to improve my skills in both front-end and back-end
              development. Also, as an Instructional Assistant for
              Object-Oriented Programming (OOP) classes, I have also gained a
              strong understanding of OOP principles and how they can be applied
              in real-world applications.
              <br />
              In addition to my development experience, I found an interest in{" "}
              <b>data analytics</b> when I first learned about relational
              databases and SQL. This led me to pursue a minor in Applied Data
              Analytics, where I gained a deeper knowledge of advanced SQL
              concepts, Python, and libraries for data analysis, as well as
              tools like Tableau.
            </p>
            <p>
              My permanent residency was approved in 2022, and I am{" "}
              <b>
                fully authorized to work in the U.S. without the need for
                sponsorship
              </b>{" "}
              (yay!). I am seeking opportunities in either{" "}
              <b>full-stack development</b> or <b>data analysis</b> roles,
              excited to apply my skills in a professional setting and continue
              growing as a tech professional.
            </p>
            <p>
              Outside of coding, I enjoy historical fiction, British comedy
              shows, and hanging out with my three cats.
            </p>
            <a
              target={"_blank"}
              rel={"noopener noreferrer"}
              href="/public/cv/quynhanhninh_swe_cv.pdf"
              className="mt-3 w-fit rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-300 ease-in hover:bg-amber-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige"
            >
              Download my resume
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
