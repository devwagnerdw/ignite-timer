import { defaultTheme } from '../components/styles/themes/default'
import 'styled-components'

type themeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends themeType {}
}
