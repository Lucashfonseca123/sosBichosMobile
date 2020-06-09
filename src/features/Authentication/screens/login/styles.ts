import styled, {css} from 'styled-components/native';

interface ILoginScreen {
  focus?: boolean;
}

const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
  flex: 1;
`;

const DivMiddle = styled.View`
  flex: 1;
  padding-top: 32px;
  justify-content: center;
  align-items: center;
`;

const DivButton = styled.View`
  padding-top: 24px;
  padding-bottom: 12px;
  align-items: center;
  justify-content: flex-end;
`;

const DivBottom = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 48px;
`;

const DivBottomButton = styled.View`
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
`;

export {Container, DivButton, DivBottom, DivBottomButton, DivMiddle};
