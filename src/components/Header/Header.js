import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiCodewars } from 'react-icons/si';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <DiCssdeck size='3rem' /> <span>Amjad Yahia </span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/amjed-98'>
        <AiFillGithub title='Github' size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/amjad-yahia/'>
        <AiFillLinkedin title='linkedIn' size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.codewars.com/users/amjed-98'>
        <SiCodewars title='Codewars' size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
