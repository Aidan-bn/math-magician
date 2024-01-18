import { Link } from 'react-router-dom';

const Nav = () => (
  <>
    <nav>
      <h2>
        Math Magicians
      </h2>
      <menu>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/calculator">
            Calculator
          </Link>
        </li>
        <li>
          <Link to="/quote">
            Quote
          </Link>
        </li>
      </menu>
    </nav>
  </>
);

export default Nav;
