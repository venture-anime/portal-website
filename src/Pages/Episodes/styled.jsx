import styled from 'styled-components';
import {
    characterContainerBgColour,
    characterContainerTextColour,
} from '../About/styled';
import {
    bgColour,
    mainTextColour,
    NAV_HEIGHT_PX,
    subTextColour,
} from '../../Styles/base';

export const Container = styled.div`
    display: flex;
    padding: 1em;
    color: ${mainTextColour};

    &:not(:last-child) {
        border-bottom: 1px solid ${subTextColour};
    }
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5em 1.5em;
    flex-grow: 1;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.span`
    font-weight: 900;
`;

export const Duration = styled.span``;

export const Details = styled.span`
    color: ${subTextColour};
`;

export const ThumbnailImg = styled.img`
    width: 200px;
    height: auto;
    border-radius: 3px;
`;

export const EpisodeListContainer = styled(Container)`
    min-height: calc(100vh - ${NAV_HEIGHT_PX}px - 10vh);
    display: flex;
    flex-direction: column;
    width: 80vw;
    background: ${bgColour};
    color: ${characterContainerTextColour};
    border-radius: 3px;
    padding: 1em;
`;
