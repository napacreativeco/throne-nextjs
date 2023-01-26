import styled from "styled-components";

const ModalStyles = styled.div`
    display: block;
    position: fixed;
    top: 100vh;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    float: left;
    z-index: 999;
    overflow: hidden;
    transition: var(--transition--global);

    &:before {
        content: '';
        top: inherit;
        right: 0;
        bottom: 0;
        left: 0;
        float: left;
        z-index: -99;
        width: 100%;
        height: auto;
        backdrop-filter: blur(6px);
        position: fixed;
    }

`;

const ModalContent = styled.div`
    height: 100vh;
    position: relative;
`;

const ModalRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    height: 100%;
    padding: 20px 20px 40px 20px;
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

export default function NavbarModal({ isOpen, isDisplay }) {

    return (
        <ModalStyles style={{ top: isOpen, display: isDisplay }}>
            <ModalContent>
                <ModalRow>

                    <Headline>Navigation</Headline>

                    <LinkList>
                        <ul>
                            <li className="active mouse-big"><a href="/" title="home">init</a></li>
                            <li className="spacer">|</li>
                            <li className="mouse-big"><a href="#projects" title="projects">projects</a></li>
                            <li className="spacer">|</li>
                            <li className="mouse-big"><a href="#contact" title="contact">contact</a></li>
                            <li className="spacer">|</li>
                            <li className="mouse-big"><a href="#contact" title="contact">behance</a></li>
                        </ul>
                    </LinkList>

                </ModalRow>
            </ModalContent>
        </ModalStyles>
    );
}