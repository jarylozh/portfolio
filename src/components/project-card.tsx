"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import gsap from "gsap";

type ProjectCardProps = {
  name: string;
  context: string;
  role: string;
  description: string;
  stack: string[];
  bullets: string[];
  link?: string;
};

export function ProjectCard({
  name,
  context,
  role,
  description,
  stack,
  bullets,
  link,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const bulletsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bulletsRef.current;
    if (!el) return;
    gsap.to(el, {
      height: expanded ? "auto" : 0,
      opacity: expanded ? 1 : 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [expanded]);

  const toggle = () => setExpanded((prev) => !prev);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-12">
      <div className="flex flex-col gap-2 md:col-span-4">
        <h3 className="text-2xl leading-tight sm:text-3xl">{name}</h3>
        <span className="text-xs text-foreground/60">{context}</span>
        <span className="text-xs text-foreground/50">{role}</span>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center gap-1 text-xs uppercase tracking-wider text-foreground underline-offset-4 transition-opacity hover:underline hover:opacity-70"
          >
            {link.replace(/^https?:\/\//, "")}
            <span aria-hidden>↗</span>
          </a>
        )}
      </div>

      <div className="flex flex-col md:col-span-8">
        <div
          role="button"
          tabIndex={0}
          aria-expanded={expanded}
          onClick={toggle}
          onKeyDown={handleKeyDown}
          className="group/desc flex cursor-pointer flex-col gap-3 outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
        >
          <p className="text-sm font-normal leading-relaxed text-foreground sm:text-base">
            {description}
          </p>
          <span className="text-xs text-foreground/50 transition-colors group-hover/desc:text-foreground">
            {expanded ? "− Hide my contributions" : "+ Show my contributions"}
          </span>
        </div>

        <div
          ref={bulletsRef}
          className="overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <ul className="flexN flex-col gap-3 pt-6">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="text-sm font-light leading-relaxed text-foreground sm:text-base"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 pt-6">
          {stack.map((tech) => (
            <span
              key={tech}
              className="border border-foreground/15 px-3 py-1 text-xs text-foreground/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
