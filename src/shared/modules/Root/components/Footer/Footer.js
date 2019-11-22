import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from 'react-native-ui-kitten';
import styled from 'styled-components';

const CustomBottomNavigation = styled(BottomNavigation)`
  ${({displayed}) => !displayed && `display: none`};
`;

const DashboardIcon = style => <Icon {...style} name="layout" />;

const SettingsIcon = style => <Icon {...style} name="settings" />;

const Footer = ({selectedIndex, onSelectTabNavigation, showNavigation}) => {
  return (
    <CustomBottomNavigation
      displayed={showNavigation}
      selectedIndex={selectedIndex}
      onSelect={onSelectTabNavigation}>
      <BottomNavigationTab title="DASHBOARD" icon={DashboardIcon} />
      <BottomNavigationTab title="SETTINGS" icon={SettingsIcon} />
    </CustomBottomNavigation>
  );
};

export default Footer;
