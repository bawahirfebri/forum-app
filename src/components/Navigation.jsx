import PropTypes from 'prop-types';
import React from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Navigation({ signOut }) {
  return (
    <>
      <h1>Forum</h1>
      <nav>
        <Link to='/'>Threads</Link>
        <Link to='/leaderboards'>Leaderboards</Link>
        <button type='button' onClick={signOut}>
          <MdOutlineLogout />
        </button>
      </nav>
    </>
  );
}

Navigation.propTypes = {
  signOut: PropTypes.func.isRequired
};

export default Navigation;