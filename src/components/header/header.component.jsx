import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionDivContainer, OptionLinkContainer} from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLinkContainer to='/shop'>
        SHOP
      </OptionLinkContainer>
      <OptionLinkContainer to='/contact'>
        CONTACT
      </OptionLinkContainer>
      {currentUser ? (
        <OptionDivContainer onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDivContainer>
      ) : (
        <OptionLinkContainer to='/signin'>
          SIGN IN
        </OptionLinkContainer>
      )}
      <CartIcon/>
    </OptionsContainer>
    {
      hidden ? null : <CartDropDown/>
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
