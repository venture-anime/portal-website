import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
    Container,
    DetailsContainer,
    ThumbnailImg,
    Title,
    Duration,
    Details,
    TitleContainer,
} from './styled';

const EpisodeItem = ({
    minutes,
    seconds,
    thumbnailSrc,
    titleLabelId,
    descriptionLabelId,
    episodeLink,
    showEpisodeOverlay,
}) => (
    <Container>
        <ThumbnailImg
            src={thumbnailSrc}
            onClick={showEpisodeOverlay(episodeLink)}
        />
        <DetailsContainer>
            <TitleContainer>
                <Title>
                    <FormattedMessage id={titleLabelId} />
                </Title>
                <Duration>{minutes ? `${minutes}:${seconds}` : '-'}</Duration>
            </TitleContainer>
            <Details>
                <FormattedMessage id={descriptionLabelId} />
            </Details>
        </DetailsContainer>
    </Container>
);

EpisodeItem.propTypes = {
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    thumbnailSrc: PropTypes.string.isRequired,
    titleLabelId: PropTypes.string.isRequired,
    descriptionLabelId: PropTypes.string.isRequired,
    episodeLink: PropTypes.string,
    showEpisodeOverlay: PropTypes.func.isRequired,
};

export default EpisodeItem;
