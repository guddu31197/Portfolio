import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.png";
import javascript from "../../public/javascript.png";
import reactJS from "../../public/react.png";
import nodejs from "../../public/node.png";
import express from "../../public/express.png";
import mongoDB from "../../public/mongodb.png";
import java from "../../public/java.png";

const Experiance = () => {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavScript",
    },
    {
      id: 4,
      logo: reactJS,
      name: "ReactJS",
    },
    {
      id: 5,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 6,
      logo: express,
      name: "ExpressJS",
    },
    {
      id: 7,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 8,
      logo: java,
      name: "Java(Core)",
    },
  ];
  return (
    <div name="Experiance" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="">
          I have more than 2 years of exprience in the below technology.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[1px] md:w-[200px] md:h-[200px] rounded-full p-1 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[150px] rounded-full"
                alt=""
              />
              <div>
                <div>{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiance;
