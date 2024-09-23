import React, { useRef } from "react";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { MdSchool, MdWork } from "react-icons/md";

export default function Experience() {
  const nodes = [
    {
      isWork: true,
      name: "ST Engineering",
      location: "Singapore",
      role: "Fullstack Software Engineer",
      duration: ["2021", "present"],
      points: [
        "Build frontend pages for a C2 system with Svelte",
        "Built a mobile application via Flutter that supports the above mentioned C2 system via incident reporting.",
        "Wrote some backend services using Golang to support some of the frontend pages",
      ],
      skills: [
        "JavaScript",
        "Flutter",
        "CSS",
        "Svelte",
        "HTML5",
        "TypeScript",
        "Amazon Web Services (AWS) ",
        "Tailwind",
        "Go",
      ].sort(),
      url: "https://www.stengg.com",
    },
    {
      isWork: false,
      name: "Real Time Interactive Simulation - Digipen Institute of Technology (SIT)",
      location: "Singapore",
      role: "Graduate",
      duration: ["2017", "2021"],
      points: [
        "Contributed to a year long game project by mostly building its level editor",
        "Built a gym booking app via Flutter and backend supported by Firebase",
      ],
      skills: ["C", "C++", "C#", "Flutter"],
      url: "https://www.digipen.edu/",
    },

    {
      isWork: true,
      name: "HelloHolo",
      location: "Singapore",
      role: "Mixed Reality Intern",
      duration: ["May 2021", "Aug 2021"],
      points: [
        "Contributed to certain features in a mixed reality application with Unity",
      ],
      skills: ["C#", "C++", "Unity"],
      url: "https://helloholo.sg",
    },
    {
      isWork: false,
      name: "Infocomm Security Management - Singapore Polytechnic",
      location: "Singapore",
      role: "Graduate",
      duration: ["2011", "2014"],
      points: [
        "Graduated in 2014 with a diploma in Infocomm Security Management (DISM)",
      ],
      skills: ["C", "Perl", "Java"],
      url: "https://www.sp.edu.sg/",
    },
    {
      isWork: true,
      name: "Defence Science Organization (DSO)",
      location: "Singapore",
      role: "Programming Intern",
      duration: ["2013", "2014"],
      points: [
        "Contributed to certain features in a mixed reality application with Unity",
      ],
      skills: ["HTML", "CSS", "Unity"],
      url: "https://helloholo.sg",
    },
  ];

  return (
    <table className="border-spacing-y-4 border-separate table-fixed">
      <tbody>
        {nodes.map((n, index: number) => (
          <tr
            key={index}
            onClick={() => {
              window.open(n.url);
            }}
            className="align-top hover:brightness-125 transition-colors duration-200 ease-in-out group hover:bg-teal-50/10 hover:shadow-lg hover:cursor-pointer"
          >
            <td className="py-4 px-4 group-hover:text-teal-400 transition-colors duration-200 ease-in-out">
              {n.isWork ? <MdWork size={20} /> : <MdSchool size={20} />}
            </td>
            <td className="py-4 xl:block min-w-24 hidden text-xs  uppercase text-slate-100/75 group-hover:text-teal-400 transition-colors duration-200 ease-in-out mx-4">
              {n.duration[0]} - {n.duration[1]}
            </td>
            <td className="py-3 mx-4 px-2">
              <h1 className="text-white group-hover:text-teal-400 transition-all duration-200 ease-in-out">
                {n.role} - {n.name}
              </h1>
              <p className="text-xs py-1 mb-2 xl:hidden">
                {n.duration[0]} - {n.duration[1]}
              </p>
              <ul className="px-4">
                {n.points.map((p, index: number) => (
                  <li
                    key={index}
                    className="text-slate-100/75 text-sm list-disc"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex w-full flex-wrap gap-2 pt-2 py-2">
                {n.skills?.map((s, index: number) => (
                  <span
                    key={index}
                    className="text-xs font-medium rounded-lg text-teal-400 bg-teal-800/50 px-2 py-1 capitalize"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </td>
            <td className="py-4 px-4">
              <LuArrowUpRightSquare
                size={16}
                className="group-hover:text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 duration-200 ease-in-out transition-transform"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
