import { StatItem, Statistics } from './Statistic.styled';

export const Statistic = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => (
  <Statistics>
    <StatItem>Good: {good}</StatItem>
    <StatItem>Bad: {bad}</StatItem>
    <StatItem>Neutral: {neutral}</StatItem>
    <StatItem>Total: {total}</StatItem>
    <StatItem>Positive feedback: {Number(positivePercentage)}%</StatItem>
  </Statistics>
);
