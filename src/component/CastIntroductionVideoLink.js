import React from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import styled from "styled-components";
import { textHoverColour } from "./meta";

const ContainerLink = styled.a`
    font-size: 0.75em;
    color: ${textHoverColour};
    padding: 0 0.25em;
    border-radius: 3px;
    text-decoration: underline;
    display: flex;
    align-items: center;
    text-decoration: none;

    i {
        font-size: 0.75em;
    }

    &:hover:not(:disabled) {
        color: ${textHoverColour};
    }

    &:focus {
        outline: none;
    }
`;

const CastIntroductionVideoLink = ({ href }) => {
    return (
        <ContainerLink href={href} target="_blank">
            [<i className="material-icons">play_circle_outline</i>&nbsp;
            <FormattedMessage id="cast.introductionVideo" />]
        </ContainerLink>
    );
};

CastIntroductionVideoLink.propTypes = {
    href: PropTypes.string.isRequired,
};

export default CastIntroductionVideoLink;
