import styled from "styled-components";
import Link from "next/link";

const CaseStudyContent = styled.article`

    overflow: hidden; 

    .post-row {
    }

    .intro-block p {
        margin-top: 40px;
    }
    .title {
        display: inline;
        font-size: 64px;
        letter-spacing: -4px;
        border-bottom: var(--border-white);
    }
    .text-content {
        position: relative;
        font-size: 22px;
    }

    .cs-block h4 {
        font-size: 54px;
        letter-spacing: -2px;
    }
`;

export default function SpringCaseStudy() {
    return (
        <CaseStudyContent>
            <div className="post-row">

                <div className="intro-block">
                    <h3 className="title">
                        Coming soon
                    </h3>
                    <p>Our Case Studies will be posted here shortly.</p>
                    <br />
                    <Link style={{ textDecoration: 'underline' }} href="https://gentlespring.co/">Check them out.</Link>
                </div>

            </div>
        </CaseStudyContent>
    )
}