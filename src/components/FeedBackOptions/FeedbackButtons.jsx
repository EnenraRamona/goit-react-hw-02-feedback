import { ButtonsBlock, FeedbackButton } from './FeedbackButtons.styled';

export const FeedbackButtons = ({ options, onLeaveFeedback, btn }) => (
  <ButtonsBlock>
    {options.map((option, index) => (
      <FeedbackButton
        key={index}
        onClick={() => {
          onLeaveFeedback(option);
        }}
      >
        {option}
      </FeedbackButton>
    ))}
  </ButtonsBlock>
);
