import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Bg2Container, BgContainer, DefaultLinkBtn } from 'Styles/base';
import { paths } from 'Constants/paths';
import { Default, Mobile } from 'Components/Responsive.jsx';
import homeVideo from 'Assets/videos/poster.mp4';
import logo from 'Assets/images/logo.svg';
import {
    AttentionGrab,
    Details,
    NextBtnContainer,
    FilmTitleIconContainer,
    Logo,
    LogoMobile,
    SubFilmTitle,
    CastRowContainer,
    LabeledCast,
    CastLabel,
    Cast,
    ActionWrapper,
    MainActionLink,
    MainActionIcon,
    VideoBackdrop,
    VideoBg,
    HomeContainer,
    SubActionLink,
    SubActionIcon,
    MainActionContainer,
} from './styled';
import YouTube from 'react-youtube';

class Home extends Component {
    onReady = event => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    render() {
        return (
            <>
                <VideoBackdrop>&nbsp;</VideoBackdrop>
                <VideoBg muted autoPlay playsInline>
                    <source src={homeVideo} type="video/mp4" />
                </VideoBg>
                <HomeContainer>
                    <FilmTitleIconContainer>
                        <Default>
                            <Logo src={logo} />
                        </Default>
                        <Mobile>
                            <LogoMobile src={logo} />
                        </Mobile>
                        <SubFilmTitle>
                            <FormattedMessage id="homeSubtitle" />
                        </SubFilmTitle>
                        <br />
                        <CastRowContainer>
                            <Cast>
                                <FormattedMessage id="cast.tazaki" />
                            </Cast>
                            <Cast>
                                <FormattedMessage id="cast.toda" />
                            </Cast>
                            <Cast>
                                <FormattedMessage id="cast.suzuki" />
                            </Cast>
                            <Cast>
                                <FormattedMessage id="cast.kitahara" />
                            </Cast>
                            <Cast>
                                <FormattedMessage id="cast.asada" />
                            </Cast>
                        </CastRowContainer>
                        <CastRowContainer>
                            <LabeledCast>
                                <CastLabel>
                                    <FormattedMessage id="cast.title.production" />
                                </CastLabel>
                                <Cast>
                                    <FormattedMessage id="cast.akiyama" />
                                </Cast>
                            </LabeledCast>
                            <LabeledCast>
                                <CastLabel>
                                    <FormattedMessage id="cast.title.editor" />
                                </CastLabel>
                                <Cast>
                                    <FormattedMessage id="cast.kanayama" />
                                </Cast>
                            </LabeledCast>
                        </CastRowContainer>
                        <ActionWrapper>
                            <MainActionContainer>
                                <MainActionLink
                                    href="https://webtoons.com/en/challenge/venture/list?title_no=531594"
                                    target="_blank"
                                >
                                    <MainActionIcon className="material-icons">
                                        read_more
                                    </MainActionIcon>
                                    &nbsp;
                                    <FormattedMessage id="readEnglishManga" />
                                </MainActionLink>
                                <MainActionLink
                                    href="https://www.pixiv.net/user/34095064/series/115959"
                                    target="_blank"
                                >
                                    <MainActionIcon className="material-icons">
                                        read_more
                                    </MainActionIcon>
                                    &nbsp;
                                    <FormattedMessage id="readJapaneseManga" />
                                </MainActionLink>
                            </MainActionContainer>
                            <SubActionLink
                                href="https://www.youtube.com/playlist?list=PL_xwYIO1BOyWLEzvVuFIjBMvj7bIq0IG5"
                                target="_blank"
                            >
                                <SubActionIcon className="material-icons">
                                    play_circle_outline
                                </SubActionIcon>
                                &nbsp;
                                <FormattedMessage id="subCallToAction" />
                            </SubActionLink>
                        </ActionWrapper>
                    </FilmTitleIconContainer>
                </HomeContainer>
                <BgContainer id="PilotEpisode">
                    <AttentionGrab>
                        <FormattedMessage id="details.pilotEpisode" />
                    </AttentionGrab>
                    <YouTube
                        videoId="VIANLddo-ec"
                        onReady={this.onReady}
                        className="youtubePlayer"
                    />
                </BgContainer>
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
            </>
        );
    }
}

export default Home;
