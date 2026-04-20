import { NoteScroller } from "@/src/components/animations/note-scroller";
import { PageLoader } from "@/src/components/animations/page-loader";
import { FeatureBentoGrid } from "@/src/components/ui/feature-bento-grid";
import { AgriSystemCards } from "@/src/components/sections/agri-system-cards";
import { ProcessStickyHero } from "@/src/components/sections/process-sticky-hero";
import { ScrollPinNarrative } from "@/src/components/animations/scroll-pin-narrative";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <PageLoader />
      <ProcessStickyHero sticky={false} />
      <NoteScroller
        accent="Director"
        message="of IT & Software Development at Amrit Agri Innovations Pvt Ltd."
      />
      <NoteScroller
        accent="BCA"
        message="graduate focused on systems architecture, UI/UX, and full-stack execution."
      />
      <ScrollPinNarrative />
      <AgriSystemCards />
      <FeatureBentoGrid />
    </main>
  );
}
