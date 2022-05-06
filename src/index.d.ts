import * as React from 'react';
import { ViewProps } from 'react-native';
import type { IconName as Name, IconVariant } from './value';

export declare const IconName: React.ValidationMap<Name>;
export interface IconProps extends ViewProps {
  name: Name;
  size?: number;
  style?: Object;
  color?: String;
  variant?: IconVariant;
}

declare const Icon: React.FunctionComponent<IconProps>;

export default Icon;
