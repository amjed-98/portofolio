import React from 'react';
import Image from 'next/image';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { profilePic, container, downloadBtn } from './profile-pic.module.css';
import NavDropdown from '../NavDropDown';

const Hero = () => {

  const goToCv = () => {
    window.open('https://app.enhancv.com/share/cb4c5283/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic', '_blank');
  }
  return (
    <>
      <Section row nopadding>
        {/* <NavDropdown /> */}
        <LeftSection>
          <div className={container}>
            <Image
              className={profilePic}
              priority={true}
              placeholder='blue'
              src='/images/me.jpeg'
              quality={100}
              width={250}
              height={250}
              alt='Picture of the Amjad Yahia'
            />
          </div>

          <SectionTitle main center>
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>

          <SectionText>My name is Amjad Yahia and I'm a Frontend Engineer</SectionText>

            <Button onClick={goToCv}>View CV</Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
