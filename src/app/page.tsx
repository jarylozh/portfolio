"use client";
import React, { useRef } from "react";
import "./page.css";
import { Link } from "react-scroll";
import Experience from "./components/experience/experience";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const menu = [
  {
    label: "about",
    link: "about",
  },
  {
    label: "experience",
    link: "experience",
  },

  {
    label: "project",
    link: "project",
  },
];

const certifications = [
  {
    name: "Amazon Web Services Developer - Associate",
    subheader: "Amazon Web Services (AWS)",
    points: ["Issued Dec 2023", "Credential ID SKGHHPGBSFF1QSWC"],
    url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/SKGHHPGBSFF1QSWC",
  },
];

export default function Home() {
  return (
    <main className="xl:grid xl:grid-cols-2 xl:h-screen py-4 w-full">
      <div className="xl:h-full xl:w-1/2 min-w-[500px] xl:ml-auto px-20 pt-24 w-full">
        <h1 className="text-slate-200 text-3xl">Jaryl Ong</h1>
        <h2 className="text-lg font-medium mt-3 text-slate-200">
          Software Engineer
        </h2>
        <p className="mt-4 w-64 text-sm text-slate-200 tracking-tight opacity-50">
          I create immersive and engaging digital experience, or at least I try
          to be.
        </p>

        <nav className="xl:block hidden">
          <ul className="uppercase text-xs tracking-wide mt-16">
            {menu.map((m, index: number) => (
              <Link
                key={index}
                containerId="scroll-container"
                to={m.link}
                spy={true}
                smooth={true}
                offset={-96}
                duration={500}
                activeClass="active"
              >
                <li
                  className="my-4 flex items-center group hover:cursor-pointer"
                  key={index}
                >
                  <hr className="seperator transition-width duration-200 ease-in-out w-12 group-hover:w-24 mr-4 border-[1px] rounded" />
                  <span
                    className={`tracking-[0.15rem] 
                    )}`}
                  >
                    {m.label}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>

        <footer className="flex gap-4 mt-16">
          <a className="nav-links">
            <FaGithub fontSize={24} />
          </a>
          <a className="nav-links">
            <FaInstagram fontSize={24} />
          </a>
          <a className="nav-links">
            <FaLinkedin fontSize={24} />
          </a>
        </footer>
      </div>

      <div className="xl:overflow-y-auto px-16" id="scroll-container">
        <div className="pt-24 xl:w-3/4 xl:min-w-[500px] w-full mr-auto flex flex-col gap-24  text-slate-100/75">
          <section id="about" className="w-full p-4 flex gap-4 flex-col">
            <h1 className="uppercase tracking-wider text-base font-bold block xl:hidden">
              About
            </h1>

            <p>Hello there, I'm Jaryl, a software engineer at ST Engineering. 
              I've been with the company for almost three years now.</p>
            <p className="">
              While my focus primarily centers around frontend work, I also
              possess a bit of experience in backend development, which adds
              depth and versatility to my skill set.
            </p>

            <p className="">
              Outside the office, you'll often find me practicing mexican grown
              karate, building gunplas or hunting monsters at Moga village with
              my partner.
            </p>
          </section>

          {/* Certification */}
          <section className="flex flex-col gap-4">
            <h1 className="uppercase tracking-wider text-base font-bold block xl:hidden">
              Certification
            </h1>

            {certifications.map((c, index: number) => (
              <a
                key={index}
                target="_blank"
                href={c.url}
                className="items-start w-full gap-4 p-4 flex hover:brightness-125 transition-colors duration-200 ease-in-out group hover:bg-teal-50/10 hover:shadow-lg hover:cursor-pointer"
              >
                <img src="./aws.png" className="w-16 my-auto" />
                <div className="px-4 grow">
                  <h1 className="group-hover:text-teal-400 transition-colors duration-200 ease-in-out text-white">
                    {c.name}
                  </h1>
                  <h2>{c.subheader}</h2>
                  <ul>
                    {c.points.map((p: string, index: number) => (
                      <li key={index} className="text-sm text-slate-100/75">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <span>
                  <LuArrowUpRightSquare
                    fontSize={16}
                    className="group-hover:text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 duration-200 ease-in-out transition-transform"
                  />
                </span>
              </a>
            ))}
          </section>

          <section id="experience" className="p-4 flex flex-col gap-4">
            <h1 className="uppercase tracking-wider text-base font-bold block xl:hidden">
              Experience
            </h1>
            <Experience />
          </section>

          <section id="project" className=""></section>
        </div>
      </div>
    </main>
  );
}
