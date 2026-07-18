import MinistriesHero from "./_components/MinistriesHero";
import InfoSplitBanner from "@/components/shared/section/InfoSplitBanner";
import CampusMinistries from "./_components/CampusMinistries";

export default function MinistriesPage() {
  return (
    <div>
      <MinistriesHero />
      <InfoSplitBanner
        kicker="Global Outreach Framework"
        title="Spreading Light Everywhere"
        description="Our mission extends far beyond our local walls. We are actively establishing community blueprints, structural training centers, and sending global ambassadors to manifest God's love to the world."
        imageSrc="/img/banner1.jpg"
        imageAlt="Global missions outreach team serving in a community"
      />
      <CampusMinistries />
    </div>
  )
}
