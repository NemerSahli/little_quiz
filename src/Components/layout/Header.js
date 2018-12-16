import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark alert-primary mb-3 bg py-0">
      <div className="container">
        <div className="navbar-brand text-dark">Little Quiz</div>
      </div>
      <div>
        <ul className="navbar-nav mr-auto">
          <li>
            <i className="fas fa-home">
              <Link to="/" className="navbar-brand text-dark">
                Home |
              </Link>
            </i>
          </li>
          <li>
            <i className="">
              <Link to="/about" className="navbar-brand text-dark">
                About
              </Link>
            </i>
          </li>
        </ul>
      </div>
    </div>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: propTypes.string.isRequired
};
export default Header;
