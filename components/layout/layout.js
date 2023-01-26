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
`;

const RightHand = styled.div`

`;

const SideBarStyles = styled.aside`

    position: relative;
    width: 100%;
    min-height: 100%;

    .hamburger {
        position: sticky;
        display: flex;
        justify-content: center;
        top: 0;
        left: 50%;
        transition: var(--transition--global);
    }
    .hamburger:hover {
        transform: rotate(180deg);
    }

`;


export default function Layout({ children }) {

    const [isOpen, setIsOpen] = useState('100vh');

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
                innerSize={14}
                outerSize={12}
                color='193, 11, 111'
                trailingSpeed={1}
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={10}
                outerStyle={{
                    border: '0.2px solid #fff',
                    background: 'transparent'
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
                    '.link'
                ]}
            />

            <NavbarModal isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* CONTENT */}
            <MainContainer>


                {/* LEFT */}
                <LeftHand id="lefthand">

                    {/* SIDEBAR */}
                    <SideBarStyles>
                        <div className="hamburger" style={{ zIndex: '9999' }} onClick={handleClick}>
                            <Hamburger />
                        </div>
                    </SideBarStyles>

                </LeftHand>


                {/* RIGHT */}
                <RightHand id="righthand">

                    {/* NAVBAR */}
                    <NavbarMain />

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
