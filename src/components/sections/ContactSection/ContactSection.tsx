import { MailIcon } from "lucide-react";
import Link from "next/link";

const ContactSection = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h2
        className="mb-12 mt-12 text-center text-4xl font-extrabold leading-tight 
        text-gray-900 dark:text-gray-100 
        md:text-6xl md:leading-snug
        select-none
      "
      >
        CONTACT US
      </h2>
      <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight">
        Get In Touch
      </h2>
      <p className="mt-4 text-base sm:text-lg">
        Our friendly team is always here to chat.
      </p>
      <div className="max-w-screen-xl mx-auto py-24 grid md:grid-cols-2 lg:grid-cols-1 gap-16 md:gap-10 px-6 md:px-0">
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <MailIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Email</h3>
          <p className="mt-2 text-muted-foreground">
            Our friendly team is here to help.
          </p>
          <Link className="mt-4 font-medium text-primary" href="mailto:"></Link>
        </div>

        {/* <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <PhoneIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Phone</h3>
          <p className="mt-2 text-muted-foreground">Mon-Fri from 8am to 5pm.</p>
          <Link
            className="mt-4 font-medium text-primary"
            href="tel:akashmoradiya3444@gmail.com"
          >
            +1 (555) 000-0000
          </Link>
        </div> */}
      </div>
    </div>
  </div>
);

export default ContactSection;
