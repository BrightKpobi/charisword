import ShortHero from "@/components/shared/hero/ShortHero";
import InfoSplitBanner from "@/components/shared/section/InfoSplitBanner";
export default function MICPage() {
  return (
    <div className="min-h-screen">
     <ShortHero 
  subheader="Charisword Department"
  header="MOVEMENT IN CHRIST - M.I.C."
//   backgroundImage="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80" 
/>

<InfoSplitBanner
        kicker="Global Outreach Framework"
        title="Spreading Light Everywhere"
        description="Our mission extends far beyond our local walls. We are actively establishing community blueprints, structural training centers, and sending global ambassadors to manifest God's love to the world."
        imageSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Global missions outreach team serving in a community"
      />
    </div>
  )
}
