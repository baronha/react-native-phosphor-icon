import * as React from 'react';
import { ViewProps } from 'react-native';
import type { IconName as Name, IconVariant as Variant } from './value';

export declare const IconName: React.ValidationMap<Name>;
export declare const IconVariant: React.ValidationMap<Variant>;
export interface IconProps extends ViewProps {
  name: Name;
  size?: number;
  style?: Object;
  color?: String;
  variant?: Variant;
}

declare const Icon: React.FunctionComponent<IconProps>;

export default Icon;
