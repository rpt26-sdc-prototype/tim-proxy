
const FooterWrapper = styled.div`
  background: #171a21;
  border-style: none;
  margin: 0px;
  padding: 0px;
  display:grid;
  width: 940;
  height: 230;
  grid-template-columns: 100px 750px 90px;
  gird-template-rows: 30px auto auto auto auto;
  justify-content: center;
`;

const EmptyRow = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  padding-top: 25px;
`;

const FooterFirstRow = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
  display: flex;
  grid-column-end: span 2;
  padding-bottom: 25px;


`;



const AboutSteam = styled.div`
  background-color: rgb(64, 100, 126)
  padding: 0 15px;
  font-size: 12px;
  line-height: 20px;
  border-radius: 2px;
  display: block;
  color: #969eab !important;
  cursor: pointer;
  padding-right: 10px;
`;

const AboutValve = styled.div`
background-color: rgb(64, 100, 126)
  padding: 0 15px;
  font-size: 12px;
  line-height: 20px;
  border-radius: 2px;
  display: block;
  color: #969eab !important;
  cursor: pointer;
  padding-right: 10px;
`;

const Help = styled.div`
background-color: rgb(64, 100, 126)
  padding: 0 15px;
  font-size: 12px;
  line-height: 20px;
  border-radius: 2px;
  display: block;
  color: #969eab !important;
  cursor: pointer;
  padding-right: 10px;
`;

const NewsFeeds = styled.div`
background-color: rgb(64, 100, 126)
  padding: 0 15px;
  font-size: 12px;
  line-height: 20px;
  border-radius: 2px;
  display: block;
  color: #969eab !important;
  cursor: pointer;
  padding-right: 10px;
`;

const LegalText = styled.div`
  grid-column-start: 2;
  grid-row-start: 3;
  color: #8F98A0;
    font-size: 12px;
    line-height: 16px;
`;

const ValveLogo = styled.div`
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: span 2;
`;

const FooterRow = styled.div`
  grid-column-start: 2;
  grid-row-start: 4;
  display: flex;
  grid-column-end: span 2;
`;

const PrivacyPolicy = styled.div`
  color: #C6D4DF;
  font-size: 12px;
  line-height: 16px;
  padding-right: 10px;
`;

const PriceInfo = styled.div`
  color: #8F98A0;
  font-size: 12px;
  line-height: 16px;
  padding-right: 10px;

`;

const Legal = styled.div`
  color: #C6D4DF;
  font-size: 12px;
  line-height: 16px;
  padding-right: 10px;
`;

const SubInfo = styled.div`
  color: #C6D4DF;
  font-size: 12px;
  line-height: 16px;
  padding-right: 10px;
`;

const Refunds = styled.div`
  color: #C6D4DF;
  font-size: 12px;
  line-height: 16px;
  padding-right: 10px;
`;

const SteamLogoFooter = styled.div`
  grid-column-start: 3;
  grid-row-start: 3;
  grid-row-end: span 2;
`;

const LastFooterRow = styled.div`
  grid-column-start: 1;
  grid-row-start: 5;
  display: flex;
  grid-column-end: span 2;
  padding-bottom: 50px;
  padding-top: 20px;
`;

const FooterAbout = styled.div`
  color: #C6D4DF;
  font-size: 12px;
  line-height: 16px;
  padding-right: 10px;
`;

const FooterSteamworks = styled.div`
  color: #C6D4DF;
  font-size: 12px;
  line-height: 16px;
  padding-right: 10px;
`;

const FooterJobs = styled.div`
  color: #C6D4DF;
  font-size: 12px;
  line-height: 16px;
  padding-right: 10px;
`;

const FooterDist = styled.div`
  color: #C6D4DF;
  font-size: 12px;
  line-height: 16px;
  padding-right: 10px;
`;

const FooterGiftCards = styled.div`
  color: #C6D4DF;
  font-size: 12px;
  line-height: 16px;
  padding-right: 10px;
`;

const FBcontainer = styled.div`
  display: flex;
  padding-right: 10px;
`;

const TwitterContainer = styled.div`
  display: flex;
  padding-right: 10px;
`;

const FB = styled.div`
  color: #C6D4DF;
  font-size: 12px;
  line-height: 16px;
`;

const Twitter = styled.div`
  color: #C6D4DF;
  font-size: 12px;
  line-height: 16px;
`;




var FooterApp = props => {

  return (
    <FooterWrapper>
      <EmptyRow>
        &nbsp;
      </EmptyRow>
      <FooterFirstRow>
        <AboutSteam>
          ABOUT STEAM
        </AboutSteam>
        <AboutValve>
          ABOUT VALVE
        </AboutValve>
        <Help>
          HELP
        </Help>
        <NewsFeeds>
          NEWS FEEDS
        </NewsFeeds>
      </FooterFirstRow>
      <LegalText>
        © 2021 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
      </LegalText>
      <ValveLogo>
      <img src="https://gifbucket.s3-us-west-1.amazonaws.com/footerLogo_valve_new.png" height="25" width="88"/>
      </ValveLogo>
      <FooterRow>
        <PriceInfo>
          VAT included in all prices where applicable.
        </PriceInfo>
        <PrivacyPolicy>
          Privacy Policy
        </PrivacyPolicy>
        <Legal>
          Legal
        </Legal>
        <SubInfo>
          Steam Subscriber Agreement
        </SubInfo>
        <Refunds>
          Refunds
        </Refunds>
      </FooterRow>
      <SteamLogoFooter>
      <img src="https://gifbucket.s3-us-west-1.amazonaws.com/logo_steam_footer.png" />
      </SteamLogoFooter>
      <LastFooterRow>
        <FooterAbout>
          About Valve
        </FooterAbout>
        <FooterSteamworks>
          Steamworks
        </FooterSteamworks>
        <FooterJobs>
          Jobs
        </FooterJobs>
        <FooterDist>
          Steam Distribution
        </FooterDist>
        <FooterGiftCards>
          Gift Cards
        </FooterGiftCards>
        <FBcontainer>
        <img src="https://gifbucket.s3-us-west-1.amazonaws.com/ico_facebook.gif" />
          <FB>
            Steam
          </FB>
        </FBcontainer>
        <TwitterContainer>
        <img src="https://gifbucket.s3-us-west-1.amazonaws.com/ico_twitter.gif" />
        <Twitter>
          @steam
        </Twitter>
        </TwitterContainer>
      </LastFooterRow>
    </FooterWrapper>
  )
}

export default FooterApp;