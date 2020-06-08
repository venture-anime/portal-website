import React from "react";
import styled from "styled-components";
import { FormattedMessage, injectIntl } from "react-intl";

import { mainTextColour, subTextColour } from "./meta";

import facebook from "../assets/images/sns/facebook.png";
import instagram from "../assets/images/sns/instagram.png";
import twitter from "../assets/images/sns/twitter.png";
import reddit from "../assets/images/sns/reddit.png";

const FOOTER_HEIGHT_PX = 80;
export const footerBgColour = "#130914";

const FooterContainer = styled.div`
    height: ${FOOTER_HEIGHT_PX}px;
    background: ${footerBgColour};
    width: 100vw;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 767px) {
        height: 50px;
    }
`;

const FooterContent = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    height: 100%;
    align-items: center;
`;

const SnsBtnContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SnsBtn = styled.a`
    text-decoration: none;
    cursor: pointer;
    margin: 0 0.5em;
`;

const SnsBtnImg = styled.img`
    width: 20px;
    height: 20px;
`;

const CopyrightLink = styled.a`
    font-size: 1em;
    text-decoration: none;
    color: ${mainTextColour};
    cursor: pointer;

    &:hover:not(:disabled) {
        color: ${subTextColour};
    }

    &:focus {
        outline: none;
    }
`;

const Footer = ({ intl }) => (
    <FooterContainer>
        <FooterContent>
            <CopyrightLink href="https://github.com/akiyamasho" target="_blank">
                <FormattedMessage id="footer.copyright" />
            </CopyrightLink>
            <SnsBtnContainer>
                <SnsBtn
                    href={intl.formatMessage({ id: "footer.facebookLink" })}
                    target="_blank"
                >
                    <SnsBtnImg src={facebook} />
                </SnsBtn>
                <SnsBtn
                    href={intl.formatMessage({ id: "footer.twitterLink" })}
                    target="_blank"
                >
                    <SnsBtnImg src={twitter} />
                </SnsBtn>
                <SnsBtn
                    href={intl.formatMessage({ id: "footer.instagramLink" })}
                    target="_blank"
                >
                    <SnsBtnImg src={instagram} />
                </SnsBtn>
                <SnsBtn
                    href="https://reddit.com/r/ventureanime"
                    target="_blank"
                >
                    <SnsBtnImg src={reddit} />
                </SnsBtn>
            </SnsBtnContainer>
        </FooterContent>
    </FooterContainer>
);

export default injectIntl(Footer);
