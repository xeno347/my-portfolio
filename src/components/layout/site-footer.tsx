import { TransitionLink } from "@/src/components/layout/transition-link";

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/my-journey", label: "My Journey" },
  { href: "/process", label: "My Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const socialLinks = [
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://www.behance.net/sharajpaddal", label: "Behance" },
  { href: "https://github.com", label: "GitHub" },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer bg-[#eae6dd]">
      <div className="process-padding-global">
        <div className="process-container-large">
          <div className="site-footer-inner">
            <div className="process-grid-12 gap-y-10">
              <div className="col-span-12 md:col-span-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/70">(Menu)</p>
                <div className="mt-4 flex flex-col gap-2">
                  {menuLinks.map((link) => (
                    <TransitionLink key={link.href} href={link.href} className="site-footer-link">
                      {link.label}
                    </TransitionLink>
                  ))}
                </div>
              </div>

              <div className="col-span-12 md:col-span-3">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/70">(Socials)</p>
                <div className="mt-4 flex flex-col gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="site-footer-link"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="col-span-12 md:col-span-5 md:justify-self-end">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/70">(Say Hello)</p>
                <a
                  href="mailto:sharajpadda881@gmail.com?subject=Portfolio%20Collaboration"
                  className="site-footer-link mt-4 inline-flex"
                >
                  sharajpadda881@gmail.com
                </a>
              </div>
            </div>

            <div className="site-footer-bottom">
              <h3 className="site-footer-wordmark">SHARAJ</h3>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs uppercase tracking-[0.2em] text-black/70">
                <span>© 2026 Sharaj Singh Padda</span>
                <span>Durg, India</span>
                <span>Built with intent</span>
                <span>From India with love</span>
              </div>
            </div>

            <div className="site-footer-gradient" />
          </div>
        </div>
      </div>
    </footer>
  );
}
