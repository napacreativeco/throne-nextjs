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
        grid-gap: 7vh;
    }

    .text p {
        text-transform: lowercase;
        font-size: 12vh;
        letter-spacing: -.6vw;
        word-spacing: 1px;
        line-height: 0;
        text-align: center;
        white-space: nowrap;
        height: 100%;
        position: relative;
    }

    .text span.accent {
        letter-spacing: -1px;
        line-height: 0.3;
        font-family: var(--migra);
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

    @media screen and (max-width: 767px) {

        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 100vw;
        gap: 0px 0;
        min-height: 100vh;
        position: relative;

        .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 4px;
            height: 60vh;
        }

        .text p {
            text-transform: lowercase;
            font-size: 10vw;
            letter-spacing: -4px;
            word-spacing: 0px;
            line-height: 0.8;
            text-align: center;
            white-space: nowrap;
        }
        .text span.accent {
            line-height: 1;
        }

        .row {
            position: relative;
            height: 100%;
        }
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
                        <p className="title-frag">Websites <span className="extended-dash">---</span>&nbsp;and design</p>
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