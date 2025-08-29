import { DiMongodb } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import {
  RiCss3Line,
  RiHtml5Line,
  RiJavascriptLine,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import { SiRedux } from "react-icons/si";

export const skills = [
  {
    skill: "html",
    icon: <RiHtml5Line className="size-15"/>,
  },
  {
    skill: "css",
    icon: <RiCss3Line className="size-15"/>,
  },
  {
    skill: "javascript",
    icon: <RiJavascriptLine className="size-15"/>,
  },
  {
    skill: "react",
    icon: <RiReactjsLine className="size-15"/>,
  },
  {
    skill: "next js",
    icon: <RiNextjsLine className="size-15"/>,
  },
  {
    skill: "tailwind",
    icon: <RiTailwindCssLine className="size-15"/>,
  },
  {
    skill: "redux",
    icon: <SiRedux className="size-15"/>,
  },
  {
    skill: "node",
    icon: <RiNodejsLine className="size-15"/>,
  },
  {
    skill: "graphql",
    icon: <GrGraphQl className="size-15"/>,
  },
  {
    skill: "mongo",
    icon: <DiMongodb className="size-15"/>,
  },
];
