import LandingPageOffer from "./components/landingPage/offer/landingPageOffer";
import LandingPageTeamComponent from "./components/landingPage/team/landingPageTeamComponent";
import LandingPageSpecialistsComponent from "./components/landingPage/specialists/landingPageSpecialistsComponent";
import LandingPageBlog from "./components/landingPage/blog/landingPageBlog";
import LandingPageVideo from "./components/landingPage/video/landingPageVideo";

export default async function Home() {

  return (
    <>
      <LandingPageVideo/>
      <LandingPageOffer/>
      <LandingPageTeamComponent/>
      <LandingPageSpecialistsComponent/>
      <LandingPageBlog />
    </>
  );
}