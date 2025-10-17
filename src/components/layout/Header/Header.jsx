/**
 * Header component displaying the application title
 * @returns {JSX.Element} Header element with application branding
 */
export function Header() {
  return (
    <header className="header">
      {/* Main application title */}
      <h1 className="header__title">To-do list</h1>
    </header>
  );
}
