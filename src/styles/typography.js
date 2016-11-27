import {
  fullBlack,
  darkBlack,
  lightBlack,
  minBlack,
  fullWhite,
  darkWhite,
  lightWhite,
} from './colors';
import { IS_WEB } from '../utils/platform';

class Typography {

  constructor() {
    // text colors
    this.textFullBlack = fullBlack;
    this.textDarkBlack = darkBlack;
    this.textLightBlack = lightBlack;
    this.textMinBlack = minBlack;
    this.textFullWhite = fullWhite;
    this.textDarkWhite = darkWhite;
    this.textLightWhite = lightWhite;

    // font weight
    this.fontWeightLight = IS_WEB ? 300 : '300';
    this.fontWeightNormal = IS_WEB ? 400 : '400';
    this.fontWeightMedium = IS_WEB ? 500 : '500';

    this.fontStyleButtonFontSize = 14;
  }
}

export default new Typography();
