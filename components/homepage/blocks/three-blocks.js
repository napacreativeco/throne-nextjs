import styled from "styled-components";

const BlocksContainer = styled.div`

    border-bottom: var(--border-white);

    .row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: stretch;
        height: 100%;
    }

    .cell:nth-child(1) {
        border-right: var(--border-white);
    }

    .cell:nth-child(2) {
        border-right: var(--border-white);
    }

    @media screen and (max-width: 767px) {
        .row {
            display: flex;
            flex-direction: column;
            align-items:  stretch;
            height: 100%;
            width: 100vw;
            
        }
        .cell {
            div {
                width: 100%;
            }
        }
        .cell:nth-child(1) {
            border-bottom: var(--border-white);
            border-right: 0px;
        }

        .cell:nth-child(2) {
            border-bottom: var(--border-white);
            border-right: 0px;
        }
    }


`;


const BlockStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 20%;
    position: relative;
    overflow: hidden;
    max-width: 100%;

    .section-title {
        font-size: 3em;
        letter-spacing: -2px;
        line-height: 0.8;
        position: relative;
        display: inline;
    }

    p {
        font-size: 0.9rem;
        letter-spacing: -0.5px;
        white-space: pre-wrap;
        margin-top: 10px;
    }

    @media screen and (max-width: 767px) {
        padding: 80px 20px;
    }
    
`;

export default function ThreeBlocks() {
    return (
        <BlocksContainer id="our-services">
            <div className="row">

                <BlockStyle className="cell">
                    <div>
                        <h3 className="section-title">Interface <span className="accent">Design</span></h3>
                        <p className="p">
                            websites, apps, desktop apps, dashboards
                        </p>
                    </div>
                </BlockStyle>

                <BlockStyle className="cell">
                    <div>
                        <h3 className="section-title">Website <span className="accent">Development</span></h3>
                        <p className="p">
                            traditional websites, wordpress themes, shopify themes, react.js, gatsby
                        </p>
                    </div>
                </BlockStyle>

                <BlockStyle className="cell">            
                    <div>
                        <h3 className="section-title">Business <span className="accent">Design</span></h3>
                        <p className="p">
                            pitch decks, brand guidelines, packaging, tradeshow, merchandise
                        </p>
                    </div>
                </BlockStyle>
            
            </div>
        </BlocksContainer>
    )
}