import DesktopMenu from "./desktop-menu";
import MobileNav from "./mobile-nav";
import NavigationDialog from "./navigation-dialog";
export default function Header() {
  return (
    <header className="fixed top-5 left-[50%] flex w-full max-w-6xl translate-x-[-50%] items-center justify-between">
      <span className="font-bold">MHSHEFAT</span>
      <div className="hidden sm:block">
        <DesktopMenu />
      </div>
      <div className="hidden sm:block">
        <NavigationDialog />
      </div>
      <div className="sm:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
