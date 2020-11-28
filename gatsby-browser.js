/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/css/prism.css'
import './src/css/site.css'

import 'fontsource-roboto/400.css'
import 'fontsource-roboto-slab/300.css'

export {
  default as wrapRootElement,
} from './src/components/redux-wrapper/ReduxWrapper'
