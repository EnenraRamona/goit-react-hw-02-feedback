import { nanoid } from 'nanoid';
import { ButtonsBlock, FeedbackButton } from './FeedbackButtons.styled';

export const FeedbackButtons = ({ options, onLeaveFeedback }) => (
  <ButtonsBlock>
    {options.map(option => (
      <FeedbackButton
        key={nanoid()}
        onClick={() => {
          onLeaveFeedback(option);
        }}
      >
        {option}
      </FeedbackButton>
    ))}
  </ButtonsBlock>
);
