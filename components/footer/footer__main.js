import styled from "styled-components";
import BackToTop from "../buttons/back-to-home";

const FooterStyles = styled.footer`
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    padding: 14px;

    @media screen and (max-width: 767px) {

        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: flex-end;
        max-width: 100vw;
        padding-bottom: 10px;

        div:nth-child(1) {
            padding-left: 10px;
            display: table-cell;
        }
        div:nth-child(2) {
            text-align: right;
            padding-right: 10px;
            display: table-cell;
        }
    }
`;

export default function FooterMain() {
    return (
        <FooterStyles>
            <div className="attribution">
                throne. &copy; 2023
            </div>
            <div>
                <BackToTop />
            </div>
        </FooterStyles>
    );
}