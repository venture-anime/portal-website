import React from 'react';
import { FormattedMessage } from 'react-intl';
import CastIntroductionVideoLink from 'Components/CastIntroductionVideoLink';
import {
    StaffContainer,
    Section,
    SectionTitle,
    CastContainer,
    CastLabel,
    UnclickableCast,
    CastDetailsWrapper,
    Cast,
} from './styled';

const Staff = () => (
    <StaffContainer>
        <Section>
            <SectionTitle>
                <FormattedMessage id="cast" />
            </SectionTitle>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="character.ren.name" />
                </CastLabel>
                <CastDetailsWrapper>
                    <Cast
                        href="https://twitter.com/koji_tazaki"
                        target="_blank"
                    >
                        <FormattedMessage id="cast.tazaki" />
                    </Cast>
                    <CastIntroductionVideoLink href="https://www.youtube.com/watch?v=HqxFCFOHJ4Q&list=PL_xwYIO1BOyWt_4xG0o-o5NeyQvDvibew&index=4" />
                </CastDetailsWrapper>
            </CastContainer>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="character.dan.name" />
                </CastLabel>
                <CastDetailsWrapper>
                    <Cast
                        href="https://instagram.com/akiyamasho"
                        target="_blank"
                    >
                        <FormattedMessage id="cast.akiyama" />
                    </Cast>
                    <CastIntroductionVideoLink href="https://www.youtube.com/watch?v=3i76dQxbGE0" />
                </CastDetailsWrapper>
            </CastContainer>
            <CastContainer>
                <CastDetailsWrapper>
                    <CastLabel>
                        <FormattedMessage id="character.mikaela.name" />
                    </CastLabel>
                    <Cast
                        href="https://instagram.com/makicoooofficial"
                        target="_blank"
                    >
                        <FormattedMessage id="cast.toda" />
                    </Cast>
                    <CastIntroductionVideoLink href="https://www.youtube.com/watch?v=-dFnWoqOG5A&list=PL_xwYIO1BOyWt_4xG0o-o5NeyQvDvibew&index=3" />
                </CastDetailsWrapper>
            </CastContainer>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="character.hiro.name" />
                </CastLabel>
                <CastDetailsWrapper>
                    <Cast
                        href="https://twitter.com/rinvoice711"
                        target="_blank"
                    >
                        <FormattedMessage id="cast.suzuki" />
                    </Cast>
                    <CastIntroductionVideoLink href="https://www.youtube.com/watch?v=r_Axfifhjwk&list=PL_xwYIO1BOyWt_4xG0o-o5NeyQvDvibew&index=1" />
                </CastDetailsWrapper>
            </CastContainer>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="character.meiko.name" />
                </CastLabel>
                <UnclickableCast>
                    <FormattedMessage id="cast.kitahara" />
                </UnclickableCast>
            </CastContainer>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="character.sanosuke.name" />
                </CastLabel>
                <CastDetailsWrapper>
                    <Cast
                        href="https://ameblo.jp/yasuteru-asada/"
                        target="_blank"
                    >
                        <FormattedMessage id="cast.asada" />
                    </Cast>
                    <CastIntroductionVideoLink
                        href="https://www.youtube.com/watch?v=DGeVQ02jmBI&list=PL_xwYIO1BOyWt_4xG0o-o5NeyQvDvibew&index=2"
                        target="_blank"
                    >
                        [
                        <FormattedMessage id="cast.introductionVideo" />
                        ]
                    </CastIntroductionVideoLink>
                </CastDetailsWrapper>
            </CastContainer>
        </Section>
        <Section>
            <SectionTitle>
                <FormattedMessage id="staff" />
            </SectionTitle>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="cast.title.prEditor" />
                </CastLabel>
                <UnclickableCast>
                    <FormattedMessage id="cast.kono" />
                </UnclickableCast>
            </CastContainer>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="cast.title.advice" />
                </CastLabel>
                <Cast href="https://twitter.com/rinvoice711" target="_blank">
                    <FormattedMessage id="cast.suzuki" />
                </Cast>
            </CastContainer>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="cast.title.mainTheme" />
                </CastLabel>
                <Cast href="https://twitter.com/tokyo_cs" target="_blank">
                    <FormattedMessage id="cast.matsuno" />
                </Cast>
            </CastContainer>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="cast.title.mixingEngineer" />
                </CastLabel>
                <UnclickableCast>
                    <FormattedMessage id="cast.haratakashi" />
                </UnclickableCast>
            </CastContainer>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="cast.title.BGM" />
                </CastLabel>
                <UnclickableCast>
                    <FormattedMessage id="cast.watanabe" />
                </UnclickableCast>
                <UnclickableCast>
                    <FormattedMessage id="cast.lee" />
                </UnclickableCast>
                <UnclickableCast>
                    <FormattedMessage id="cast.ohtsubo" />
                </UnclickableCast>
            </CastContainer>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="cast.title.musicCoordinator" />
                </CastLabel>
                <CastDetailsWrapper>
                    <Cast href="http://www.musicport-j.org/" target="_blank">
                        <FormattedMessage id="cast.mpj" />
                    </Cast>
                    <CastIntroductionVideoLink href="https://www.youtube.com/watch?v=kIoUBzUl22k&feature=youtu.be" />
                </CastDetailsWrapper>
            </CastContainer>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="cast.title.voiceMixing" />
                </CastLabel>
                <Cast
                    href="https://ja.wikipedia.org/wiki/%E5%8A%A0%E8%97%A4%E5%A4%A7%E5%92%8C"
                    target="_blank"
                >
                    <FormattedMessage id="cast.kato" />
                </Cast>
            </CastContainer>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="cast.title.soundEffects" />
                </CastLabel>
                <UnclickableCast>
                    <FormattedMessage id="cast.kojima" />
                </UnclickableCast>
            </CastContainer>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="cast.title.foleyMixing" />
                </CastLabel>
                <Cast
                    href="https://soundround.jp/members-sound/haraguchi-takamasa/"
                    target="_blank"
                >
                    <FormattedMessage id="cast.haraguchi" />
                </Cast>
            </CastContainer>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="cast.title.manager" />
                </CastLabel>
                <Cast href="https://twitter.com/Sakamin0417" target="_blank">
                    <FormattedMessage id="cast.sakami" />
                </Cast>
            </CastContainer>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="cast.title.animators" />
                </CastLabel>
                <Cast href="https://instagram.com/akiyamasho" target="_blank">
                    <FormattedMessage id="cast.akiyama" />
                </Cast>
                <br />
                <Cast href="https://www.porkky.com" target="_blank">
                    <FormattedMessage id="cast.greg" />
                </Cast>
            </CastContainer>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="cast.title.editor" />
                </CastLabel>
                <Cast href="https://github.com/Teppei-Kanayama" target="_blank">
                    <FormattedMessage id="cast.kanayama" />
                </Cast>
            </CastContainer>
            <CastContainer>
                <CastLabel>
                    <FormattedMessage id="cast.title.production" />
                </CastLabel>
                <Cast href="https://instagram.com/akiyamasho" target="_blank">
                    <FormattedMessage id="cast.akiyama" />
                </Cast>
            </CastContainer>
        </Section>
        <Section>
            <SectionTitle>
                <FormattedMessage id="cast.title.specialThanks" />
            </SectionTitle>
            <CastContainer>
                <Cast href="https://github.com/ayanray" target="_blank">
                    <FormattedMessage id="specialThanks.ayan" />
                </Cast>
            </CastContainer>
            <CastContainer>
                <Cast href="https://github.com/Zeletochoy" target="_blank">
                    <FormattedMessage id="specialThanks.antoine" />
                </Cast>
            </CastContainer>
            <CastContainer>
                <Cast href="https://github.com/mehdi-shiba" target="_blank">
                    <FormattedMessage id="specialThanks.mehdi" />
                </Cast>
            </CastContainer>
            <CastContainer>
                <UnclickableCast>
                    <FormattedMessage id="specialThanks.kimi" />
                </UnclickableCast>
            </CastContainer>
            <CastContainer>
                <UnclickableCast>
                    <FormattedMessage id="specialThanks.murochin" />
                </UnclickableCast>
            </CastContainer>
        </Section>
    </StaffContainer>
);
export default Staff;
