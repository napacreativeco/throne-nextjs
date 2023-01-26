import Layout from "../components/layout/layout";
import Hero from "../components/homepage/hero/hero";
import Marquee from "react-fast-marquee";
import ThreeBlocks from "../components/homepage/blocks/three-blocks";
import ClientList from "../components/homepage/clients/client-list";
import CaseStudyModal from "../components/casestudies/casestudy__modal";
import ContactBlock from "../components/homepage/contact/contact";
import { useState } from "react";

import styled from "styled-components";

const MarqueeDesktop = styled.div`
    @media screen and (min-width: 768px) {
        display: block;
    }
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const MarqueeMobile = styled.div`
    @media screen and (min-width: 768px) {
        display: none;
    }
    @media screen and (max-width: 767px) {
        display: block;
    }
`;

export default function Home() {

  const [openCS, setOpenCS] = useState('0vh');
  const [targetClient, setTargetClient] = useState('usal');
  
  const [isDisplay, setIsDisplay] = useState('none');

  const handleClick = (e) => {
    setOpenCS('100vh');
    setTargetClient(e.target.dataset.client);
    setIsDisplay('block');
    
  }

  return (
    <Layout>

      <Hero />

      <MarqueeDesktop>
        <Marquee
          className="marquee"
          pauseOnHover={false}
          pauseOnClick={true}
          gradient={false}
          speed={140}
          style={{
            fontSize: '6vw',
            letterSpacing: '-4px',
            textTransform: 'uppercase',
            borderBottom: 'var(--border-white)'
        }}>
          <p>throne is a design studio based in napa, california. we create clean and organized websites that generate leads.</p>
        </Marquee>
      </MarqueeDesktop>

      <MarqueeMobile>
        <Marquee
          className="marquee--mobile"
          pauseOnHover={false}
          pauseOnClick={true}
          gradient={false}
          speed={80}
          style={{
            fontSize: '12vw',
            letterSpacing: '-4px',
            textTransform: 'uppercase',
            borderBottom: 'var(--border-white)'
        }}>
          <p>throne is a design studio based in napa, california. we create clean and organized websites that generate leads.</p>
        </Marquee>
      </MarqueeMobile>


      <ThreeBlocks />

      <ClientList openCS={openCS} setOpenCS={setOpenCS} handleClick={handleClick} />

      <ContactBlock />

      <CaseStudyModal style={{ height: openCS, display: isDisplay }} openCS={openCS} setOpenCS={setOpenCS}  handleClick={handleClick} targetClient={targetClient} />

    </Layout>
  )
}
