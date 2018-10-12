/**
 * direct JavaScript Toolbox
 * All-in-one toolbox to provide more reusable JavaScript features
 *
 * (C) direct Netware Group - All rights reserved
 * https://www.direct-netware.de/redirect?djt;xhtml5;riot_tag
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 *
 * https://www.direct-netware.de/redirect?licenses;mpl2
 *
 * @license Mozilla Public License, v. 2.0
 */

import CommonJs from 'rollup-plugin-commonjs';
import Minify from 'uglify-es';
import Resolve from 'rollup-plugin-node-resolve';
import TypeScript from 'rollup-plugin-typescript2';
import { uglify as Uglify } from 'rollup-plugin-uglify';

export default {
    input: 'src/module.ts',

    output: [
        {
            file: 'dist/djt-xhtml5-riot-tag.js',
            format: 'amd',
            amd: { id: 'djt-xhtml5-riot-tag' },
            interop: false,
            sourcemap: true
        }
    ],

    context: 'this',

    plugins: [
        Resolve({
            browser: true,
            main: true,
            jsnext: false,
            module: false,
            extensions: [ '.js', '.json', '.ts' ],
            moduleOnly: true,
            preferBuiltins: true
        }),

        TypeScript({ tsconfig: 'tsconfig.browser.json' }),

        CommonJs({
            ignore: [ 'require' ],
            namedExports: {
                'riot/riot.js': [ 'mount', 'tag', 'Tag', 'util' ],
                'tslib': [ '__awaiter', '__extends', '__generator' ]
            }
        }),

        Uglify({ }, Minify.minify)
    ]
};
