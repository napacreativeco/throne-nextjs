import styled from "styled-components";
import UsalCaseStudy from "./usal";
import { useState } from "react";
import CaseStudyContainer from "./casestudy__container";
import { handleClientScriptLoad } from "next/script";

const ModalStyles = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0vh;
    float: left;
    z-index: 9999999;
    overflow: hidden;
    cursor: default;

    &:before {
        content: '';
        top: 0px;
        right: 0;
        bottom: 0;
        left: 0;
        float: left;
        z-index: 0;
        width: 100%;
        height: inherit;
        backdrop-filter: blur(10px);
        position: fixed;
    }

`;

const ModalContent = styled.div`
    background: var(--black-dark);
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    margin: 60px 20px 0 20px;
    height: inherit;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 767px) {
        margin-top: 40px;
    }
`;

const ModalRow = styled.div`
    margin: 0px 10% 20px 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: inherit;
`;

const ModalClose = styled.div`
    display: block;
    text-align: left;
    position: relative;
    top: 20px;
    left: 40px;

    button {
        color: var(--white);
        border: 0;
        outline: 0;
        font-size: 24px;
        letter-spacing: -2px;
        cursor: pointer !important;
        border-bottom: var(--border-white);
        background: transparent;
    }

    @media screen and (max-width: 767px) {
        top: 16px;

        button {
            padding: 10px 20px;
        }
    }
`;

export default function CaseStudyModal({ targetClient, openCS, setOpenCS }) {

    const handleClick = (e) => {
        setOpenCS('0vh');
    }

    return (
        <ModalStyles style={{ height: openCS }}>
            <ModalContent  style={{ height: openCS }}>

                <ModalClose>
                    <button onClick={handleClick}>Close</button>
                </ModalClose>

                <ModalRow  style={{ height: openCS }}>
                    
                    <CaseStudyContainer clientName={targetClient} />

                </ModalRow>
            </ModalContent>
        </ModalStyles>
    );
}