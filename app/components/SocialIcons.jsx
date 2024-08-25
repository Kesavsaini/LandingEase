import { DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { FaceBookIcon } from "./Icons";

export const SocialIcons = ({type}) => {
    const socialName = type.toLowerCase();
    switch (socialName) {
      case "github":
       return <GitHubLogoIcon className="size-8"/>;
      case "linkedin":
       return <LinkedInLogoIcon className="size-8" />;
      case "instagram":
       return <InstagramLogoIcon className="size-8" />;
      case "facebook":
         return <FaceBookIcon className="size-8"/>
      case "twitter":
        return  <TwitterLogoIcon className="size-8"/>
        case "discord":
          return  <DiscordLogoIcon className="size-8"/>
      default:
        break;
    }
  };