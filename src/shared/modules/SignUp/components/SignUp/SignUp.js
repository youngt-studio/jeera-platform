import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components';
import PhotoUpload from 'react-native-photo-upload';
import {Image} from 'react-native';
import {Button, Input, Text} from 'react-native-ui-kitten';
import {Link} from 'react-router-native';
import styles from './styles';

const Wrapper = styled(KeyboardAwareScrollView)`
  ${styles.wrapper};
`;

const AvatarSection = styled.View``;

const InputWrapper = styled.View`
  ${styles.inputWrapper};
`;

const CustomInput = styled(Input)`
  ${styles.customInput};
`;

const Footer = styled.View`
  ${styles.footer};
`;

const AlternativeText = styled(Text)`
  ${styles.alternativeText};
`;

const SignInText = styled(Text)`
  ${styles.signInText};
`;

const ButtonSection = styled.View``;

const defaultSource = require('../../../../assets/images/add-avatar.png');
const SignUp = ({
  onTextChangeEmail,
  onTextChangePassword,
  onTextChangeFullname,
  onChangeAvatarImage,
  onTextChangePhoneNumber,
  email,
  password,
  fullName,
  phoneNumber,
  signUp,
}) => {
  return (
    <Wrapper keyboardShouldPersistsTap={'handled'}>
      <AvatarSection>
        <PhotoUpload
          onPhotoSelect={avatar => {
            if (avatar) {
              onChangeAvatarImage(avatar);
            }
          }}>
          <Image
            style={{
              paddingVertical: 30,
              width: 100,
              height: 100,
            }}
            resizeMode="cover"
            source={defaultSource}
          />
        </PhotoUpload>
      </AvatarSection>
      <InputWrapper>
        <CustomInput
          placeholder={'Email'}
          size={'large'}
          textStyle={{color: 'white'}}
          value={email}
          onChangeText={onTextChangeEmail}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
        />
        <CustomInput
          placeholder={'Password'}
          size={'large'}
          textStyle={{color: 'white'}}
          value={password}
          onChangeText={onTextChangePassword}
          autoCapitalize={'none'}
        />
        <CustomInput
          placeholder={'Full name'}
          size={'large'}
          textStyle={{color: 'white'}}
          value={fullName}
          onChangeText={onTextChangeFullname}
          autoCapitalize={'none'}
        />
        <CustomInput
          placeholder={'Phone Number'}
          size={'large'}
          textStyle={{color: 'white'}}
          value={phoneNumber}
          onChangeText={onTextChangePhoneNumber}
          keyboardType={'number-pad'}
          autoCapitalize={'none'}
        />
      </InputWrapper>
      <ButtonSection>
        <Button
          size={'giant'}
          onPress={() => {
            signUp();
          }}>
          Sign Up
        </Button>
      </ButtonSection>
      <Footer>
        <AlternativeText>Already have an account?</AlternativeText>
        <Link to={'/sign-in'}>
          <SignInText>Sign In Now</SignInText>
        </Link>
      </Footer>
    </Wrapper>
  );
};

export default SignUp;
