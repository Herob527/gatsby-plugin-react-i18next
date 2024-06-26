import {Link, useI18next} from '@herob191/gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import './header.css';
import React from 'react';

const Header = ({siteTitle}) => {
  const {languages, originalPath, t} = useI18next();
  return (
    <header className="main-header">
      <h1 style={{margin: 0}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}>
          {t('Welcome to {{siteTitle}}', {siteTitle})}
        </Link>
      </h1>
      <ul className="languages">
        {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
