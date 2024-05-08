import Timeline from "@/app/components/timeline/timeline";

const skills = [
    {
      header: "Languages",
      content: "C++, Javascript/Typescript, Golang, HTML, CSS/Tailwind, Dart",
    },
    {
      header: "Frameworks",
      content: "Svelte, Flutter, React (pending)",
    },
    {
      header: "Certifications",
      content: "AWS Developer Associate (2023)",
    },
  ];
  

export default function Resume() {

    return (
        <div className="xl:w-1/2 w-full min-w-[800px] mx-auto xl:border h-full p-20 flex flex-col gap-8">
        <header className="">
          <p className="text-xl border-b-2 p-2">Jaryl Ong</p>
          <p className="text-sm p-1 font-light flex">
            jarylozh@gmail.com
            <span className="ml-auto">(+65) 91590698</span>
          </p>
        </header>

        <section className="">
          <table className="">
            <tbody>
            {skills.map((skill) => (
              <tr className="text-xs font-light">
                <td className="">{skill.header}</td>
                <td className="pl-2">{skill.content}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </section>

        <section className=''>
              <Timeline/>
        </section>
      </div>
    )
}