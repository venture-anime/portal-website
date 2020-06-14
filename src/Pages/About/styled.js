import styled from 'styled-components';
import { Container, NAV_HEIGHT_PX, subTextColour, bgColour } from 'Styles/base';

const characterContainerBgColour = '#e2d8e3';
const characterContainerTextColour = bgColour;
const characterContainerSubTextColour = '#6f8798';

const CharacterLabel = styled.div`
    font-size: 3em;
    margin-top: ${NAV_HEIGHT_PX * 2}px;
    margin-bottom: 1em;
    color: ${subTextColour};

    @media only screen and (max-width: 767px) {
        margin-top: 80px;
    }
`;

const CharacterListContainer = styled(Container)`
    height: calc(100vh - ${NAV_HEIGHT_PX}px - 10vh);
    flex-direction: row;
    width: 80vw;
    flex-wrap: row;
    align-items: start;
    border: 1px solid ${subTextColour};
    background: ${characterContainerBgColour};
    color: ${characterContainerTextColour};
    border-radius: 3px;
    padding: 1em;
`;

const CharacterListContainerMobile = styled.div`
    width: 80vw;
    flex-direction: column;
    justify-content: center;
    display: flex;
    background: ${characterContainerBgColour};
    color: ${characterContainerTextColour};
    padding: 1em;
`;

const CharacterImage = styled.img`
    width: auto;
    object-fit: contain;
    height: 100%;
    display: inline-block;
    border: 1px solid ${characterContainerSubTextColour};
    background-color: #ffffff;
    max-height: 100vh;
`;

const CharacterProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 1em 2em;
    overflow-y: auto;
    max-height: 90%;
`;

const CharacterProfileSection = styled.div`
    padding-bottom: 1em;
`;

const MultiSectionContainer = styled(CharacterProfileSection)`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-flow: wrap;
`;

const Name = styled.h2`
    font-size: 2em;
    margin: 0;
`;

const Furigana = styled.div`
    font-size: 0.5em;
    margin-top: 1em;
`;

const Physical = styled.div`
    font-size: 0.5em;
    margin-bottom: 1em;
`;

const JobTitle = styled.div`
    font-size: 0.75em;
    color: ${characterContainerSubTextColour};
`;

const ProfileLabel = styled.div`
    font-size: 0.75em;
    text-transform: uppercase;
    color: ${characterContainerSubTextColour};
`;

const ProfileDetails = styled.div`
    white-space: pre-line;
    word-break: break-word;
`;

const SetDesignLabel = styled.div`
    font-size: 3em;
    margin-top: ${NAV_HEIGHT_PX}px;
    margin-bottom: 1em;
    color: ${subTextColour};
`;

const SetDesignImage = styled.img`
    width: 80%;
    height: auto;
    display: inline-block;
    border: 1px solid ${characterContainerSubTextColour};
`;

const CharacterProfilesContainer = styled.div`
    padding-bottom: 3em;
`;

export {
    CharacterLabel,
    CharacterListContainer,
    CharacterListContainerMobile,
    CharacterImage,
    CharacterProfile,
    CharacterProfileSection,
    MultiSectionContainer,
    Name,
    Furigana,
    Physical,
    JobTitle,
    ProfileLabel,
    ProfileDetails,
    SetDesignLabel,
    SetDesignImage,
    CharacterProfilesContainer,
};
