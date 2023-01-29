import Head from 'next/head';
import styled from "styled-components";
import NavbarMain from "../navbars/navbar__main";
import FooterMain from "../footer/footer__main";
import NavbarModal from '../navbars/navbar__modal';
import Hamburger from 'hamburger-react';

import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

import { useState } from "react";

const SiteContainer = styled.div`
    position: relative;
`;

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 11fr;
    grid-gap: 0px;
    align-items: stretch;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

const ContentContainer = styled.main`
    min-width: 100%;
    max-width: 100%;
    min-height: 100vh;
`;

const LeftHand = styled.div`
    border-right: var(--border-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media (max-width: 767px) {
        display: none;
    }
`;

const RightHand = styled.div`

`;

const SideBarStyles = styled.aside`

    position: relative;
    width: 100%;
    min-height: 100%;

`;

const DesktopBurger = styled.div`

    position: sticky;
    top: 0;
    left: 50%;

    .hamburger-react {
        margin: auto;
        &:hover {

            transform: rotate(180deg);
        }
    }

    z-index: 99999999;
    @media screen and (min-width: 768px) {
        display: block;
    }
    @media screen and (max-width: 767px) {
        display: none;
    }
`;



export default function Layout({ children }) {

    const [isOpen, setIsOpen] = useState('0vh');

    const handleClick = () => {
        if (isOpen == '0vh') {
            setIsOpen('100vh');
        } else {
            setIsOpen('0vh');
        }
    }

    return (
        <SiteContainer>
            
            <Head>
                <title>throne</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AnimatedCursor
                innerSize={24}
                outerSize={22}
                color='30,144,255'
                trailingSpeed={8}
                outerAlpha={0.1}
                innerScale={0.8}
                outerScale={4}
                innerStyle={{
                    background: 'rgba(30,144,255, 0.8)'
                  }}
                outerStyle={{
                    border: '1px solid #fff',
                    background: 'transparent',
                    backdropFilter: 'invert(100%)'
                  }}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.mouse-big',
                    '.link',
                    '.burger--desktop'
                ]}
            />

            <NavbarModal isOpen={isOpen} handleClick={handleClick} />

            {/* CONTENT */}
            <MainContainer>


                {/* LEFT */}
                <LeftHand id="lefthand">

                    {/* SIDEBAR */}
                    <SideBarStyles>
                        <DesktopBurger className="burger--desktop" onClick={handleClick}>
                            <Hamburger />
                        </DesktopBurger>
                    </SideBarStyles>

                </LeftHand>


                {/* RIGHT */}
                <RightHand id="righthand">

                    {/* NAVBAR */}
                    <NavbarMain isOpen={isOpen} setIsOpen={setIsOpen} />

                    {/* PAGE CONTENT CONTAINER */}
                    <ContentContainer>
                        {children}
                    </ContentContainer>

                    {/* FOOTER */}
                    <FooterMain />

                </RightHand>

            </MainContainer>
        </SiteContainer>
    );
}
