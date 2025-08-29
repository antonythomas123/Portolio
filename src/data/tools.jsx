import { FaConfluence, FaFigma, FaJira } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const tools = [
  {
    tool: "vscode",
    icon: <VscVscode className="size-15" />,
  },
  {
    tool: "postman",
    icon: <SiPostman className="size-15" />,
  },
  {
    tool: "figma",
    icon: <FaFigma className="size-15" />,
  },
  {
    tool: "jira",
    icon: <FaJira className="size-15" />,
  },
  {
    tool: "confluence",
    icon: <FaConfluence className="size-15" />,
  },
];
