"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import NAV_ITEMS from "@/constants/navItems";
import { Button } from "../ui/button";
import { ContactDrawer } from "./contact-drawer";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  type: "route" | "popup";
  url?: string;
};

type ActiveStyle = {
  width: string;
  left: string;
};

export default function DesktopMenu({ className = "" }) {
  const pathname = usePathname();
  const [activeStyle, setActiveStyle] = useState<ActiveStyle>({
    width: "0px",
    left: "0px",
  });

  const navRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([]);

  const updateActivePosition = (index?: number) => {
    const targetIndex =
      index ??
      NAV_ITEMS.findIndex(
        (item) => item.type === "route" && pathname === item.url,
      );

    if (targetIndex === -1 || !itemsRef.current[targetIndex] || !navRef.current)
      return;

    const activeItem = itemsRef.current[targetIndex] as HTMLElement;
    const navRect = navRef.current.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    setActiveStyle({
      width: `${itemRect.width}px`,
      left: `${itemRect.left - navRect.left}px`,
    });
  };

  const handleClick = (index: number) => {
    const item = NAV_ITEMS[index];
    if (item.type === "popup") return;
    updateActivePosition(index);
  };

  useEffect(() => {
    updateActivePosition();
  }, [pathname]);

  const renderNavItem = (item: NavItem, index: number) => {
    if (item.type === "route") {
      return (
        <span key={item.name} className="text-xs">
          <Link
            href={item.url!}
            ref={(el) => (itemsRef.current[index] = el)}
            onClick={() => handleClick(index)}
            className={`relative px-3 py-2 ${
              pathname === item.url
                ? "font-medium text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        </span>
      );
    }

    return (
      <ContactDrawer key={item.name}>
        <Button
          key={item.name}
          ref={(el) => (itemsRef.current[index] = el)}
          onClick={() => handleClick(index)}
          className="relative bg-white/10 px-3 py-2 text-xs text-white/70 hover:bg-white/10 hover:text-white"
        >
          {item.name}
        </Button>
      </ContactDrawer>
    );
  };

  return (
    <div className={cn(className, "relative h-12")}>
      <nav
        ref={navRef}
        className="relative flex h-full items-center justify-center gap-6 overflow-hidden rounded-xl border border-white/10 bg-white/10 px-4"
      >
        {/* Background tab */}
        <div
          className="absolute h-[30px] rounded-2xl bg-white/10 blur-[2px] transition-all duration-300"
          style={activeStyle}
        />

        {/* Top white line */}
        <div
          className="absolute top-0 h-px bg-white backdrop-blur-3xl transition-all duration-300"
          style={activeStyle}
        />

        {/* Navigation items */}
        {NAV_ITEMS.map(renderNavItem)}
      </nav>
    </div>
  );
}
