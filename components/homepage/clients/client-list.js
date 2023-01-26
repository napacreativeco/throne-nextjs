import styled from "styled-components";

const ClientListStyle = styled.section`
    margin-top: 60px;
    padding: 0 20px;

    @media screen and (max-width: 767px) {
        max-width: 100vw;
        padding: 0 10px;
    }
`;


const TitleStyle = styled.h2`

    font-size: 3em;
    letter-spacing: -2px;
    position: relative;
    display: inline;
`;

const ListStyle = styled.ul`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 110px 0; 
`;

const Item = styled.li`
    
    font-size: 14em;
    letter-spacing: -16px;
    line-height: 0.76;
    word-spacing: -6px;
    border-bottom: var(--border-white);
    padding-bottom: 20px;
    text-transform: uppercase;
    transition: line-height var(--transition--global--timing);
    position: relative;

    &:hover {
        font-family: var(--migra);
        line-height: 0.76;
        letter-spacing: -8px;

        sup.accent {
            display: none;
        }
    }

    sup.accent {
        position: absolute;
        font-family: var(--migra);
        font-size: 0.4em;
        letter-spacing: -2px;
        top: 0px;
        right: 0px;
    }

    @media screen and (max-width: 767px) {
        max-width: 100vw;
        font-size: 6em;
        letter-spacing: -8px;
        line-height: 0.8;
        word-wrap: break-word;
        padding-right: 20px;

        
        sup.accent {
            font-family: var(--migra);
            font-size: 0.4em;
            letter-spacing: -2px;
            top: -24px;
            left: 0px;
            float: left;
        }

    }
`;



export default function ClientList({ handleClick }) {

    return (
        <ClientListStyle id="recent-projects">
            <TitleStyle>Recent <span className="accent">Projects</span></TitleStyle>
            <ListStyle>
                <Item className="mouse-big casestudy-link" onClick={handleClick} data-client="usal">Usal Project <sup className="accent">01</sup></Item>
                <Item className="mouse-big casestudy-link" onClick={handleClick} data-client="spring">All Is A Gentle Spring <sup className="accent">02</sup></Item>
                <Item className="mouse-big casestudy-link" onClick={handleClick} data-client="dominic">Dominic Fike <sup className="accent">03</sup></Item>
                <Item className="mouse-big casestudy-link" onClick={handleClick} data-client="nappy">Nappy Boy Ent. <sup className="accent">04</sup></Item>
                <Item className="mouse-big casestudy-link" onClick={handleClick} data-client="bighouse">Bighouse <sup className="accent">05</sup></Item>
            </ListStyle>
        </ClientListStyle>
    )
}