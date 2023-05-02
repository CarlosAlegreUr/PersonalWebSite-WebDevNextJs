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
    logo: "/images/other-pages-logos/linkedinlogo.png",
    socialMediaName: "linkedIn",
    link: "https://es.linkedin.com/in/carlos-alegre-urquiz%C3%BA-0b19701b3",
  },
  {
    logo: "/images/other-pages-logos/githublogo.png",
    socialMediaName: "gitHub",
    link: "https://github.com/CarlosAlegreUr",
  },
  {
    logo: "/images/other-pages-logos/fiverr.webp",
    socialMediaName: "fiverr",
    link: "https://www.fiverr.com/carlosalegreur?public_mode=true",
  },
  {
    logo: "/images/other-pages-logos/leetcode.webp",
    socialMediaName: "leetCode",
    link: "https://leetcode.com/CarlosAlegreUrquizu/",
  },
];

export default function SocialMediaNav(): JSX.Element {
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
