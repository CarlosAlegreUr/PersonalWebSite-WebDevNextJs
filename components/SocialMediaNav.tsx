import Image from "next/image";

import SocialMediaItem from "./SocialMediaItem";

interface socialMediaItemParams {
  logo: string;
  socialMediaName: string;
  link: string;
}

// To add a social media, add one more element to this array.
const socialMediaItemsToDisplay: Array<socialMediaItemParams> = [
  {
    logo: "/images/linkedinlogo.png",
    socialMediaName: "linkedIn",
    link: "https://es.linkedin.com/in/carlos-alegre-urquiz%C3%BA-0b19701b3",
  },
  {
    logo: "/images/githublogo.png",
    socialMediaName: "gitHub",
    link: "https://github.com/CarlosAlegreUr",
  },
  {
    logo: "/images/fiverr.webp",
    socialMediaName: "fiverr",
    link: "https://www.fiverr.com/",
  },
  {
    logo: "/images/leetcode.webp",
    socialMediaName: "leetCode",
    link: "https://leetcode.com/",
  },
];

export default function SocialMediaNav() {
  return (
    <nav className="social-media-nav">
      <ul>
        {socialMediaItemsToDisplay.map(
          (itemParams: socialMediaItemParams, id: number) => {
            return (
              <SocialMediaItem
                key={id}
                logo={itemParams.logo}
                socialMediaName={itemParams.socialMediaName}
                link={itemParams.link}
              />
            );
          }
        )}
      </ul>
    </nav>
  );
}
