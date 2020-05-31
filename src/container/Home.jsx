import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import YouTube from "react-youtube";

import {
    Bg2Container,
    bgColour,
    BgContainer,
    Container,
    DefaultLinkBtn,
    mainTextColour,
    subTextColour,
} from "../component/meta";
import { FormattedMessage } from "react-intl";
import { ABOUT_PATH } from "../App";
import { Default, Mobile } from "../component/responsive";

import "./home.css";

import homeVideo from "../img/poster.mp4";
import logo from "../img/logo.svg";

const AttentionGrab = styled.div`
    font-size: 3em;
    margin-bottom: 1em;
    color: ${subTextColour};
    text-align: center;
`;

const Details = styled.div`
    width: 50%;
    text-align: center;
`;

const NextBtnContainer = styled.div`
    margin-top: 2em;
`;

const FilmTitleIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    padding: 0.5em 2em;
`;

const Logo = styled.img`
    width: 60vw;
    height: auto;
`;

const LogoMobile = styled.img`
    width: 90vw;
    height: auto;
`;

const SubFilmTitle = styled.div`
    padding: 0 1em;
    font-size: 1.35em;
    color: ${subTextColour};
`;

const CastRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
`;

const LabeledCast = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0 1em;

    @media only screen and (orientation: portrait) {
        flex-direction: column;
    }
`;

const CastLabel = styled.div`
    color: ${subTextColour};
    font-size: 0.5em;
    margin-right: 0.5em;
`;

const Cast = styled.div`
    font-size: 1em;
    margin-right: 1em;
`;

const ActionWrapper = styled.div`
    margin: 2em 0;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
`;

const MainActionLink = styled.a`
    background: ${mainTextColour};
    color: ${bgColour};
    cursor: pointer;
    transition: 0.1s ease-in;
    text-decoration: none;
    margin: 0.75em;
    font-size: 1.5em;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-align: center;
    border-radius: 3px;
    padding: 0.5em 1em;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover:not(:disabled) {
        background: ${subTextColour};
    }

    &:focus {
        outline: none;
    }
`;

const MainActionIcon = styled.i`
    color: #ff0000;
    font-size: 1.5em;
`;

const SubActionLink = styled.a`
    background: none;
    color: ${mainTextColour};
    cursor: pointer;
    transition: 0.1s ease-in;
    text-decoration: none;
    margin: 0.25em;
    font-size: 1em;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-align: center;
    border: 1px solid ${mainTextColour};
    border-radius: 3px;
    padding: 0.5em 1em;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover:not(:disabled) {
        color: ${subTextColour};
        border: 1px solid ${subTextColour};
    }

    &:focus {
        outline: none;
    }
`;

const SubActionIcon = styled.i`
    color: ${mainTextColour};
    font-size: 1em;
`;

const fadeIn = keyframes`
    from {
        background: rgba(0, 0, 0, 0.4);
    }
    
    to {
        background: rgba(0, 0, 0, 0.7);
    }
`;

const VideoBackdrop = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: -1;
    background: rgba(0, 0, 0, 0.7);

    animation: ${fadeIn} 1s ease-in forwards;
`;

const VideoBg = styled.video`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -2;
`;

const HomeContainer = styled(Container)`
    background: none;
`;

class Home extends Component {
    onReady = event => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    render() {
        return (
            <Fragment>
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
                            <MainActionLink
                                href="https://www.youtube.com/watch?v=BU0Aoo4pHYg"
                                target="_blank"
                            >
                                <MainActionIcon className="material-icons">
                                    play_circle_outline
                                </MainActionIcon>
                                &nbsp;
                                <FormattedMessage id="watchLatestEpisode" />
                            </MainActionLink>
                            <SubActionLink
                                href="https://www.youtube.com/watch?v=_w_cUYvG3x0"
                                target="_blank"
                            >
                                <SubActionIcon className="material-icons">
                                    play_circle_outline
                                </SubActionIcon>
                                &nbsp;
                                <FormattedMessage id="watchPilotEpisode" />
                            </SubActionLink>
                        </ActionWrapper>
                    </FilmTitleIconContainer>
                </HomeContainer>
                <BgContainer id="PilotEpisode">
                    <AttentionGrab>
                        <FormattedMessage id="details.pilotEpisode" />
                    </AttentionGrab>
                    <YouTube
                        videoId="_w_cUYvG3x0"
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
                        <DefaultLinkBtn to={ABOUT_PATH}>
                            <FormattedMessage id="details.viewMore" />
                        </DefaultLinkBtn>
                    </NextBtnContainer>
                </BgContainer>
            </Fragment>
        );
    }
}

export default Home;
