import React, { Fragment } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import {
    BgContainer,
    Container,
    NAV_HEIGHT_PX,
    subTextColour,
    bgColour,
} from "../component/meta";

import ren from "../Assets/images/character/ren.jpg";
import mayu from "../Assets/images/character/mayu.jpg";
import dan from "../Assets/images/character/dan.jpg";
import lucas from "../Assets/images/character/lucas.jpg";
import mikaela from "../Assets/images/character/mikaela.jpg";
import hiro from "../Assets/images/character/hiro.jpg";
import chloe from "../Assets/images/character/chloe.jpg";
import meiko from "../Assets/images/character/meiko.jpg";
import sanosuke from "../Assets/images/character/sanosuke.jpg";
import set from "../Assets/images/set.jpg";
import { Default, Mobile } from "../component/responsive";

const characterContainerBgColour = "#e2d8e3";
const characterContainerTextColour = bgColour;
const characterContainerSubTextColour = "#6f8798";

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

const CHARACTER_ID_REN = "ren";
const CHARACTER_ID_MAYU = "mayu";
const CHARACTER_ID_DAN = "dan";
const CHARACTER_ID_LUCAS = "lucas";
const CHARACTER_ID_MIKAELA = "mikaela";
const CHARACTER_ID_HIRO = "hiro";
const CHARACTER_ID_CHLOE = "chloe";
const CHARACTER_ID_MEIKO = "meiko";
const CHARACTER_ID_SANOSUKE = "sanosuke";

const CHARACTER_IMAGES = {
    [CHARACTER_ID_REN]: ren,
    [CHARACTER_ID_MAYU]: mayu,
    [CHARACTER_ID_DAN]: dan,
    [CHARACTER_ID_MIKAELA]: mikaela,
    [CHARACTER_ID_LUCAS]: lucas,
    [CHARACTER_ID_HIRO]: hiro,
    [CHARACTER_ID_CHLOE]: chloe,
    [CHARACTER_ID_MEIKO]: meiko,
    [CHARACTER_ID_SANOSUKE]: sanosuke,
};
const CHARACTER_VOICE = {
    [CHARACTER_ID_REN]: "cast.tazaki",
    [CHARACTER_ID_MAYU]: "cast.unset",
    [CHARACTER_ID_DAN]: "cast.akiyama",
    [CHARACTER_ID_MIKAELA]: "cast.toda",
    [CHARACTER_ID_LUCAS]: "cast.unset",
    [CHARACTER_ID_HIRO]: "cast.suzuki",
    [CHARACTER_ID_CHLOE]: "cast.unset",
    [CHARACTER_ID_MEIKO]: "cast.kitahara",
    [CHARACTER_ID_SANOSUKE]: "cast.asada",
};
const CHARACTERS = Object.keys(CHARACTER_IMAGES);

const About = () => {
    return (
        <Fragment>
            <CharacterProfilesContainer>
                <CharacterLabel>
                    <FormattedMessage id="about.characters" />
                </CharacterLabel>
                {CHARACTERS.map((characterId, idx) => {
                    const content = (
                        <Fragment>
                            <CharacterImage
                                alt={characterId}
                                src={CHARACTER_IMAGES[characterId]}
                                id={characterId}
                            />
                            <CharacterProfile>
                                <CharacterProfileSection>
                                    <JobTitle>
                                        <FormattedMessage
                                            id={`character.${characterId}.jobTitle`}
                                        />
                                    </JobTitle>
                                    <Furigana>
                                        <FormattedMessage
                                            id={`character.${characterId}.furigana`}
                                        />
                                    </Furigana>
                                    <Name>
                                        <FormattedMessage
                                            id={`character.${characterId}.name`}
                                        />
                                    </Name>
                                    <Physical>
                                        <FormattedMessage
                                            id={`character.${characterId}.profile`}
                                        />
                                    </Physical>
                                    <div>
                                        CV.{" "}
                                        <FormattedMessage
                                            id={CHARACTER_VOICE[characterId]}
                                        />
                                    </div>
                                </CharacterProfileSection>
                                <CharacterProfileSection>
                                    <ProfileLabel>
                                        <FormattedMessage
                                            id={`character.background`}
                                        />
                                    </ProfileLabel>
                                    <ProfileDetails>
                                        <FormattedMessage
                                            id={`character.${characterId}.setting`}
                                        />
                                    </ProfileDetails>
                                </CharacterProfileSection>
                                <CharacterProfileSection>
                                    <ProfileLabel>
                                        <FormattedMessage
                                            id={`character.reasonForApplication`}
                                        />
                                    </ProfileLabel>
                                    <ProfileDetails>
                                        <FormattedMessage
                                            id={`character.${characterId}.reasonForApplication`}
                                        />
                                    </ProfileDetails>
                                </CharacterProfileSection>
                                <MultiSectionContainer>
                                    <CharacterProfileSection>
                                        <ProfileLabel>
                                            <FormattedMessage
                                                id={`character.hobbies`}
                                            />
                                        </ProfileLabel>
                                        <ProfileDetails>
                                            <FormattedMessage
                                                id={`character.${characterId}.hobbies`}
                                            />
                                        </ProfileDetails>
                                    </CharacterProfileSection>
                                    <CharacterProfileSection>
                                        <ProfileLabel>
                                            <FormattedMessage
                                                id={`character.otherInfo`}
                                            />
                                        </ProfileLabel>
                                        <ProfileDetails>
                                            <FormattedMessage
                                                id={`character.${characterId}.other`}
                                            />
                                        </ProfileDetails>
                                    </CharacterProfileSection>
                                </MultiSectionContainer>
                            </CharacterProfile>
                        </Fragment>
                    );

                    return (
                        <Fragment key={characterId}>
                            <Mobile>
                                <CharacterListContainerMobile key={characterId}>
                                    {content}
                                </CharacterListContainerMobile>
                            </Mobile>
                            <Default>
                                <CharacterListContainer key={characterId}>
                                    {content}
                                </CharacterListContainer>
                            </Default>
                        </Fragment>
                    );
                })}
            </CharacterProfilesContainer>
            <BgContainer>
                <SetDesignLabel>
                    <FormattedMessage id="about.setDesign" />
                </SetDesignLabel>
                <SetDesignImage src={set} />
            </BgContainer>
        </Fragment>
    );
};

export default About;
