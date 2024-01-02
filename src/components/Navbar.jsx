import { useGlobalTheme } from "../context/context";

export const Navbar = () => {
  const { theme, toggleTheme } = useGlobalTheme();
  return (
    <>
      <nav className="navbar">
        <div className="mode-switch">
          <label>
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </nav>
    </>
  );
};
