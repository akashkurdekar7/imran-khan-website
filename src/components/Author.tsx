import SocialsDesktop from "./SocialsDesktop";
import SocialsMobile from "./SocialsMobile";

const Author = () => {
  return (
    <>
      <div className="hidden lg:block">
        <SocialsDesktop />
      </div>

      <div className="block lg:hidden">
        <SocialsMobile />
      </div>
    </>
  );
};

export default Author;
