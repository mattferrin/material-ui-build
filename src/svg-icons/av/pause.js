import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let AvPause = (props) => (
  <SvgIcon {...props}>
    <Path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </SvgIcon>
);
AvPause = pure(AvPause);
AvPause.displayName = 'AvPause';
AvPause.muiName = 'SvgIcon';

export default AvPause;
