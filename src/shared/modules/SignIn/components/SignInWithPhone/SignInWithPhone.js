import React from 'react';
import {Icon, Input, Text} from 'react-native-ui-kitten';
import {Alert} from 'react-native';
import styled from 'styled-components';
import styles from './styles';

const InputWrapper = styled.View`
  ${styles.inputWrapper};
`;

const CustomInput = styled(Input)`
  ${styles.customInput};
`;

const InfoText = styled(Text)`
  ${styles.infoText};
`;

const Container = styled.View`
  ${styles.container};
`;

const SignInWithPhone = ({
  phoneNumber,
  onTextChangePhoneNumber,
  otpCode,
  onTextChangeOTPCode,
}) => {
  return (
    <Container>
      <InfoText>
        Input your phone number to continue and tap message button to continue
      </InfoText>
      <InputWrapper>
        <CustomInput
          placeholder={'Phone number'}
          size={'large'}
          textStyle={{color: 'white'}}
          value={phoneNumber}
          icon={() => <Icon name={'message-circle'} fill={'white'} />}
          onTextChange={onTextChangePhoneNumber}
          onIconPress={() => Alert.alert('Sent')}
          keyboardType={'phone-pad'}
        />
        <CustomInput
          placeholder={'SMS Code'}
          size={'large'}
          textStyle={{color: 'white'}}
          value={otpCode}
          onTextChange={onTextChangeOTPCode}
          keyboardType={'phone-pad'}
        />
      </InputWrapper>
    </Container>
  );
};

export default SignInWithPhone;
