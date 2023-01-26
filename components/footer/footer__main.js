import styled from "styled-components";

const FooterStyles = styled.footer`
    margin: 20px var(--component--side-margin);
    text-transform: uppercase;
`;

export default function FooterMain() {
    return (
        <FooterStyles>
            throne. &copy; 2023
        </FooterStyles>
    );
}