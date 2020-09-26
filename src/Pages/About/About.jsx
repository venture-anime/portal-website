import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import {
    CHARACTER_IMAGES,
    CHARACTER_VOICE,
    CHARACTERS,
} from 'Constants/character';
import { Bg2Container, BgContainer, DefaultLinkBtn } from 'Styles/base';

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
    AttentionGrab,
    Details,
    NextBtnContainer,
} from './styled';
import { paths } from '../../Constants/paths';

const About = () => (
    <>
        <Bg2Container>
            <AttentionGrab>
                <FormattedMessage id="details.introduction" />
            </AttentionGrab>
            <Details>
                <FormattedMessage id="details.introduction1" />
                <br />
                <br />
                <FormattedMessage id="details.introduction2" />
                &nbsp;
                <FormattedMessage id="details.introduction3" />
                <br />
                <br />
                <FormattedMessage id="details.introduction4" />
            </Details>
        </Bg2Container>
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
            <NextBtnContainer>
                <DefaultLinkBtn to={paths.about}>
                    <FormattedMessage id="details.viewMore" />
                </DefaultLinkBtn>
            </NextBtnContainer>
        </BgContainer>
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
