import VideoHero from "./_components/VideoHero";
import Welcome from "./_components/Welcome";
import Stickystack from "./_components/Stickystack";
import Highlights from "./_components/Highlights";
import Branches from "./_components/Branches";
import GetInvolved from "./_components/GetInvolved";
import AgeMinistries from "./_components/AgeMinistries";
import AnnualEvents from "./_components/AnnualEvents";
import PartnerBanner from "./_components/PartnerBanner";
import LeaderProfile from "./_components/LeaderProfile";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Stickystack>

        <VideoHero />
        <Welcome />
       
      </Stickystack>
       <Highlights /> 

       <Stickystack>
        <Branches />      
       <GetInvolved />
       </Stickystack>
       
      <AgeMinistries />
      <LeaderProfile />
        <AnnualEvents/>
        <PartnerBanner />
    </div>
  );
}
     
  

