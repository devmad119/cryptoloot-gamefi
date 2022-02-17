//import React and styled components
import React from 'react';
import { PartnersContainer, ControlPanel, ControlButtonGroup, ControlButton, DisplayPartners, Container } from './partners.styled';

//import custom components
import Content from '../content/Content';
import Text from '../product//Text';
import Icon from '../product//Icon';

//import image
import Image1 from '../../../asserts/image1.png';
import Image6 from '../../../asserts/image6.png';

const Partners = () => {
  return (
    <PartnersContainer>
      <Content>
        <Container>
          <ControlPanel>
            <Text fWeight={700} fSize={30} lHeight={45} Color="#fff" content="Our Partners" />
            <Icon />
            <ControlButtonGroup>
              <ControlButton>{'<'}</ControlButton>
              <ControlButton>{'>'}</ControlButton>
            </ControlButtonGroup>
          </ControlPanel>
          <DisplayPartners>
            <img src={Image1} alt="image" width="241px" height="59px" />
            <img src={Image6} alt="image" width="241px" height="48px" />
          </DisplayPartners>
        </Container>
      </Content>
    </PartnersContainer>
  );
};

export default Partners;
