import React, {useState} from 'react';
import {Button, Icon, Input, Text} from 'react-native-ui-kitten';
import styled from 'styled-components';
import * as constants from '../../../../config/constants';
import styles from './styles';

const ButtonSection = styled.View`
  ${styles.buttonSection};
`;

const InputWrapper = styled.View`
  ${styles.inputWrapper};
`;

const CustomInput = styled(Input)`
  ${styles.customInput};
`;

const Container = styled.View`
  ${styles.container};
`;

const SignInWithEmail = ({
  onTextChangePassword,
  onTextChangeEmail,
  email,
  password,
  signIn,
}) => {
  const [securePassword, setSecurePassword] = useState(true);

  return (
    <Container>
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
          textStyle={{color: 'white'}}
          placeholder={'Password'}
          size={'large'}
          icon={() => (
            <Icon name={securePassword ? 'eye-off' : 'eye'} fill={'white'} />
          )}
          secureTextEntry={securePassword}
          value={password}
          onChangeText={onTextChangePassword}
          onIconPress={() => setSecurePassword(!securePassword)}
          autoCapitalize={'none'}
        />
      </InputWrapper>
      <Text>{''}</Text>
      <ButtonSection>
        <Button
          size={'giant'}
          onPress={() => signIn(constants.SIGN_METHOD.EMAIL)}>
          Sign In
        </Button>
      </ButtonSection>
    </Container>
  );
};

export default SignInWithEmail;
