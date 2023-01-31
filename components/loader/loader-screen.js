import styled from "styled-components";
import { useEffect, useState } from "react";

const LoaderStyles = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    float: left;
    z-index: 9999999999;
    backdrop-filter: blur(10px);
    height: 100%;
    width: 100%;

    .row {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

    }
`;

export default function LoaderScreen() {

    const [isLoaded, setIsLoaded] = useState('block');

    useEffect(() => {
    
        setTimeout(() => {
            setIsLoaded('none');
        }, 3000);

    });

    return (
        <LoaderStyles style={{ display: isLoaded }}>
            <div className="row">
                loading..
            </div>
        </LoaderStyles>
    );
}