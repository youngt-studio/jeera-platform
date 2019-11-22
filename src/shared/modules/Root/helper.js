export const mapTitleToTabIndex = selectedIndex => {
  switch (selectedIndex) {
    case 0:
      return 'Dashboard';
    case 1:
      return 'Settings';
    default:
      return '';
  }
};
