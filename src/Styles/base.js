import styled from 'styled-components';
import { Link } from 'react-router-dom';

import background1 from 'Assets/images/background/background_1.jpg';
import background2 from 'Assets/images/background/background_2.jpg';

// 色

export const bgColour = '#1c0f1d';

export const mainTextColour = '#ffffff';
export const textHoverColour = '#b395c0';
export const subTextColour = '#cac7bc';

//

export const NAV_HEIGHT_PX = '80';

// container

export const Container = styled.div`
    min-height: calc(100vh - ${NAV_HEIGHT_PX}px - 10vh);
    width: 100vw;
    color: ${mainTextColour};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 0 10vh 0;
    background: ${bgColour};
`;

export const BgContainer = styled(Container)`
    background-image: url(${background1});
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: inherit;
`;

export const Bg2Container = styled(BgContainer)`
    background-image: url(${background2});
`;

// テキスト

export const Header = styled.div`
    font-size: 3em;
    margin-top: ${NAV_HEIGHT_PX}px;
    margin-bottom: 1em;
    color: ${subTextColour};

    @media only screen and (max-width: 767px) {
        margin-top: 40px;
    }
`;

// ボタン

export const TextBtn = styled.button`
    background: none;
    color: ${mainTextColour};
    border: none;
    cursor: pointer;
    transition: 0.1s ease-in;

    &:hover:not(:disabled) {
        color: ${subTextColour};
    }

    &:focus {
        outline: none;
    }
`;

// リンク

export const DefaultLinkBtn = styled(Link)`
    background: none;
    color: ${mainTextColour};
    border: 2px solid ${mainTextColour};
    border-radius: 3px;
    cursor: pointer;
    transition: 0.1s ease-in;
    padding: 0.5em 1em;
    text-decoration: none;

    &:hover:not(:disabled) {
        background: ${bgColour};
    }
`;

export const TextLinkBtn = styled(Link)`
    background: none;
    color: ${mainTextColour};
    border: none;
    cursor: pointer;
    transition: 0.1s ease-in;
    text-decoration: none;
    margin: 0.75em;
    font-size: 0.8em;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-align: center;

    &:hover:not(:disabled) {
        color: ${subTextColour};
    }

    &:focus {
        outline: none;
    }
`;
