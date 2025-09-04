import { LaunchLane, Portfolio, Ecom } from "../assets";

export const works = [
  {
    title: "E-Commerce app",
    image: Ecom,
    hostedLink: '',
    github: 'https://github.com/antonythomas123/e-commerce',
    tech: ["Next JS", "TypeScript", "Tailwind CSS", "Stripe"],
  },
  {
    title: "Launchlane",
    image: LaunchLane,
    hostedLink: "https://launch-lane-one.vercel.app/",
    github: "https://github.com/antonythomas123/Launch-Lane",
    tech: ["Next JS", "TypeScript", "Tailwind CSS", "Sentry", "NextAuth"]
  },
  {
    title: "Portfolio",
    image: Portfolio,
    hostedLink: 'https://portolio-v2-gilt.vercel.app/',
    github: 'https://github.com/antonythomas123/Portolio',
    tech: ["React JS", "Javascript", "CSS", "Tailwind CSS", "Framer motion"]
  }
];
