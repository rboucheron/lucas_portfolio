import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation().pathname;
  const linkclass =
    "text-center text-maron hover:text-bluesky transition transition-all delay-200 font-bold p-2 text-xl";
  return (
    <header className="fixed top-0 w-full grid grid-cols-5  bg-white">
      <Link
        to="/"
        className={`${linkclass} ${
          location === "/" ? "bg-maron text-white" : "text-maron"
        }`}
      >
        <span className="font-light">_</span>HOME PAGE
      </Link>
      <Link to="/project" className={linkclass}>
        <span className="font-light">_</span>PROJECTS
      </Link>
      <Link to="/picture" className={linkclass}>
        <span className="font-light">_</span>PICTURES
      </Link>
      <Link to="/about" className={linkclass}>
        <span className="font-light">_</span>ABOUT ME
      </Link>
      <Link to="/contact" className={linkclass}>
        <span className="font-light">_</span>CONTACT
      </Link>
    </header>
  );
};
