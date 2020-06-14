import React, { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { Bg2Container, BgContainer, DefaultLinkBtn } from "Styles/base";
import { ABOUT_PATH } from "Constants/routes";
import { Default, Mobile } from "Components/Responsive";
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
} from "./styled";
import homeVideo from "Assets/videos/poster.mp4";
import logo from "Assets/images/logo.svg";

const Home = () => (
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
                </ActionWrapper>
            </FilmTitleIconContainer>
        </HomeContainer>
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

export default Home;
