import styled from "styled-components";
import { mainTextColour, subTextColour } from "Styles/base";

const FOOTER_HEIGHT_PX = 80;
const footerBgColour = "#130914";

const FooterContainer = styled.div`
    height: ${FOOTER_HEIGHT_PX}px;
    background: ${footerBgColour};
    width: 100vw;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 767px) {
        height: 50px;
    }
`;

const FooterContent = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    height: 100%;
    align-items: center;
`;

const SnsBtnContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SnsBtn = styled.a`
    text-decoration: none;
    cursor: pointer;
    margin: 0 0.5em;
`;

const SnsBtnImg = styled.img`
    width: 20px;
    height: 20px;
`;

const CopyrightLink = styled.a`
    font-size: 1em;
    text-decoration: none;
    color: ${mainTextColour};
    cursor: pointer;

    &:hover:not(:disabled) {
        color: ${subTextColour};
    }

    &:focus {
        outline: none;
    }
`;

export {
    FooterContainer,
    FooterContent,
    SnsBtnContainer,
    SnsBtn,
    SnsBtnImg,
    CopyrightLink,
};
