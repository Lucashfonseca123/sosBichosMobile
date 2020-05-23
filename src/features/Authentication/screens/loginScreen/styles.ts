import styled, {css} from 'styled-components/native';

interface ILoginScreen {
  focus?: boolean;
}

const Container = styled.View`
  /* ${(props: ILoginScreen) => css`
    flex: ${props.focus ? '' : 1};
  `} */
  padding-left: 30px;
  padding-right: 30px;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
`;

const DivMiddle = styled.View`
  /* ${(props: ILoginScreen) => css`
    flex: ${props.focus ? '' : 1};
  `} */
  width: 100%
  padding-top: 56px;
  justify-content: center;
  align-items: center;
`;

const DivButton = styled.View`
  padding-top: 40px;
  padding-bottom: 12px;
  align-items: center;
  justify-content: flex-end;
`;

const DivBottom = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 40px;
`;

const DivBottomButton = styled.View`
  padding-top: 20px;
  padding-bottom: 8px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export {Container, DivButton, DivBottom, DivBottomButton, DivMiddle};
