import "next-auth";

declare type Socials =
  | "github"
  | "frontendMentor"
  | "twitter"
  | "linkedin"
  | "hashnode"
  | "devto"
  | "stackOverflow"
  | "codeWars"
  | "gitlab"
  | "twitch"
  | "youtube"
  | "facebook"
  | "freeCodeCamp";

declare type UserInfo = {
  _id: string;
  email: string;
  image?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  displayEmail?: string | null;
};

export type UserLink = {
  _id: string;
  platform: Socials | null;
  url: string;
  order: number;
  new?: true;
  updated?: true;
};

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
