import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import {
    bgColour,
    Container,
    mainTextColour,
    subTextColour,
} from 'Styles/base';

export const FilmTitleIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    padding: 0.5em 2em;
`;

export const Logo = styled.img`
    width: 60vw;
    height: auto;
`;

export const LogoMobile = styled.img`
    width: 90vw;
    height: auto;
`;

export const SubFilmTitle = styled.div`
    padding: 0 1em;
    font-size: 1.35em;
    color: ${subTextColour};
`;

export const CastRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
`;

export const LabeledCast = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0 1em;

    @media only screen and (orientation: portrait) {
        flex-direction: column;
    }
`;

export const CastLabel = styled.div`
    color: ${subTextColour};
    font-size: 0.5em;
    margin-right: 0.5em;
`;

export const Cast = styled.div`
    font-size: 1em;
    margin-right: 1em;
`;

export const ActionWrapper = styled.div`
    margin: 2em 0;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
`;

export const MainActionLink = styled(Link)`
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

export const MainActionIcon = styled.i`
    color: #ff0000;
    font-size: 1.5em;
`;

export const SubActionLink = styled(Link)`
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

export const SubActionIcon = styled.i`
    color: ${mainTextColour};
    font-size: 1em;
`;

export const fadeIn = keyframes`
    from {
        background: rgba(0, 0, 0, 0.4);
    }
    
    to {
        background: rgba(0, 0, 0, 0.7);
    }
`;

export const VideoBackdrop = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: -1;
    background: rgba(0, 0, 0, 0.7);

    animation: ${fadeIn} 1s ease-in forwards;
`;

export const VideoBg = styled.video`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -2;
`;

export const HomeContainer = styled(Container)`
    background: none;
`;
