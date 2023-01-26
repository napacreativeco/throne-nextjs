import Layout from "../components/layout/layout";
import Hero from "../components/homepage/hero/hero";
import Marquee from "react-fast-marquee";
import ThreeBlocks from "../components/homepage/blocks/three-blocks";
import ClientList from "../components/homepage/clients/client-list";
import CaseStudyModal from "../components/casestudies/casestudy__modal";
import ContactBlock from "../components/homepage/contact/contact";
import { useState } from "react";

export default function Home() {

  const [openCS, setOpenCS] = useState('0vh');
  const [targetClient, setTargetClient] = useState('usal');

  const handleClick = (e) => {
    setOpenCS('100vh');

    setTargetClient(e.target.dataset.client);
  }

  return (
    <Layout>

      <Hero />

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

      <ThreeBlocks />

      <ClientList openCS={openCS} setOpenCS={setOpenCS} handleClick={handleClick} />

      <ContactBlock />

      <CaseStudyModal openCS={openCS} setOpenCS={setOpenCS}  handleClick={handleClick} targetClient={targetClient} />

    </Layout>
  )
}
