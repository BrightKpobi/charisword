import AboutHero from "./_components/AboutHero"
import AboutMandate from "./_components/AboutMandate"
import StickyStack from "../_components/Stickystack"
import VisionMission from "./_components/VisionMission"
import AboutLeaderProfile from "./_components/AboutLeaderProfile"
import StatementOfFaith from "./_components/StatementOfFaith"
import CentralExecutiveCouncil from "./_components/CentralExecutiveCouncil"
import PartnerBanner from "../_components/PartnerBanner"
export default function AboutPage() {
  return (
    <div className="min-h-screen">
        <StickyStack>
        <AboutHero />
        <AboutMandate />
        </StickyStack>
      
      <VisionMission />
      <AboutLeaderProfile />
      <AboutLeaderProfile />
      <StatementOfFaith />
        <CentralExecutiveCouncil />

        <PartnerBanner />
    </div>
  )
}
