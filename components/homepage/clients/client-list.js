import styled from "styled-components";

const ClientListStyle = styled.section`
    margin-top: 60px;
    padding: 0 20px;
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
    counter-reset: li;
`;

const Item = styled.li`
    
    font-size: 14em;
    letter-spacing: -14px;
    line-height: 0.7;
    border-bottom: var(--border-white);
    padding-bottom: 20px;
    text-transform: uppercase;

    &:after {
        counter-increment: li;
        content: '[' counter(li) ']';
        position: absolute;
        top: 6px;
        font-family: var(--migra);
        right: -24px;
        font-size: 12px;
        letter-spacing: 0px;
    }

    &:hover {
        font-family: var(--migra);
    }
`;



export default function ClientList({ handleClick }) {

    return (
        <ClientListStyle id="recent-projects">
            <TitleStyle>Recent <span className="accent">Projects</span></TitleStyle>
            <ListStyle>
                <Item className="mouse-big casestudy-link" onClick={handleClick} data-client="usal">Usal Project</Item>
                <Item className="mouse-big casestudy-link" onClick={handleClick} data-client="spring">All Is A Gentle Spring</Item>
                <Item className="mouse-big casestudy-link" onClick={handleClick} data-client="dominic">Dominic Fike</Item>
                <Item className="mouse-big casestudy-link" onClick={handleClick} data-client="nappy-boy">Nappy Boy Ent.</Item>
                <Item className="mouse-big casestudy-link" onClick={handleClick} data-client="bighouse">Bighouse</Item>
            </ListStyle>
        </ClientListStyle>
    )
}