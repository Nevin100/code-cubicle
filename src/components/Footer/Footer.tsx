import { Separator } from "@/components/ui/separator";
import { Instagram, Link2Icon, Linkedin, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Navbar/logo";
import { FaWhatsapp } from "react-icons/fa";
//footer
const footerLinks = [
  { title: "About", href: "#about" },
  { title: "Partners", href: "#partners" },
  { title: "Timeline", href: "#timeline" },
  { title: "Problems", href: "#problems-statements" },
  { title: "Judges", href: "#judges" },
  { title: "Mentors", href: "#mentors" },
  { title: "Sponsors", href: "#sponsors" },
  { title: "Contact", href: "#contact" },
  { title: "FAQ", href: "#faq" },
];

const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer className="bg-muted/50 backdrop-blur-sm border-t border-border">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          {/* Top Section */}
          <div className="py-12 flex flex-col justify-start items-center text-center sm:text-left">
            <Logo />

            <ul className="mt-6 flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-4">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Separator className="mb-6" />

          {/* Bottom Section */}
          <div className="pb-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-y-5 gap-x-4 text-center sm:text-left">
            <span className="text-xs sm:text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank" className="hover:underline">
                Code Cubicle-5.0 GeekRoom Community
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center justify-center gap-5">
              <Link
                href="https://twitter.com/geek__room_"
                target="_blank"
                className="text-muted-foreground hover:text-sky-400 transition-colors duration-200"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/geekr00m/"
                target="_blank"
                className="text-muted-foreground hover:text-blue-600 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/_geek.room/"
                target="_blank"
                className="text-muted-foreground hover:text-pink-500 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.geekroom.in/"
                target="_blank"
                className="text-muted-foreground hover:text-green-600 transition-colors duration-200"
              >
                <Link2Icon className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.whatsapp.com/channel/0029ValJ6es4IBhI3QakxH21"
                target="_blank"
                className="text-muted-foreground hover:text-green-500 transition-colors duration-200"
              >
                <FaWhatsapp className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
