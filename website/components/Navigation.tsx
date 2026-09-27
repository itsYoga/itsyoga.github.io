"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, SquareTerminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { WifiStatus, BluetoothStatus, AirPodsStatus, BatteryStatus, MenubarClock } from "@/components/MenubarStatus";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/photography", label: "Photography" },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Easter egg: press ` anywhere to open the terminal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        e.key === "`" &&
        !e.metaKey && !e.ctrlKey && !e.altKey &&
        target.tagName !== "INPUT" &&
        target.tagName !== "TEXTAREA" &&
        !target.isContentEditable
      ) {
        e.preventDefault();
        router.push("/terminal");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [router]);

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (pathname === href) {
      // If already on the same page, scroll to top for Home
      if (href === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    
    e.preventDefault();
    router.push(href);
  };

  return (
    // Drawn as a Mac's menu bar: the name where the app name sits, the pages
    // as its menus, and the status items on the right.
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/75 backdrop-blur-xl backdrop-saturate-150 border-b">
      <div className="px-3 md:px-4">
        <div className="flex items-center justify-between h-11 text-sm">
          <div className="flex items-center gap-1">
          <Link href="/" className="px-2 font-bold block">
            YuJia
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(item.href, e)}
                  className={cn(
                    "relative px-2.5 py-1 rounded-md font-semibold transition-colors block",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-accent rounded-md"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </div>
          </div>

          {/* Status items */}
          <div className="flex items-center gap-1 text-foreground/80">
            <Link
              href="/terminal"
              onClick={(e) => handleLinkClick("/terminal", e)}
              aria-label="Terminal"
              title="Terminal (`)"
              className={cn(
                "relative hidden md:grid place-items-center w-7 h-7 rounded-[5px] transition-colors",
                pathname === "/terminal"
                  ? "text-foreground"
                  : "text-muted-foreground/60 hover:text-foreground"
              )}
            >
              <SquareTerminal className="w-[15px] h-[15px]" />
            </Link>
            <div className="hidden lg:flex items-center gap-1">
              <WifiStatus />
              <AirPodsStatus />
              <BluetoothStatus />
            </div>
            <BatteryStatus />
            <span className="hidden sm:inline px-1">
              <MenubarClock />
            </span>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 text-foreground hover:text-foreground/80 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        handleLinkClick(item.href, e);
                      }}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-[clamp(16px,1.2vw,18px)] font-semibold transition-colors",
                        isActive
                          ? "text-foreground bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/terminal"
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleLinkClick("/terminal", e);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 rounded-xl text-[clamp(16px,1.2vw,18px)] font-semibold transition-colors",
                    pathname === "/terminal"
                      ? "text-foreground bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  <SquareTerminal className="w-5 h-5" />
                  Terminal
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
