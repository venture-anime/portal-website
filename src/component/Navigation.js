import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

import { NAV_HEIGHT_PX, subTextColour, TextBtn, TextLinkBtn } from "./meta";
import { dispatchToggleLanguage } from "../action/locale";
import { Default, Mobile } from "./responsive";
import { ABOUT_PATH, CAST_PATH, MAIN_PATH } from "../App";

const Container = styled.div`
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: ${NAV_HEIGHT_PX}px;
    display: flex;
    justify-content: space-around;
    left: 0;
    top: 0;
    align-items: center;
    background: rgba(19, 9, 20, 0.8);
`;

const FilmTitleIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    padding: 0.5em 2em;
    cursor: pointer;
`;

const MainFilmTitle = styled.div`
    font-size: 1.25em;
`;

const SubFilmTitle = styled.div`
    font-size: 0.25em;
`;

const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MobileMenuBtn = styled.div`
    cursor: pointer;
    font-size: 3em;
    margin-right: 1em;
`;

const ToggleBtn = styled(TextBtn)`
    color: ${subTextColour};
`;

const HamburguerContainer = styled(Container)`
    justify-content: flex-end;
    height: 50px;
`;

const MobileContainer = styled(Container)`
    justify-content: flex-end;
    margin-right: 2em;
    height: 50px;
`;

const Padding = styled.div`
    margin-right: 1em;
`;

const Navigation = ({ dispatchToggleLanguage: toggleLanguage }) => {
    const [isMobileNavVisible, setMobileNavVisible] = useState(false);

    const toggleMobileMenuVisibility = () => {
        setMobileNavVisible(!isMobileNavVisible);
    };

    const mobileView = (
        <Mobile>
            {!isMobileNavVisible && (
                <HamburguerContainer>
                    <MobileMenuBtn onClick={toggleMobileMenuVisibility}>
                        <i className="material-icons">menu</i>
                    </MobileMenuBtn>
                </HamburguerContainer>
            )}
            {isMobileNavVisible && (
                <MobileContainer>
                    <BtnContainer>
                        <TextLinkBtn
                            to={MAIN_PATH}
                            onClick={toggleMobileMenuVisibility}
                        >
                            <FormattedMessage id="nav.home" />
                        </TextLinkBtn>
                        <TextLinkBtn
                            to={ABOUT_PATH}
                            onClick={toggleMobileMenuVisibility}
                        >
                            <FormattedMessage id="nav.about" />
                        </TextLinkBtn>
                        <TextLinkBtn
                            to={CAST_PATH}
                            onClick={toggleMobileMenuVisibility}
                        >
                            <FormattedMessage id="nav.characters" />
                        </TextLinkBtn>
                        <ToggleBtn
                            onClick={() => {
                                toggleLanguage();
                                toggleMobileMenuVisibility();
                            }}
                        >
                            <FormattedMessage id="nav.changeLanguage" />
                        </ToggleBtn>
                        <ToggleBtn onClick={toggleMobileMenuVisibility}>
                            <i className="material-icons">close</i>
                        </ToggleBtn>
                        <Padding>&nbsp;</Padding>
                    </BtnContainer>
                </MobileContainer>
            )}
        </Mobile>
    );

    const defaultView = (
        <Default>
            <Container>
                <BtnContainer>
                    <FilmTitleIconContainer>
                        <TextLinkBtn to={MAIN_PATH}>
                            <MainFilmTitle>
                                <FormattedMessage id="title" />
                            </MainFilmTitle>
                            <SubFilmTitle>
                                <FormattedMessage id="subtitle" />
                            </SubFilmTitle>
                        </TextLinkBtn>
                    </FilmTitleIconContainer>
                </BtnContainer>

                <BtnContainer>
                    <TextLinkBtn to={ABOUT_PATH}>
                        <FormattedMessage id="nav.about" />
                    </TextLinkBtn>
                    <TextLinkBtn to={CAST_PATH}>
                        <FormattedMessage id="nav.characters" />
                    </TextLinkBtn>
                    <ToggleBtn onClick={toggleLanguage}>
                        <FormattedMessage id="nav.changeLanguage" />
                    </ToggleBtn>
                </BtnContainer>
            </Container>
        </Default>
    );

    return (
        <Fragment>
            {mobileView}
            {defaultView}
        </Fragment>
    );
};

const mapDispatchToProps = {
    dispatchToggleLanguage,
};

export default connect(
    null,
    mapDispatchToProps
)(Navigation);
