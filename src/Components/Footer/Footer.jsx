import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import facebook from "Assets/images/sns/facebook.png";
import instagram from "Assets/images/sns/instagram.png";
import twitter from "Assets/images/sns/twitter.png";
import reddit from "Assets/images/sns/reddit.png";

import {
    FooterContainer,
    FooterContent,
    SnsBtnContainer,
    SnsBtn,
    SnsBtnImg,
    CopyrightLink,
} from "./styled";

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
