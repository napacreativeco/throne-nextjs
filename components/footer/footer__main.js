import styled from "styled-components";
import BackToTop from "../buttons/back-to-home";

const FooterStyles = styled.footer`
    margin: 20px var(--component--side-margin);
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 767px) {
    }
`;

export default function FooterMain() {
    return (
        <FooterStyles>
            <div>
                throne. &copy; 2023
            </div>
            <div>
                <BackToTop />
            </div>
        </FooterStyles>
    );
}