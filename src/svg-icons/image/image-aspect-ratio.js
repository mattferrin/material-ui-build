import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let ImageImageAspectRatio = (props) => (
  <SvgIcon {...props}>
    <path d="M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
  </SvgIcon>
);
ImageImageAspectRatio = pure(ImageImageAspectRatio);
ImageImageAspectRatio.displayName = 'ImageImageAspectRatio';
ImageImageAspectRatio.muiName = 'SvgIcon';

export default ImageImageAspectRatio;
