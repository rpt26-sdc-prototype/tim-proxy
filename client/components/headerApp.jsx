
const HeaderWrapper = styled.div`
  background: #171a21;
  border-style: none;
  margin: 0px;
  padding: 0px;
  display:grid;
  width: 940;
  grid-template-columns: 700px 240px;
  gird-template-rows: 30px auto;
  justify-content: center;
`;

const Row1 = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  display: flex;
`;
const Row2 = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
  display: flex;
  padding-bottom: 20px;
`;
const Install = styled.div`
  color: #b8b6b4;
  font-size: 11px;
  background-color: #5c7e10;
  padding: 5px;
}


`;
const Login = styled.div`
  color: #b8b6b4;
    font-size: 11px;
  padding-left: 5px;
`;
const Language = styled.div`
  color: #b8b6b4;
    font-size: 11px;
`;
const Logo = styled.div`

`;
const Store = styled.div`
  font-size: 14px;
  color: #b8b6b4;
  text-transform: uppercase;
  padding-top: 17px;
  padding-left: 15px;

`;
const Community = styled.div`
    font-size: 14px;
    color: #b8b6b4;
    text-transform: uppercase;
    padding-top: 17px;
    padding-left: 15px;
`;
const About = styled.div`
      font-size: 14px;
    color: #b8b6b4;
    text-transform: uppercase;
    padding-top: 17px;
    padding-left: 15px;
`;
const Support = styled.div`
    font-size: 14px;
    color: #b8b6b4;
    text-transform: uppercase;
    padding-top: 17px;
    padding-left: 15px;

`;

var HeaderApp = props => {

  return (
    <HeaderWrapper>

      <Row1>
        <Install>
          <img src="https://gifbucket.s3-us-west-1.amazonaws.com/downloadIco.png" />
          &nbsp;&nbsp;Install Steam
        </Install>
        <Login>
          login
        </Login>
        <div>
        &nbsp;|&nbsp;
        </div>
        <Language>
          language
        </Language>
      </Row1>
      <Row2>
        <Logo>
        <img src="https://gifbucket.s3-us-west-1.amazonaws.com/logo_steam.svg" width="160" height="50" />

        </Logo>
        <Store>
          Store
        </Store>
        <Community>
          Community
        </Community>
        <About>
          About
        </About>
        <Support>
          Support
        </Support>
      </Row2>
    </HeaderWrapper>
  )
}

export default HeaderApp;