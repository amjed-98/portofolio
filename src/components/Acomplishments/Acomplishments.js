import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const Acomplishments = () => {
  const [Acomplishments, setData] = useState([]);

  const getGitHubProfile = async () => {
    const { data } = await axios.get('https://api.github.com/users/amjed-98');

    const { public_repos: reposCount, followers } = data;

    setData([
      { number: 17, text: 'technical certificates' },
      { number: reposCount, text: 'Open Source Projects' },
      // { number: 5000, text: 'Github Stars' },
      { number: followers, text: 'Github Followers' },
    ]);
  };
  ~useEffect(() => {
    getGitHubProfile();
  }, []);

  return (
    <Section>
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        {Acomplishments.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.number}`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
};

export default Acomplishments;
