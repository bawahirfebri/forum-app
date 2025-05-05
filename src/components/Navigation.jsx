import PropTypes from 'prop-types';
import React from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Nav from './styled/Nav';
import Button from './styled/Button';

function Navigation({ signOut }) {
  return (
    <>
      <h1>Forum</h1>
      <Nav>
        <Link to='/'>Threads</Link>
        <Link to='/leaderboards'>Leaderboards</Link>
        <Button 
          type='button' onClick={signOut}
          $size='20px' $hoverBackground='none'
          $transition='transform 0.3s ease'
          $transform='scale(0.9)' $hoverColor='#625F68'
        >
          <MdOutlineLogout />
        </Button>
      </Nav>
    </>
  );
}

Navigation.propTypes = {
  signOut: PropTypes.func.isRequired
};

export default Navigation;