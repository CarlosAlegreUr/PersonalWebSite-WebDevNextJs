import Image from "next/image";

interface propsUsed {
  logo: string;
  socialMediaName: string;
  link: string;
}

export default function SocialMediaItem({
  logo,
  socialMediaName,
  link,
}: propsUsed): JSX.Element {
  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer">
        {socialMediaName}
        <Image
          className=""
          src={logo}
          width={"30"}
          height={"30"}
          alt={socialMediaName + " logo"}
        />
      </a>
    </li>
  );
}
