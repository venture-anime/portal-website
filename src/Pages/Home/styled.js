import styled, { keyframes } from 'styled-components';

import {
    bgColour,
    Container,
    mainTextColour,
    subTextColour,
} from 'Styles/base';

const AttentionGrab = styled.div`
    font-size: 3em;
    margin-bottom: 1em;
    color: ${subTextColour};
    text-align: center;
`;

const Details = styled.div`
    width: 50%;
    text-align: center;
`;

const NextBtnContainer = styled.div`
    margin-top: 2em;
`;

const FilmTitleIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    padding: 0.5em 2em;
`;

const Logo = styled.img`
    width: 60vw;
    height: auto;
`;

const LogoMobile = styled.img`
    width: 90vw;
    height: auto;
`;

const SubFilmTitle = styled.div`
    padding: 0 1em;
    font-size: 1.35em;
    color: ${subTextColour};
`;

const CastRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
`;

const LabeledCast = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0 1em;

    @media only screen and (orientation: portrait) {
        flex-direction: column;
    }
`;

const CastLabel = styled.div`
    color: ${subTextColour};
    font-size: 0.5em;
    margin-right: 0.5em;
`;

const Cast = styled.div`
    font-size: 1em;
    margin-right: 1em;
`;

const ActionWrapper = styled.div`
    margin: 2em 0;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
`;

const MainActionLink = styled.a`
    background: ${mainTextColour};
    color: ${bgColour};
    cursor: pointer;
    transition: 0.1s ease-in;
    text-decoration: none;
    margin: 0.75em;
    font-size: 1.5em;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-align: center;
    border-radius: 3px;
    padding: 0.5em 1em;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover:not(:disabled) {
        background: ${subTextColour};
    }

    &:focus {
        outline: none;
    }
`;

const MainActionIcon = styled.i`
    color: #ff0000;
    font-size: 1.5em;
`;

// Unused
const SubActionLink = styled.a`
    background: none;
    color: ${mainTextColour};
    cursor: pointer;
    transition: 0.1s ease-in;
    text-decoration: none;
    margin: 0.25em;
    font-size: 1em;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-align: center;
    border: 1px solid ${mainTextColour};
    border-radius: 3px;
    padding: 0.5em 1em;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover:not(:disabled) {
        color: ${subTextColour};
        border: 1px solid ${subTextColour};
    }

    &:focus {
        outline: none;
    }
`;

// Unused
const SubActionIcon = styled.i`
    color: ${mainTextColour};
    font-size: 1em;
`;

const fadeIn = keyframes`
    from {
        background: rgba(0, 0, 0, 0.4);
    }
    
    to {
        background: rgba(0, 0, 0, 0.7);
    }
`;

const VideoBackdrop = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: -1;
    background: rgba(0, 0, 0, 0.7);

    animation: ${fadeIn} 1s ease-in forwards;
`;

const VideoBg = styled.video`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -2;
`;

const HomeContainer = styled(Container)`
    background: none;
`;

export {
    AttentionGrab,
    Details,
    NextBtnContainer,
    FilmTitleIconContainer,
    Logo,
    LogoMobile,
    SubFilmTitle,
    CastRowContainer,
    LabeledCast,
    CastLabel,
    Cast,
    ActionWrapper,
    MainActionLink,
    MainActionIcon,
    SubActionLink,
    SubActionIcon,
    VideoBackdrop,
    VideoBg,
    HomeContainer,
};
