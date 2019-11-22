import React from 'react';
import {
  TopNavigation,
  Layout,
  Icon,
  TopNavigationAction,
} from 'react-native-ui-kitten';

const BackIcon = style => <Icon {...style} name="arrow-back" />;

const BackAction = () => <TopNavigationAction icon={BackIcon} />;

const Dashboard = () => {
  return (
    <Layout>
      <TopNavigation title="Center" alignment="center" />
    </Layout>
  );
};

export default Dashboard;
