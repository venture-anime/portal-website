import React from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { ContainerLink } from "./styled";

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
