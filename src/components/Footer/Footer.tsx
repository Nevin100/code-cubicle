import { Separator } from "@/components/ui/separator";
import { Instagram, Link2Icon, Linkedin, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { Logo } from "../Navbar/logo";
import { FaWhatsapp } from "react-icons/fa";
// Footer component for the application ::
const footerLinks = [
  { title: "About", href: "#about" },
  { title: "Partners", href: "#partners" },
  { title: "Timeline", href: "#timeline" },
  { title: "Problems", href: "#problems-statements" },
  { title: "Mentors", href: "#mentors" },
  { title: "Sponsors", href: "#sponsors" },
  { title: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="grow bg-muted" />
      <footer>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="py-12 flex flex-col justify-start items-center text-center sm:text-left">
            {/* Logo */}
            <Logo />

            <ul className="mt-6 flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-4">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground font-medium"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-y-5 gap-x-4 text-center sm:text-left">
            {/* Copyright */}
            <span className="text-xs sm:text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                Code Cubicle-5.0 GeekRoom Community
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center justify-center gap-5 text-muted-foreground hover:text-pink-400 transition-colors">
              <Link href="https://twitter.com/geek__room_" target="_blank">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/geekr00m/"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/_geek.room/"
                target="_blank"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.geekroom.in/" target="_blank">
                <Link2Icon className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.whatsapp.com/channel/0029ValJ6es4IBhI3QakxH21"
                target="_blank"
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
