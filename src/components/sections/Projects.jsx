import Card from "../Card.jsx";

export default function Projects() {
  const projects = [
    {
      id: 1,
      img: "/assets/vanlife_screenshot.png",
      title: "VanLife - A Travel Van Rental App",
      description:
        "VanLife Rental App is a web application that allows users to rent travel vans for their road trips or to" +
        " host their vans. The app provides a variety of vans with different features and prices, catering to" +
        " various travel needs. Not all features of this web application have been implemented. The main purpose of" +
        " this project is to learn React Router.",
      liveDemoLink: "https://vanlife-nine.vercel.app/",
      gitHubLink: "https://github.com/annabel-anh/vanlife",
    },
    {
      id: 2,
      img: "/assets/age_calculator_screenshot.png",
      title: "Age Calculator",
      description:
        "A web application built with HTML, CSS, and React that accurately calculates a person's age down to the exact number of days. Users simply input their birthdate, and the app dynamically displays their age in years, months, and days. The responsive design ensures a seamless experience across all devices.",
      liveDemoLink: "https://age-calculator-fe.netlify.app/",
      gitHubLink: "",
    },
    {
      id: 3,
      img: "/assets/24hintaipei_screenshot.png",
      title: "24h in Taipei - A Travel Guide",
      description:
        "A website designed to provide users with essential information for traveling in Taipei. It features form validation and theme toggling for a personalized user experience. It is built using HTML/CSS, JavaScript and is designed to run in a web browser on desktop or a tablet.",
      liveDemoLink: "https://24hintaipei.netlify.app/",
      gitHubLink: "https://github.com/annabel-anh/24h-in-taipei",
    },
    {
      id: 4,
      img: "/assets/discord_bot_screenshot.png",
      title: "Discord Bot",
      description:
        "A handy Discord bot built with Node.js and discord.js that lets users check local weather, send text messages and emails, generate lorem ipsum, dad jokes, and stream music remotely.",
      liveDemoLink: "",
      gitHubLink: "https://github.com/annabel-anh/discord-bot",
    },
  ];

  return (
    <section id="projects">
      <h2 className="mb-10">Featured Projects</h2>
      <div className={"flex flex-col gap-10"}>
        {projects.map((project) => Card({ ...project }))}
      </div>
    </section>
  );
}
