import Image from "next/image";
import styled from "styled-components";

const NavbarMainStyles = styled.div`
    .navbar__main--row {
        display: grid;
        grid-template-columns: 2fr 8fr 2fr;
        grid-gap: 10%;
        padding: 10px 0;
    }
`;

const CellLeft = styled.div`

    .logo {
        text-align: center;
    }

    img {
        height: 40px;
    }
`;

const CellCenter = styled.div`
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        counter-reset: nav;
    }

    li {
        position: relative;
        text-transform: uppercase;
    }

    li::before {
        counter-increment: nav;
        content: '(' counter(nav) ')';
        font-family: var(--migra);
        padding-right: 4px;
    }

    li:hover::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: -10px;
        right: -10px;
        border-bottom: var(--border-white);
        animation: wider 0.2s forwards;
        transition: var(--transition-global);
    }

    li:hover a {
        opacity: var(--hover-opacity);
        transition: var(--transition-global);
    }

    @keyframes wider {
        0% { left: 50%; right: 50%; }
        100% { left: -10px; right: -10px; }
    }

`;

const CellRight = styled.div`
    .tagline {
        line-height: 0.8;
        display: flex;
        justify-content: flex-end;
        font-size: 22px;
    }
    .tagline span {
        font-family: var(--migra);
        margin-right: 20px;
    }
`;

export default function NavbarMain() {
    return (
        <NavbarMainStyles className="navbar__main">
            <div className="navbar__main--row">
                <CellLeft>
                    <div className="logo">
                        <Image
                            src="/svg/logo--triangle.svg"
                            height={144}
                            width={144}
                            alt="Your Name"
                        />
                    </div>
                </CellLeft>
                <CellCenter>
                    <ul>
                        <li className="active mouse-big"><a href="/" title="Home">init</a></li>
                        <li className="mouse-big"><a href="#recent-projects" title="Projects">projects</a></li>
                        <li className="mouse-big"><a href="#contact" title="Contact">contact</a></li>
                    </ul>
                </CellCenter>
                <CellRight>
                    <div className="tagline">
                        <span>Website Design &amp; <br /> Development</span>
                    </div>                   
                </CellRight>
            </div>
        </NavbarMainStyles>
    )
}