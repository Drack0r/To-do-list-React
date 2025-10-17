import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

/**
 * Layout component providing the main application structure
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render in main content area
 * @returns {JSX.Element} Complete layout with header, main content, and footer
 */
export function Layout({ children }) {
  return (
    <>
      {/* Application header with title */}
      <Header />

      {/* Main content area for page-specific content */}
      <main className="main">{children}</main>

      {/* Application footer with author credits */}
      <Footer />
    </>
  );
}
