import styled from 'styled-components';

export const ButtonsBlock = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 15px;
  margin-bottom: 30px;
  :hover,
  :focus {
    background-color: black;
    border-color: skyblue;
    color: skyblue;
  }
`;

export const FeedbackButton = styled.button`
  width: 130px;
  height: 50px;
  text-align: center;
  font-weight: 500px;
  font-size: 24px;
  background-color: skyblue;
  border: 2px solid black;
  border-radius: 5px;
`;
