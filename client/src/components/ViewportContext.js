import React, { Component } from 'react';

const ViewportContext = React.createContext(
    {
        scrollY: 0
    }
);

export default ViewportContext;