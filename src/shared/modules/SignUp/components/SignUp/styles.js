import {css} from 'styled-components';

// TODO: move to common styles
// TODO: move text field to shared component

export default {
  wrapper: css`
    background-color: transparent;
    width: 100%;
    padding: 20px;
  `,

  inputWrapper: css`
    margin-top: 20px;
    height: 300px;
  `,

  customInput: css`
    background-color: transparent;
  `,

  footer: css`
    justify-content: flex-end;
    padding: 20px;
  `,

  alternativeText: css`
    text-align: center;
    color: white;
    margin-bottom: 10px;
  `,

  signInText: css`
    text-align: center;
    color: white;
  `,
};
