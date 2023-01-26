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
        letter-spacing: -1px;
        line-height: 1;
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

`;

export default function ContactBlock() {
    return (
        <ContactStyle>
            <div className="row">
                <div className="text">

                    <div className="line">
                        <p className="title-frag">Ready to <span className="accent">get going</span>(?)</p><br />
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