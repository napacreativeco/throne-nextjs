import styled from "styled-components";
import LowerThird from "./lower-third";

const HeroStyles = styled.div`

    border-bottom: var(--border-white);
    width: 100%;
    height: calc(100vh - 62px);
    display: grid;
    grid-template-rows: 10fr 2fr;
    flex-direction: column;
    justify-content: space-between;

    .row {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .text {
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 4.5vw;
    }
    .text p {
        text-transform: lowercase;
        font-size: 5vw;
        letter-spacing: -.4vw;
        word-spacing: 1px;
        line-height: 0;
        text-align: center;
        white-space: nowrap;
        height: 100%;
        position: relative;
    }

    .text span.accent {
        letter-spacing: -1px;
        line-height: 0;
    }

    .line p {
        display: flex;
        flex-direction: row;
        gap: 24px;
        align-items: stretch;
        justify-content: center;
    }

    .extended-dash {
        letter-spacing: -2rem;
    }
`;

export default function Hero() {
    return (
        <HeroStyles className="hero">
            <div className="row">
                <div className="text">

                    <div className="line">
                        <p className="title-frag">We develop <span className="accent mouse-big">awesome</span></p>
                    </div>
                    <div className="line">
                        <p className="title-frag">Websites <span className="extended-dash">------</span>&nbsp; and design</p>
                    </div>
                    <div className="line">
                        <p className="title-frag"><span className="accent mouse-big">helpful</span> Graphics that</p>
                    </div>
                    <div className="line">
                        <p className="title-frag">make your job <span className="accent mouse-big">easier</span></p>
                    </div>
                
                </div>
            </div>

            
            <LowerThird />

        </HeroStyles>
    );
}