import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { paths } from 'Constants/paths';
import { Default, Mobile } from 'Components/Responsive.jsx';
import homeVideo from 'Assets/videos/poster.mp4';
import logo from 'Assets/images/logo.svg';
import {
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
} from './styled';

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
                            <MainActionLink to={paths.episodes}>
                                <MainActionIcon className="material-icons">
                                    play_circle_outline
                                </MainActionIcon>
                                &nbsp;
                                <FormattedMessage id="watchEpisodes" />
                            </MainActionLink>
                            <SubActionLink to={paths.blog}>
                                <SubActionIcon className="material-icons">
                                    history_edu
                                </SubActionIcon>
                                &nbsp;
                                <FormattedMessage id="seeUpdates" />
                            </SubActionLink>
                        </ActionWrapper>
                    </FilmTitleIconContainer>
                </HomeContainer>
            </>
        );
    }
}

export default Home;
