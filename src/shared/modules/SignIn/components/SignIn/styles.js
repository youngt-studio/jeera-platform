import {css} from 'styled-components';

export default {
  brandView: css`
    justify-content: center;
    align-items: center;
    height: 180px;
  `,

  formView: css`
    padding: 20px;
  `,

  footer: css`
    justify-content: flex-end;
    padding: 20px;
  `,

  alternativeSection: css`
    flex-direction: row;
    padding: 20px;
    justify-content: space-around;
  `,

  alternativeButtonSection: css`
    flex: 0.4;
  `,

  alternativeText: css`
    text-align: center;
    color: white;
    margin-bottom: 10px;
  `,

  iconWrapper: css`
    width: 30px;
    height: 30px;
  `,

  customTab: css`
    background-color: transparent;
    width: 100%;
  `,

  signUpText: css`
    text-align: center;
    color: white;
  `,
};
