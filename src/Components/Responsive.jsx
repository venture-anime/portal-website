import React from 'react';
import Responsive from 'react-responsive';

/* eslint-disable react/jsx-props-no-spreading */
export const Mobile = props => <Responsive {...props} maxWidth={767} />;
export const Default = props => <Responsive {...props} minWidth={768} />;
