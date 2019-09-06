/*
 * Copyright 2019, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import src from '../../assets/img/logo.png';
import HTML from '../../MapStore2/web/client/components/I18N/HTML';

class PhotomapAttribution extends React.Component {

    static propTypes = {
        src: PropTypes.string,
        attributionTextId: PropTypes.string
    };

    render() {
        const { attributionTextId } = this.props;
        return (
            <div className="photomap-map-attribution">
                <img src={this.props.src || src}/>
                { attributionTextId ? <HTML msgId={attributionTextId}/> : null }
            </div>
        );
    }
}

/**
 * Attribution plugin
 * @memberof plugins
 * @class PhotomapAttribution
 * @static
 * @prop {string} cfg.attributionTextId contain attribution text Id
 */
export const PhotomapAttributionPlugin = assign(PhotomapAttribution, {
    MapFooter: {
        name: 'photomap-attribution',
        position: 0,
        tool: true,
        priority: 1
    }
});

export const reducers = {};
