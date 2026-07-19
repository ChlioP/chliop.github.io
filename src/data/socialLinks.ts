import type { IconType } from "react-icons";
import {
  FaBriefcase,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

export type SocialLink = {
  name: string;
  url: string;
  icon: IconType;
  download?: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    name: "Portfolio",
    url: "https://chliop.github.io",
    icon: FaBriefcase,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chlio59/",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    url: "https://github.com/ChlioP",
    icon: FaGithub,
  },
  {
    name: "Email",
    url: "mailto:chliopham@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/tho_o59/",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/chliona59",
    icon: FaFacebook,
  },
  {
    name: "Download Resume",
    url: "./asset/Chliona-Pham-Resume-Data-Analyst.pdf",
    icon: HiOutlineDocumentArrowDown,
    download: true,
  },
];
