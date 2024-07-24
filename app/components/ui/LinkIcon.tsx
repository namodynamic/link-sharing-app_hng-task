import Image from "next/image";
import React from "react";

const Icons = {
  github: "/assets/images/icon-github.svg",
  frontendMentor: "/assets/images/icon-frontend-mentor.svg",
  twitter: "/assets/images/icon-twitter.svg",
  linkedin: "/assets/images/icon-linkedin.svg",
  hashnode: "/assets/images/icon-hashnode.svg",
  devto: "/assets/images/icon-devto.svg",
  stackOverflow: "/assets/images/icon-stack-overflow.svg",
  codeWars: "/assets/images/icon-codewars.svg",
  gitlab: "/assets/images/icon-gitlab.svg",
  twitch: "/assets/images/icon-twitch.svg",
  youtube: "/assets/images/icon-youtube.svg",
  facebook: "/assets/images/icon-facebook.svg",
  freeCodeCamp: "/assets/images/icon-freecodecamp.svg",
};

type Props = {
  iconKey: Socials;
};

const LinkIcon: React.FC<Props> = ({ iconKey }) => {
  return <Image src={Icons[iconKey]} width={20} height={20} alt={iconKey} />;
};

export default LinkIcon;
