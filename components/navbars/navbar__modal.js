import styled from "styled-components";

const ModalStyles = styled.div`
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0vh;
    float: left;
    z-index: 999;
    overflow: hidden;
    transition: var(--transition--global);

    strike { pointer-events: none; }

    @media screen and (max-width: 767px) {
    }

`;

const ModalContent = styled.div`
    height: inherit;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 767px) {
        backdrop-filter: blur(6px);
    }
`;

const ModalRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: inherit;
    overflow: hidden;
    padding: 20px 20px 40px 20px;

    &:before {
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        float: left;
        z-index: -1;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(6px);
        position: fixed;
    }
`;

const Headline = styled.span`
    font-size: 6em;
    letter-spacing: -6px;
`;

const LinkList = styled.div`

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
    }
    a {
        text-transform: uppercase;
        position: relative;
    }
  
    li a::after {
        content: '';
        background: var(--white);
        height: 2px;
        width: auto;
        position: absolute;
        bottom: -4px;
        left: 50%;
        right: 50%;
        transition: var(--transition--global);
    }

    li:hover a::after {
        content: '';
        background: var(--white);
        height: 2px;
        left: -10%;
        right: -10%;
    }
`;

export default function NavbarModal({ isOpen, setIsOpen }) {

    const contact = document.getElementById('contact');
    const projects = document.getElementById('projects');

    return (
        <ModalStyles className="modal-container" style={{ height: isOpen  }}>
            <ModalContent>
                <ModalRow>

                    <Headline>Navigation</Headline>

                    <LinkList>
                        <ul>
                            <li className="active mouse-big"><a href="/" title="home">init</a></li>
                            <li className="spacer">|</li>
                            <li className="mouse-big"><a onClick={(e) => { e.preventDefault(); setIsOpen('0vh'); projects.scrollIntoView({behavior:"smooth", block: "start"}) }} title="projects">projects</a></li>
                            <li className="spacer">|</li>
                            <li className="mouse-big"><a onClick={(e) => { e.preventDefault(); setIsOpen('0vh'); contact.scrollIntoView({behavior:"smooth", block: "start"}) }} title="contact">contact</a></li>
                            <li className="spacer">|</li>
                            <li className="mouse-big"><a title="contact"><strike>behance</strike></a></li>
                        </ul>
                    </LinkList>

                </ModalRow>
            </ModalContent>
        </ModalStyles>
    );
}