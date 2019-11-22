import React from 'react';
import {
  TopNavigation,
  Layout,
  Icon,
  TopNavigationAction,
} from 'react-native-ui-kitten';
import styled from 'styled-components';

const CustomTopNavigation = styled(TopNavigation)`
  ${({displayed}) => !displayed && `display: none`};
`;

const BackIcon = style => <Icon {...style} name="arrow-back" />;

const MenuIcon = style => <Icon {...style} name={'menu'} />;

const MenuAction = props => <TopNavigationAction {...props} icon={MenuIcon} />;

const Header = ({title, showNavigation}) => {
  return (
    <CustomTopNavigation
      displayed={showNavigation}
      title={title}
      alignment={'center'}
      leftControl={MenuAction()}
    />
  );
};

export default Header;
