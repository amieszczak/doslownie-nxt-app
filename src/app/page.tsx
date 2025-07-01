import LandingPageVideo from "./components/landingPage/video/landingPageVideo";
import LandingPageOffer from "./components/landingPage/offer/landingPageOffer";
import LandingPageTeamComponent from "./components/landingPage/team/landingPageTeamComponent";
import LandingPageSpecialistsComponent from "./components/landingPage/specialists/landingPageSpecialistsComponent";
import LandingPageBlog from "./components/landingPage/blog/landingPageBlog";
/* import getAllPosts from "@/integrations/wordpress/getAllPosts"; */

export default async function Home() {

  /* const posts = await getAllPosts(); */

  /* console.log('allPosts:', posts); */

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