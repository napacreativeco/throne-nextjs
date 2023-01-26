import styled from "styled-components";

const CursorStyles = styled.div`
    .cursor {
        position: fixed;
        left: 0;
        top: 0;
        pointer-events: none;
        z-index: 999999;
    }
    .cursor--small {
        width: 5px;
        height: 5px;
        left: -2.5px;
        top: -2.5px;
        border-radius: 50%;
        z-index: 11000;
        background: var(--white);
        z-index: 999999;
    }
    .cursor--canvas {
        width: 100vw;
        height: 100vh;
        z-index: 999999;
    }
`;

export default function Cursor() {
    return (
        <>
            <CursorStyles className="cursor cursor--small"></CursorStyles>
            <canvas className="cursor cursor--canvas" resize></canvas>
        </>
    )
}