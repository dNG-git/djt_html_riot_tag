/**
 * direct JavaScript Toolbox
 * All-in-one toolbox to provide more reusable JavaScript features
 *
 * (C) direct Netware Group - All rights reserved
 * https://www.direct-netware.de/redirect?djt;html;component
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 *
 * https://www.direct-netware.de/redirect?licenses;mpl2
 *
 * @license Mozilla Public License, v. 2.0
 */

import { DynamicHtmlContentProps, DynamicHtmlContentState } from './dynamic-html-content-interfaces';

import { Component } from './component';
import { createElement } from 'inferno-create-element';

/**
 * Dynamic HTML content can be used to set the inner HTML content dynamically.
 *
 * @author    direct Netware Group
 * @copyright (C) direct Netware Group - All rights reserved
 * @package   djt-html-component
 * @since     v2.0.0
 * @license   https://www.direct-netware.de/redirect?licenses;mpl2
 *            Mozilla Public License, v. 2.0
 */
export class DynamicHtmlContent extends Component<DynamicHtmlContentProps, DynamicHtmlContentState> {
    /**
     * reactjs.org: It is invoked right before the most recently rendered output is
     * committed to e.g. the DOM.

     * @param oldProps Old props
     * @param oldState Old state
     *
     * @since v2.0.0
     */
    public getSnapshotBeforeUpdate(_: DynamicHtmlContentProps, oldState: DynamicHtmlContentState) {
        if (this.state.content !== oldState.content) {
            this.fireDomElementEvent('x-dom-changed');
        }
    }

    /**
     * Returns the React component content to be rendered.

     * @return React component content to be rendered
     * @since  v2.0.0
     */
    public render() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        const TagName = this.instanceClass.attachingTagName;
        return <TagName dangerouslySetInnerHTML={{ __html: this.state.content }} />;
    }

    /**
     * Returns the static component name.
     *
     * @return Static component name
     * @since  v2.0.0
     */
    public static get componentName() {
        return 'djt-dynamic-html-content';
    }
}