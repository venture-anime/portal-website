import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { BgContainer, Header } from '../../Styles/base';
import { EpisodeListContainer } from './styled';
import episodes from './episodes';
import EpisodeItem from './EpisodeItem';

const Episodes = () => {
    const [overlayLink, setOverlayLink] = useState(null);
    const showEpisodeOverlay = episodeLink => {
        setOverlayLink(episodeLink);
    };

    return (
        <BgContainer>
            <Header>
                <FormattedMessage id="episodes.title" />
            </Header>
            <EpisodeListContainer>
                {episodes.map(
                    ({
                        minutes,
                        seconds,
                        thumbnailSrc,
                        titleLabelId,
                        descriptionLabelId,
                        episodeLink,
                    }) => (
                        <EpisodeItem
                            descriptionLabelId={descriptionLabelId}
                            minutes={minutes}
                            seconds={seconds}
                            titleLabelId={titleLabelId}
                            thumbnailSrc={thumbnailSrc}
                            episodeLink={episodeLink}
                            showEpisodeOverlay={showEpisodeOverlay}
                        />
                    )
                )}
            </EpisodeListContainer>
        </BgContainer>
    );
};

export default Episodes;
