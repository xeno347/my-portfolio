import { MagneticButton } from "@/src/components/ui/magnetic-button";

export function SiteCta() {
  return (
    <section className="site-cta-section bg-[#101010] text-[#f2f0e9]">
      <div className="process-padding-global">
        <div className="process-container-large">
          <div className="site-cta-content">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#f2f0e9]/70">Work with me</p>
            <h2 className="wf-heading-h1 mt-7 text-center text-[#f2f0e9]">
              Ready to build
              <br />
              <span className="site-accent-script">something real?</span>
            </h2>
            <div className="mt-10 flex justify-center">
              <MagneticButton href="/contact">Let&apos;s Talk</MagneticButton>
            </div>
            <a
              href="mailto:sharajpadda881@gmail.com?subject=Portfolio%20Collaboration"
              className="mt-7 font-mono text-xs uppercase tracking-[0.2em] text-[#f2f0e9]/80 transition-opacity hover:opacity-100"
            >
              sharajpadda881@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
