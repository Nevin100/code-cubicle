import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ModeToggle } from "@/components/ModeToggle";

const Navbar = () => {
  return (
    <header className="bg-muted md:mb-26">
      <nav
        aria-label="Main Navigation"
        className="fixed top-6 inset-x-4 h-18 z-50 bg-background border py-4 md:py-8 dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full"
      >
        <div className="h-full flex items-center justify-between px-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <NavMenu className="hidden md:block" />

          {/* Actions */}
          <div className="flex items-center gap-5 p-2">
            <div>
              <ModeToggle />
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
