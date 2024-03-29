import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From Back-end To
      Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experienced with <br />
            React.js, Typescript, Vue.js, StyledComponents
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiFirebase size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Node.js, Express, Postgres
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiZend size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Unit Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Jest, React testing library
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiZend size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
