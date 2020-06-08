import styled from 'styled-components';
import {
    NAV_HEIGHT_PX,
    subTextColour,
    TextBtn,
} from 'Styles/base';

const Container = styled.div`
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: ${NAV_HEIGHT_PX}px;
    display: flex;
    justify-content: space-around;
    left: 0;
    top: 0;
    align-items: center;
    background: rgba(19, 9, 20, 0.8);
`;

const FilmTitleIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    padding: 0.5em 2em;
    cursor: pointer;
`;

const MainFilmTitle = styled.div`
    font-size: 1.25em;
`;

const SubFilmTitle = styled.div`
    font-size: 0.25em;
`;

const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MobileMenuBtn = styled.div`
    cursor: pointer;
    font-size: 3em;
    margin-right: 1em;
`;

const ToggleBtn = styled(TextBtn)`
    color: ${subTextColour};
`;

const HamburguerContainer = styled(Container)`
    justify-content: flex-end;
    height: 50px;
`;

const MobileContainer = styled(Container)`
    justify-content: flex-end;
    margin-right: 2em;
    height: 50px;
`;

const Padding = styled.div`
    margin-right: 1em;
`;

export {
    Container,
    FilmTitleIconContainer,
    MainFilmTitle,
    SubFilmTitle,
    BtnContainer,
    MobileMenuBtn,
    ToggleBtn,
    HamburguerContainer,
    MobileContainer,
    Padding,
}