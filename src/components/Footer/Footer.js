import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiCodewars } from 'react-icons/si';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+970-59-369-7580'>+970-59-369-7580</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:amjedyehia1998@gmail.com'>
            contact@amjadyahia.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/amjed-98'>
            <AiFillGithub title='Github' size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/amjed-yehia-674565190/'>
            <AiFillLinkedin title='linkedIn' size='3rem' />
          </SocialIcons>

          <SocialIcons href='https://www.codewars.com/users/amjed-98'>
            <SiCodewars title='Codewars' size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
