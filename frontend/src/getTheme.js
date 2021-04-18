import { Theme1, Theme2, Theme3 } from './themes/index';
import Themes from './constants/theme';

const getTheme = themeName => {
  switch (themeName) {
    case Themes.Theme2:
      return Theme2;
    case Themes.Theme3:
      return Theme3;
    default:
      return Theme1;
  }
};

export default getTheme;
