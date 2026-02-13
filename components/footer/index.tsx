import { FOOTER_LINKS } from "./footer.config";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0b3d2e] text-white pt-20 relative overflow-hidden">
      
      <div className="container mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">

          {/* Logo & About */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Agritec</h2>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Our commitment is to help farmers have the technologies they
              need to protect the crops and empowering the future of food production!
            </p>

            <div className="flex gap-3">
              <SocialIcon><FaFacebookF /></SocialIcon>
              <SocialIcon><FaXTwitter /></SocialIcon>
              <SocialIcon><FaLinkedinIn /></SocialIcon>
            </div>
          </div>

          {/* About Links */}
          <FooterColumn title="About" links={FOOTER_LINKS.about} />

          {/* Services */}
          <FooterColumn title="Services" links={FOOTER_LINKS.services} />

          {/* Resources */}
          <FooterColumn title="Resources" links={FOOTER_LINKS.resources} />

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Contact</h4>
            <p className="text-gray-300 mb-4">
              2307 Beverley Rd <br />
              Brooklyn, New York, <br />
              United States.
            </p>

            <p className="text-yellow-400 font-medium mb-2">
              Agritec@7oroof.com
            </p>

            <p className="text-gray-200">
              +2 011 6114 5741
            </p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-10 bg-[#0f4a37] rounded-2xl p-5 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div>
            <h3 className="text-2xl font-semibold mb-3">Stay Updated</h3>
            <p className="text-gray-300 max-w-lg">
              Our newsletter is a mix of tips and trends, sign Up For alerts, deals,
              news and insights from us.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col">
            <div className="flex bg-[#1c5a45] rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-transparent px-6 py-4 outline-none text-white placeholder-gray-300 w-72"
              />
              <button className="bg-yellow-400 text-black px-4 font-medium hover:bg-yellow-300 transition">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-300 mt-3">
              By subscribing, you accept the{" "}
              <span className="underline text-yellow-400 cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-white/10 pt-8 pb-12 text-center text-gray-300 text-sm">
          ©2025 Agritec, All Rights Reserved. With Love by{" "}
          <span className="text-yellow-400">7oroof.com</span>
          <div className="mt-3">
            Terms & Conditions  –  Privacy Policy  –  Sitemap
          </div>
        </div>

      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h4 className="font-semibold mb-6 text-lg">{title}</h4>
      <ul className="space-y-3 text-gray-300">
        {links.map((link, i) => (
          <li key={i} className="hover:text-yellow-400 cursor-pointer transition">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-11 h-11 bg-[#184d3b] rounded-md flex items-center justify-center hover:bg-yellow-400 hover:text-black transition cursor-pointer">
      {children}
    </div>
  );
}
