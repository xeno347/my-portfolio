import { NoteScroller } from "@/src/components/animations/note-scroller";
import { ProcessStickyHero } from "@/src/components/sections/process-sticky-hero";
import { SiteCta } from "@/src/components/sections/site-cta";
import {
  ProcessRealitySection,
  ProcessResultsSection,
  ProcessSpacerSection,
  ProcessSystemSection,
} from "@/src/components/sections/process-source-sections";

export default function ProcessPage() {
  return (
    <main className="flex w-full flex-col">
      <ProcessStickyHero title="My Process" />
      <NoteScroller accent="80%" message="of portfolios just build a site." />
      <NoteScroller accent="I build" message="a system that works for your business." />
      <ProcessSystemSection />
      <ProcessSpacerSection />
      <ProcessResultsSection />
      <ProcessRealitySection />
      <SiteCta />
    </main>
  );
}
