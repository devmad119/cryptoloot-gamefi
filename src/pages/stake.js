import React, { useState } from 'react';
import { FaEthereum, FaLock } from 'react-icons/fa';

import {
  StakeContainer,
  StakeCard,
  TabHeader,
  TabHeaderItem,
  TabContent,
  ContentSection,
  LeftSection,
  Form,
  FormInput,
  FormLabel,
  Icon,
  StyledButton,
  ButtonLabel,
  Description,
  RightSection,
  StyledCard,
} from './stake.styled';
import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

const Stake = () => {
  const [tabActive, setTabActive] = useState('stake');

  const handleTabClick = tabState => {
    setTabActive(tabState);
  };

  return (
    <div className="main">
      <Header />
      <Breadcrumb title="Stake" />
      <StakeContainer>
        <h3>staking</h3>
        <h1>CLOOT Token</h1>
        <StakeCard>
          <TabHeader>
            <TabHeaderItem active={tabActive === 'stake' ? true : false} onClick={() => handleTabClick('stake')}>
              Stake
            </TabHeaderItem>
            <TabHeaderItem active={tabActive === 'unstake' ? true : false} onClick={() => handleTabClick('unstake')}>
              Unstake
            </TabHeaderItem>
          </TabHeader>
          {tabActive === 'stake' ? (
            <TabContent>
              <p>
                Stake your CLOOT and start earning. <a>Learn more</a>
              </p>
              <ContentSection>
                <LeftSection>
                  <div />
                  <Form>
                    <FormLabel>
                      <span>Reward</span>
                      <span>0 CLOOT</span>
                    </FormLabel>
                    <FormInput>
                      <input placeholder="0.00" />
                      <div>
                        <span>MAX</span>
                        <Icon>
                          <FaEthereum />
                        </Icon>
                      </div>
                    </FormInput>
                  </Form>
                  <StyledButton>
                    <ButtonLabel>
                      <FaLock />
                      <span>Staked</span>
                    </ButtonLabel>
                  </StyledButton>
                  <Description>Your CLOOT tokens will be looked for 7 days. After that time, you're free to withdraw any time.</Description>
                </LeftSection>
                <RightSection>
                  <StyledCard>
                    <span className="top">Reward</span>
                    <hr />
                    <span className="bottom">0.000</span>
                  </StyledCard>
                  <StyledCard>
                    <span className="top">Staked</span>
                    <hr />
                    <span className="bottom">0.000</span>
                  </StyledCard>
                </RightSection>
              </ContentSection>
            </TabContent>
          ) : (
            <TabContent>Unstake</TabContent>
          )}
        </StakeCard>
      </StakeContainer>
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
};

export default Stake;
