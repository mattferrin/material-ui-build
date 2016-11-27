import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let EditorFormatUnderlined = (props) => (
  <SvgIcon {...props}>
    <Path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/>
  </SvgIcon>
);
EditorFormatUnderlined = pure(EditorFormatUnderlined);
EditorFormatUnderlined.displayName = 'EditorFormatUnderlined';
EditorFormatUnderlined.muiName = 'SvgIcon';

export default EditorFormatUnderlined;
