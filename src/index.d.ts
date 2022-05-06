import * as React from 'react';
import { ViewProps } from 'react-native';
import { IconName, IconVariant } from './value';

export const IconName: React.ValidationMap<IconName>;
export interface IconProps extends ViewProps {
  name: IconName;
  size?: number;
  style?: Object;
  color?: String;
  variant?: IconVariant;
}

declare const Icon: React.FunctionComponent<IconProps>;

export default Icon;
