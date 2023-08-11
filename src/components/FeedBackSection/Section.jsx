import { SectionBlock, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionBlock>
    <Title>{title}</Title>
    {children}
  </SectionBlock>
);
