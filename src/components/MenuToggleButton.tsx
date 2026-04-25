interface MenuToggleButtonProps {
  onClick: () => void;
}

const MenuToggleButton = ({ onClick }: MenuToggleButtonProps) => {
  return (
    <button
      className="fab-button menu-toggle"
      onClick={onClick}
      aria-label="Open navigation menu"
      title="Open menu"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    </button>
  );
};

export default MenuToggleButton;
