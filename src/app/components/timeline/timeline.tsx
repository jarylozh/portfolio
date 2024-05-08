import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { Timeline as MuiTimeline } from "@mui/lab";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineSeparator,
} from "@mui/lab";
import Typography from "@mui/material/Typography";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import React from "react";

const nodes = [
  {
    name: "ST Engineering",
    location: "Singapore",
    role: "Fullstack Software Engineer",
    duration: ["September 2021", "present"],
    points: [
      "Build frontend pages for a C2 system with Svelte",
      "Built a mobile application via Flutter that supports the above mentioned C2 system via incident reporting.",
      "Wrote some backend services using Golang to support some of the frontend pages",
    ],
  },
  {
    name: "HelloHolo",
    location: "Singapore",
    role: "Mixed Reality Intern",
    duration: ["May 2021", "Aug 2021"],
    points: [
      "Contributed to certain features in a mixed reality application with Unity",
    ],
  },

  {
    name: "Defence Science Organization",
    location: "Singapore",
    role: "Programming Intern",
    duration: ["September 2021", "present"],
    points: [
      "Used Unity to build a diversity of websites and mixed/virtual reality applications",
    ],
  },
];

export default function Timeline() {
  return (
    <MuiTimeline
      className="p-0"
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {nodes.map((n, index: number) => (
        <TimelineItem
          className={`p-3 rounded-lg ${index === 0 ? "bg-green-600" : ""}`}
        >
          <TimelineSeparator>
            <TimelineDot>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              fontFamily={""}
              variant="h6"
              component="span"
            >
              <div className="flex justify-between text-sm font-semibold">
                {n.name}
                <span>{n.location}</span>
              </div>

              <div className="flex justify-between text-sm italic">
                {n.role}
                <span>
                  {n.duration[0]} - {n.duration[1]}
                </span>
              </div>
            </Typography>
            <Typography>
              <ul className="text-sm list-disc">
                {n.points.map((p) => (
                  <li>{p}</li>
                ))}
              </ul>
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MuiTimeline>
  );
}
