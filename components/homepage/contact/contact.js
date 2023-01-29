import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";


const ContactStyle = styled.section`

    margin: 20vh 0;

    .row {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .text p {
        text-transform: lowercase;
        font-size: 5vw;
        letter-spacing: -.4vw;
        word-spacing: 1px;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
    }

    .text span.accent {
        font-size: 5vw;
        letter-spacing: -1px;
        line-height: 1;
        font-family: var(--migra);
    }

    .line p {
        display: flex;
        flex-direction: row;
        gap: 24px;
        align-items: stretch;
        justify-content: center;
    }

    img {
        margin: 10px 0px 0 20px;
        max-width: 200px;
        transform: rotate(180deg);
    }

    @media screen and (max-width: 767px) {

        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 100vw;
        position: relative;

        .text {
            display: flex;
            flex-direction: column;
        }
        .text p {
            text-transform: lowercase;
            font-size: 10vw;
            letter-spacing: -4px;
            word-spacing: 0px;
            line-height: 1;
            text-align: center;
            white-space: nowrap;
        }
        .text span.accent {
            font-family: var(--migra);
            font-size: 9.9vw;
            letter-spacing: -1px;
            line-height: 1.15;
        }

        .line p {
            display: flex;
            flex-direction: row;
            gap: 6px;
            align-items: stretch;
            justify-content: center;
        }

        .line img {
            max-width: 80px;
            margin: -4px 0px 0 8px;
        }
    }

`;

export default function ContactBlock() {
    return (
        <ContactStyle id="contact-throne">
            <div className="row">
                <div className="text">

                    <div className="line">
                        <p className="title-frag">Ready to <span className="accent">get going</span>(?)</p>
                    </div>
                    
                    <div className="line">
                        <p className="title-frag"><span className="accent">email us</span> by clicking</p>
                    </div>
                    
                    <div className="line">
                        <p className="title-frag">on this <Image src="/svg/arrow-styled.svg" height={60} width={140} alt="Your Name" /> <Link href="mailto:contact@throne.work"><span className="accent">link</span></Link></p>
                    </div>
                </div>
            </div>
        </ContactStyle>
    );
}