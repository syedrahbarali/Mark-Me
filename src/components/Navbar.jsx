import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Container from "./Container";

const Navbar = () => {
  return (
    <header className="fixed left-0 w-screen bg-white top-0 shadow-md z-50">
      <Container className="py-4 flex items-center gap-8">
        <Logo />

        <nav className="hidden md:block">
          <ul className="flex items-center gap-4">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Services</NavLink>
            </li>
            <li>
              <NavLink>Blog</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
