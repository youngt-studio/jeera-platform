import React from 'react';
import {Link} from 'react-router-native';
import {Button, Text, TabView, Tab} from 'react-native-ui-kitten';
import styled from 'styled-components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SignInWithEmail from '../SignInWithEmail/SignInWithEmail';
import SignInWithPhone from '../SignInWithPhone/SignInWithPhone';
import styles from './styles';

const BrandView = styled.View`
  ${styles.brandView};
`;

const FormView = styled.View`
  ${styles.formView};
`;

const Footer = styled.View`
  ${styles.footer};
`;

const AlternativeSection = styled.View`
  ${styles.alternativeSection};
`;

const AlternativeButtonSection = styled.View`
  ${styles.alternativeButtonSection};
`;

const AlternativeText = styled(Text)`
  ${styles.alternativeText};
`;

const IconWrapper = styled.Image`
  ${styles.iconWrapper};
`;

const Wrapper = styled(KeyboardAwareScrollView)`
  ${styles.wrapper};
`;

const CustomTab = styled(Tab)`
  ${styles.customTab};
`;

const SignUpText = styled(Text)`
  ${styles.signUpText};
`;

const SignIn = ({
  onChangeSignInMethod,
  selectedIndex,
  onTextChangePassword,
  onTextChangeEmail,
  onTextChangePhoneNumber,
  onTextChangeOTPCode,
  phoneNumber,
  otpCode,
  email,
  password,
  signIn,
}) => {
  return (
    <Wrapper keyboardShouldPersistTaps={'handled'}>
      <BrandView>
        <Text category="h1">JEERA</Text>
        <Text category="h8">Brilliant Tasks Management Tool</Text>
      </BrandView>
      <FormView>
        <TabView
          selectedIndex={selectedIndex}
          shouldLoadComponent={index => index === selectedIndex}
          onSelect={onChangeSignInMethod}
          tabBarStyle={{backgroundColor: 'transparent'}}
          indicatorStyle={{backgroundColor: 'white'}}>
          <CustomTab title={'EMAIL'} titleStyle={{color: 'white'}}>
            <SignInWithEmail
              onTextChangePassword={onTextChangePassword}
              onTextChangeEmail={onTextChangeEmail}
              email={email}
              password={password}
              signIn={signIn}
            />
          </CustomTab>
          <CustomTab title={'PHONE'} titleStyle={{color: 'white'}}>
            <SignInWithPhone
              onTextChangePhoneNumber={onTextChangePhoneNumber}
              phoneNumber={phoneNumber}
              onTextChangeOTPCode={onTextChangeOTPCode}
              otpCode={otpCode}
              signIn={signIn}
            />
          </CustomTab>
        </TabView>
        <AlternativeText>or sign in with</AlternativeText>
        <AlternativeSection>
          <AlternativeButtonSection>
            <Button
              size={'small'}
              icon={() => (
                <IconWrapper
                  source={require('../../../../assets/icons/zalo-2.png')}
                />
              )}>
              ZALO
            </Button>
          </AlternativeButtonSection>
        </AlternativeSection>
      </FormView>
      <Footer>
        <AlternativeText>Don't have an account?</AlternativeText>
        <Link to={'/sign-up'}>
          <SignUpText>Sign Up Now</SignUpText>
        </Link>
      </Footer>
    </Wrapper>
  );
};

export default SignIn;
