import React from "react";
import netflix from "../../public/netflix.png";
import food from "../../public/food.png";
import quickTube from "../../public/quickTube.png";
import counter from "../../public/counter.png";
import loan from "../../public/loan.png";

const ProtFolio = () => {
  const cardItem = [
    {
      id: 1,
      logo: netflix,
      name: "Netflix-Gpt",
      desc: "I developed a Netflix-inspired streaming platform featuring user registration, login, search, and video playback, utilizing Firebase Auth and React Router for seamless navigation and authentication. The platform integrates the TMDb API to showcase dynamic content, including trending, popular, upcoming, and horror movies, while incorporating the GPT API for intelligent search suggestions and personalized content discovery. Additionally, I optimized the UI/UX using Tailwind CSS and efficiently managed state with Redux, achieving a 25% improvement in responsiveness.",
      liveLink: "https://netflixgpt-murex.vercel.app/browse",
      sourseCode: "https://github.com/guddu31197/netflix-gpt",
    },
    {
      id: 2,
      logo: food,
      name: "Food-Ordering",
      desc: "I developed a dynamic food ordering interface featuring restaurant listings, search functionality, and item browsing, integrating the Swiggy API to fetch real-time restaurant data and eliminate manual data handling entirely. The application leverages Redux Toolkit for scalable state management, resulting in improved performance and a 30% reduction in re-renders. Additionally, I implemented login and logout functionality with local storage-based session management, enhancing both user retention and security.",
      liveLink: "https://food-app-01.vercel.app/",
      sourseCode: "https://github.com/guddu31197/food-app-01",
    },
    {
      id: 3,
      logo: quickTube,
      name: "Quick Tube",
      desc: "I engineered a responsive video streaming platform that emulates YouTube, featuring real-time content rendering for an engaging user experience. By integrating the YouTube Data API v3, the platform dynamically fetches trending videos, video details, and search results. I developed custom search and filtering logic to enhance video discoverability and user interaction, while leveraging Redux Toolkit for efficient state management across components, resulting in faster load times and smoother navigation.",
      liveLink: "https://youtube-psi-one.vercel.app/",
      sourseCode: "https://github.com/guddu31197/youtube",
    },
    {
      id: 4,
      logo: counter,
      name: "Counter App",
      desc: "I built a lightweight counter application using vanilla JavaScript, featuring increment and reset functionalities for user interaction. The app employs event listeners to deliver real-time UI updates and is styled with clean, responsive CSS to ensure seamless performance across devices. Additionally, I focused on efficient DOM manipulation to provide a smooth and lag-free user experience.",
      liveLink: "https://react-counter-amber.vercel.app/",
      sourseCode: "https://github.com/guddu31197/React-counter",
    },
    {
      id: 5,
      logo: loan,
      name: "Loan Calculator app",
      desc: "I built a loan calculator supporting multiple currencies, allowing users to compute monthly payments and total interest accurately. It features real-time currency conversion using a live exchange rate API. Users can input loan details and instantly see results in their selected currency. The responsive design ensures a smooth experience across all devices.",
      liveLink: "https://loan-calculator-ivpl.vercel.app/",
      sourseCode: "https://github.com/guddu31197/calculator-app",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, desc, liveLink, sourseCode }) => (
            <div
              className="md:w-[265px] md:h-[300px] border-[1px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700 h-20 overflow-y-scroll">
                  {desc}
                </p>
              </div>
              <div className="px-3 py-2 flex flex-wrap gap-1 justify-around">
                <a
                  href={liveLink}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded cursor-pointer"
                >
                  Live
                </a>
                <a
                  href={sourseCode}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded cursor-pointer"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProtFolio;
