import styled from "styled-components";
import LowerThird from "./lower-third";
import Image from "next/image";

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

    svg {
        display: inline;
        max-width: 60px;
        fill: var(--white);
        stroke: var(--white);
    }

    img {
        margin: -7px 0px 0 10px;
        max-width: 80px;
    }

    .text {
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 7vh;
    }

    .text p {
        text-transform: lowercase;
        font-size: 12vh;
        letter-spacing: -.36vw;
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
        display: inline-block;
        letter-spacing: -2rem;
        margin-right: 0px;
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
            display: grid;
            grid-template-rows: repeat(4, 25%);
            justify-content: center;
            grid-gap: 4px 0;
            margin: 10vw 0;
            max-width: 100vw;
        }

        .text p {
            text-transform: lowercase;
            font-size: 10vw;
            letter-spacing: -4px;
            word-spacing: 0px;
            line-height: 0.8;
            text-align: center;
            white-space: nowrap;
            gap: 10px;
        }
        .text span.accent {
            line-height: 1;
        }

        img {
            margin: -2px 0px 0 6px;
            max-width: 30px;
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
                        <p className="title-frag">Websites <Image src="/svg/horiz-line.svg" height={60} width={140} alt="Your Name" /> and design</p>
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