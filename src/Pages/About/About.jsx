import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import {
    CHARACTER_IMAGES,
    CHARACTER_VOICE,
    CHARACTERS,
} from 'Constants/character';
import { BgContainer, Header } from 'Styles/base';

import set from 'Assets/images/set.jpg';
import { Default, Mobile } from 'Components/Responsive.jsx';
import {
    AttentionGrab,
    CharacterImage,
    CharacterListContainer,
    CharacterListContainerMobile,
    CharacterProfile,
    CharacterProfilesContainer,
    CharacterProfileSection,
    Details,
    Furigana,
    JobTitle,
    MultiSectionContainer,
    Name,
    Physical,
    ProfileDetails,
    ProfileLabel,
    SetDesignImage,
    SetDesignLabel,
} from './styled';

const About = () => (
    <>
        <BgContainer>
            <AttentionGrab>
                <FormattedMessage id="details.story" />
            </AttentionGrab>
            <Details>
                <FormattedMessage id="details.story1" />
                <br />
                <br />
                <FormattedMessage id="details.story2" />
                <br />
                <br />
                <FormattedMessage id="details.story3" />
            </Details>
        </BgContainer>
        <CharacterProfilesContainer>
            <Header>
                <FormattedMessage id="about.characters" />
            </Header>
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
