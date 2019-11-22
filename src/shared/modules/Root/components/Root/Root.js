import React from 'react';
import {SafeAreaView, ImageBackground} from 'react-native';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from 'react-native-ui-kitten';
import Routes from './Routes';
import Header from '../Header';
import Footer from '../Footer';

const backgroundSrc = require('../../../../assets/images/background-sign-in.jpg');
const Root = ({
  header,
  footer,
  onSelectTabNavigation,
  showNavigation,
  credential,
}) => {
  const {title} = header;
  const {selectedIndex} = footer;
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <ImageBackground
          source={backgroundSrc}
          style={{width: '100%', height: '100%'}}>
          <SafeAreaView style={{height: '100%'}}>
            <Header title={title} displayed={showNavigation} />
            <Routes credential={credential} />
            <Footer
              selectedIndex={selectedIndex}
              onSelectTabNavigation={onSelectTabNavigation}
              displayed={showNavigation}
            />
          </SafeAreaView>
        </ImageBackground>
      </ApplicationProvider>
    </>
  );
};

export default Root;
