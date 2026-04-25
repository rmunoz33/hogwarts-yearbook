import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Sidebar.css";

type IconType = "home" | "students" | "staff" | "houses" | "characters" | "spells";

const NAV_ITEMS: { path: string; label: string; icon: IconType }[] = [
  { path: "/", label: "Home", icon: "home" },
  { path: "/students", label: "Students", icon: "students" },
  { path: "/staff", label: "Staff", icon: "staff" },
  { path: "/houses", label: "Houses", icon: "houses" },
  { path: "/characters", label: "All Characters", icon: "characters" },
  { path: "/spells", label: "Spells", icon: "spells" },
];

const NavIcon = ({ type }: { type: IconType }) => {
  const icons: Record<IconType, React.ReactNode> = {
    home: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
    students: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
        <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
    staff: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    houses: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7l3-7z" />
      </svg>
    ),
    characters: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    spells: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  };
  return icons[type] || null;
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sidebar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="sidebar-header">
              <h2 className="sidebar-title">Hogwarts</h2>
              <span className="sidebar-subtitle">Yearbook</span>
            </div>

            <div className="sidebar-divider" />

            <ul className="sidebar-nav">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `sidebar-link ${isActive ? "active" : ""}`
                    }
                    onClick={onClose}
                  >
                    <span className="sidebar-link-icon">
                      <NavIcon type={item.icon} />
                    </span>
                    <span className="sidebar-link-label">{item.label}</span>
                    {location.pathname === item.path && (
                      <motion.span
                        className="sidebar-link-indicator"
                        layoutId="nav-indicator"
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      />
                    )}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <div className="sidebar-footer">
              <div className="sidebar-footer-text">
                Mischief Managed
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
