import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const LowerThirdStyles = styled.div`
    
    .lt-row {
        display: grid;
        grid-template-columns: 6fr 3fr 3fr;
        align-items: stretch;
        padding: 0;
        border-top: var(--border-white);
        min-height: 10vh;
        height: 100%;
    }

    /* Text */
    .text-column {
        border-right: var(--border-white);
    }

    p {
        font-size: 1.6em;
        letter-spacing: -1px;
        position: relative;
        height: calc(100% - 20px);
        padding: 0 10px;
    }

    /* Work */
    .work-column {
        border-right: var(--border-white);
        text-align: center;
        justify-content: center;
        font-family: var(--migra);
        
        svg {
            max-width: 160px;
            margin: 0 auto;
            text {
                font-size: 8rem;
                font-family: var(--migra);
            }
        }

        a {
            font-family: var(--migra);
            font-size: 3em;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            border: var(--border-white);
            background: transparent;
            color: var(--white);
            border-radius: 50%;
            line-height: 0;
            width: 90%;
            height: 90%;
        }

    }

    .arrow-column {
        display: flex;
        justify-content: center;
    }


    
    @media screen and (max-width: 767px) {
        min-height: 40vh;

        .lt-row {
            height: 100%;
            grid-template-columns: auto;
            align-items: stretch;
            grid-template-areas:
            "text text"
            "work arrow";
        }
        .text-column {
            grid-area: text;
            border-right: 0px;
            border-bottom: var(--border-white);
            padding: 10px 0;
        }
        .work-column {
            grid-area: work;
            border-right: var(--border-white);
        }
        .arrow-column {
            grid-area: arrow;
        }
        
    }


`;

const CellStyles = styled.div`
    display: flex;
    align-items: center;
`;

export default function LowerThird() {
    return (
        <LowerThirdStyles>

            <div className="lt-row">
                <CellStyles className="text-column">
                    <p>
                        ( <span className="accent">i</span> ) &nbsp; &nbsp; Modern technology can be leveraged to elevate your business. Take a moment to scroll through our recent work to see ways we can help design your success.
                    </p>
                </CellStyles>

                <CellStyles className="work-column">
                    <Link href="#recent-projects">
                        Work
                    </Link>
                </CellStyles>

                <CellStyles className="arrow-column">
                    <Link href="#our-services">
                        <Image
                            src="/svg/arrow-right.svg"
                            height={64}
                            width={64}
                            alt="Your Name"
                        />
                    </Link>
                </CellStyles>
            </div>

        </LowerThirdStyles>
    )
}