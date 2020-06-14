import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import {
    CHARACTER_IMAGES,
    CHARACTER_VOICE,
    CHARACTERS,
} from 'Constants/character';
import { BgContainer } from 'Styles/base';

import set from 'Assets/images/set.jpg';
import { Default, Mobile } from 'Components/Responsive.jsx';
import {
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
} from './styled';

const About = () => (
    <>
        <CharacterProfilesContainer>
            <CharacterLabel>
                <FormattedMessage id="about.characters" />
            </CharacterLabel>
            {CHARACTERS.map(characterId => {
                const content = (
                    <>
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
                                    {'CV. '}
                                    <FormattedMessage
                                        id={CHARACTER_VOICE[characterId]}
                                    />
                                </div>
                            </CharacterProfileSection>
                            <CharacterProfileSection>
                                <ProfileLabel>
                                    <FormattedMessage id="character.background" />
                                </ProfileLabel>
                                <ProfileDetails>
                                    <FormattedMessage
                                        id={`character.${characterId}.setting`}
                                    />
                                </ProfileDetails>
                            </CharacterProfileSection>
                            <CharacterProfileSection>
                                <ProfileLabel>
                                    <FormattedMessage id="character.reasonForApplication" />
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
                                        <FormattedMessage id="character.hobbies" />
                                    </ProfileLabel>
                                    <ProfileDetails>
                                        <FormattedMessage
                                            id={`character.${characterId}.hobbies`}
                                        />
                                    </ProfileDetails>
                                </CharacterProfileSection>
                                <CharacterProfileSection>
                                    <ProfileLabel>
                                        <FormattedMessage id="character.otherInfo" />
                                    </ProfileLabel>
                                    <ProfileDetails>
                                        <FormattedMessage
                                            id={`character.${characterId}.other`}
                                        />
                                    </ProfileDetails>
                                </CharacterProfileSection>
                            </MultiSectionContainer>
                        </CharacterProfile>
                    </>
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
    </>
);

export default About;
