import React from 'react';
import PropTypes from 'prop-types';

function MenuItem(props) {
  return (
    <a className="menuItem" href={props.href}>
      {props.name}
    </a>
  );
}
MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default MenuItem;
