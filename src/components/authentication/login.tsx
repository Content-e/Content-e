import {FC, useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {AuthProps, UnAuthRoutes, unverifiedUser} from 'utils';
import './styles/login.scss';
import {useClerk} from '@clerk/clerk-react';
import styled from "styled-components";
import {Col} from "react-bootstrap";

const navButtons: { name: string, route: string }[] = [{name: 'For Creators', route: 'creators'},
    {name: 'For Brands', route: 'brands'},
    {name: 'Our Purpose', route: 'purpose'},
    {name: `Let's Connect`, route: 'connect'},
]


export const Login: FC = () => {
    const history = useHistory();

    const {openSignIn, loaded} = useClerk();
    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)

    useEffect(() => {
        if (loaded) {
            openSignIn()
        }
    }, [loaded])

    const redirect = (url: string) => {
        window.location.href = `${process.env.REACT_APP_CLERK_LANDING_URL}${url}`
    }

    return (
        <Wrapper>
            <HeaderWrapper>
                <Header>
                    <LeftSide>
                        <Logo src={'/images/logo-long.svg'}/>
                    </LeftSide>
                    <RightSide>
                        <MenuDesktop>
                            {navButtons.map(({name, route}, idx) => <NavButton key={idx}
                                                                               onClick={() => redirect(route)}>{name}</NavButton>)}
                        </MenuDesktop>
                        {isShowMobileMenu ? <MenuMobile>
                            {navButtons.map(({name, route}, idx) => <NavButton key={idx}
                                                                               onClick={() => redirect(route)}>{name}</NavButton>)}
                        </MenuMobile> : null}
                        <SignInButton onClick={() => history.push(UnAuthRoutes.Login)}>Login or Sign up</SignInButton>
                        <MenuButton src={'/images/menu-mobile-hamburger.svg'}
                                    onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}/>
                    </RightSide>
                </Header>
            </HeaderWrapper>
            <ContentWrapper>
                <Content>
                    <h1>JOIN AS A CREATOR</h1>
                    <LoginButton onClick={() => openSignIn()}>
                        Login
                    </LoginButton>
                    <h3>Are you a brand? Get in touch here or drop us a mail <a
                        href="mailto:hello@edcsquared.io.">hello@edcsquared.io.</a></h3>
                </Content>
            </ContentWrapper>
            <FooterWithEmail>
                <h1>hello@edcsquared.io</h1>
            </FooterWithEmail>
            <FooterWrapper>
            <Footer>

                    <LogoFooterWrapper>
                        <LogoFooter src={'/images/logo-new-white.svg'}/>
                    </LogoFooterWrapper>
                    <FooterColumns>
                        <FooterColumn>
                            <h1>EDC squared</h1>
                            <h3 onClick={() => redirect('creators')}>For Creators</h3>
                            <h3 onClick={() => redirect('brands')}>For Brands</h3>
                            <h3 onClick={() => redirect('purpose')}>Our Purpose</h3>
                        </FooterColumn>
                        <FooterColumn>
                            <h1>Support</h1>
                            <h3 onClick={() => redirect('connect')}>Let&#39;s Connect</h3>
                            <h3 onClick={() => redirect('privacy-policy')}>Privacy policy</h3>
                        </FooterColumn>
                        <FooterColumn>
                            <h1>Join Us</h1>
                            <h3 onClick={() => history.push('/login')}>Login or Sign up</h3>
                        </FooterColumn>
                    </FooterColumns>


            </Footer>
                <h4>© 2023 Copyright EDC Squared. All Rights Reserved.</h4>
        </FooterWrapper>
        </Wrapper>
    );
};

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Row = styled(Center)`
`
const Column = styled(Center)`
  flex-direction: column;
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeaderWrapper = styled.div`
  position: fixed;
  width: 96%;
  opacity: rgba(0, 0, 0, .0);
  padding: 20px 0;
  height: 100px;
  z-index: 11;
`
const Header = styled.div`
  background-color: white;
  border-radius: 70px;
  box-shadow: 0 2px 50px rgba(82, 82, 82, .08);
  height: 60px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
`
const LeftSide = styled(Row)`
  padding-left: 24px;
`

const Logo = styled.img`
  height: 26px;
`

const MenuButton = styled(Logo)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`
const RightSide = styled(Row)`
  @media screen and (max-width: 768px) {
    padding-right: 10px;
  }
`
const NavButton = styled(Center)`
  color: #222222;
  padding: 20px;
  font-family: Inter, sans-serif;

  :hover {
    cursor: pointer;
  }

`
const MenuDesktop = styled(Row)`
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const MenuMobile = styled(Column)`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    z-index: 12;
    width: 200px;
    max-width: 80%;
    margin-top: 330px;
    background-color: white;
    box-shadow: 0 2px 50px rgba(82, 82, 82, .08);
    align-items: flex-start;
    margin-right: 170px;
    border-radius: 6px;
  }
`

const ButtonBlack = styled(Center)`
  background-color: #101010;
  font-family: Inter, sans-serif;
  font-size: 16px;
  border-radius: 60px;
  color: #fff;
  padding: 12px 32px;
  font-weight: 500;
  cursor: pointer;
`

const SignInButton = styled(ButtonBlack)`
  height: 44px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const LoginButton = styled(ButtonBlack)`
  height: 56px;
  width: 90%;
`

const ContentWrapper = styled(Center)`
  width: 100%;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  z-index: 10;
  background-color: white;
  min-height: 100vh;
`

const Content = styled(Center)`
  flex-direction: column;
  width: 100%;
  max-width: 620px;
  min-height: 100vh;
  color: #101010;
  justify-content: space-around;

  h1 {
    font-family: OswaldBold, sans-serif;
    font-size: 46px;
    line-height: 68px;
    text-align: center;
    padding: 50px;
    max-width: 500px;
  }

  h3 {
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    max-width: 500px;

    a {
      color: cornflowerblue;
    }
  }
`

const FooterWithEmail = styled(Center)`
  position: relative;
  justify-content: flex-start;
  margin-top: -40px;
  background-color: #202020;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  height: 370px;
  width: 100%;
  padding-left: 40px;
  z-index: 5;

  h1 {
    font-size: 40px;
    color: white;
  }
`
const FooterWrapper = styled(Column)`
width: 100%;
  h4 {
    color: white;
    background-color: #101010;
    width: 100%;
    text-align: left;
    padding-left: 20px;
    padding-bottom: 10px
  }
`

const Footer = styled(Row)`
  position: relative;
  margin-top: -40px;
  width: 100%;
  background-color: #101010;
  align-items: flex-start;
  padding-top: 6%;
  justify-content: flex-start;
  max-height: 500px;
  z-index: 3;
  font-family: Satoshi, sans-serif;
  color: white;
`
const FooterColumn = styled(Column)`
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 240px;
  width: 30%;
`

const LogoFooterWrapper = styled(Center)`
  height: 90%;
  flex-direction: column;
  justify-content: space-between;

  width: 30%;
  margin: 0 7%;
`

const FooterColumns = styled(Row)`
  height: 90%;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  @media screen and (max-width: 768px) {
    margin-top: 10%;
  }

  h1 {
    font-size: 21px;
    padding-bottom: 24px;
    height: 42px;
  }

  h3 {
    cursor: pointer;
    height: 32px;
    margin-bottom: 10px;
  }
`

const LogoFooter = styled.img`
  height: 100px;
`

export default Login;
