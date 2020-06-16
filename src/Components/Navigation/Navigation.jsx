import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { TextLinkBtn } from 'Styles/base';
import { paths } from 'Constants/paths';
import { dispatchToggleLanguage } from '../../action/locale';
import { Default, Mobile } from '../Responsive';
import {
    Container,
    FilmTitleIconContainer,
    MainFilmTitle,
    SubFilmTitle,
    BtnContainer,
    MobileMenuBtn,
    ToggleBtn,
    HamburguerContainer,
    MobileContainer,
    Padding,
} from './styled';

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
                            to={paths.index}
                            onClick={toggleMobileMenuVisibility}
                        >
                            <FormattedMessage id="nav.home" />
                        </TextLinkBtn>
                        <TextLinkBtn
                            to={paths.about}
                            onClick={toggleMobileMenuVisibility}
                        >
                            <FormattedMessage id="nav.about" />
                        </TextLinkBtn>
                        <TextLinkBtn
                            to={paths.credits}
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
                        <TextLinkBtn to={paths.index}>
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
                    <TextLinkBtn to={paths.about}>
                        <FormattedMessage id="nav.about" />
                    </TextLinkBtn>
                    <TextLinkBtn to={paths.credits}>
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
        <>
            {mobileView}
            {defaultView}
        </>
    );
};

Navigation.propTypes = {
    dispatchToggleLanguage: PropTypes.func,
};

const mapDispatchToProps = {
    dispatchToggleLanguage,
};

export default connect(
    null,
    mapDispatchToProps
)(Navigation);
