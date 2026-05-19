import { Link } from "react-router-dom";
import { siteContent } from "@/data/content";
import instagramIcon from "@/assets/Icons/InstagramIcon.png";
import linkedinIcon from "@/assets/Icons/LinkedinIcon.png";
import twitterIcon from "@/assets/Icons/TwitterIcon.png";
import Logo from "@/assets/Logo.png";

const quickLinks = [
  { label: "About Us", path: "/about" },
  { label: "Business Sectors", path: "/businesses" },
  // { label: "Partnerships", path: "/partners" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    icon: linkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/rimal-trading-group/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-charcoal text-beige/80">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Connect */}
          <div>
            <h4 className="font-serif text-lg text-beige mb-6">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold transition-colors duration-300"
                >
                  <img src={social.icon} alt={social.label} />
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 pt-2 text-sm">
              <p>
                Rimal Trading Group, Lusail, Zone 69, St. 206, Building 45, 2nd
                Floor, Unit# 2001 - P.O. BOX 36117, Doha, Qatar.
              </p>
              <p>
                <span className="font-extrabold">C.R Number:</span> 220638
              </p>
              <p>
                <span className="font-extrabold">Tel:</span> 4143 6200
              </p>
              <p>
                <span className="font-extrabold">Mob:</span> 3035 0045
              </p>
              <p>
                <span className="font-extrabold">Mail:</span>{" "}
                <a href="mailto:[EMAIL_ADDRESS]">info@rimalgroupqa.com</a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-serif text-lg text-beige mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-beige/60 hover:text-beige transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand */}
          <div className="md:text-right">
            <h4 className="font-serif text-2xl italic text-gold mb-4">RIMAL</h4>
            <p className="font-body text-sm leading-relaxed text-beige/60">
              {siteContent.footerTagline}
            </p>

            <div className="flex justify-center sm:justify-end pt-5 relative">
              <img src={Logo} alt="Rimal Corporate Mark" className="h-20 " />
              <div className="absolute top-0 left-0 w-full h-full"></div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-beige/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 font-body text-xs text-beige/40">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
          <p className="font-body text-xs text-beige/40">
            © 2026 {siteContent.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
