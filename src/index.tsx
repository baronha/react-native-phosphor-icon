import React, { PureComponent, ReactNode } from 'react';
import type { ViewProps } from 'react-native';
import IconFiles from './Icon';
import VectorImage from 'react-native-vector-image';
import type { IconName as Name, IconVariant } from './value';

export declare const IconName: React.ValidationMap<Name>;

export interface IconProps extends ViewProps {
  name: Name;
  size?: number;
  style?: Object;
  color?: String;
  variant?: IconVariant;
}

class Icon extends PureComponent<IconProps> {
  static displayName = 'Icon';

  static defaultProps: {
    size: 24;
    style: {};
    color: '#333333';
    name: 'arrow-left';
    variant: 'regular';
  };

  constructor(props: IconProps) {
    super(props);
    this.state = {};
  }

  public render(): ReactNode {
    const { name: iconName, color, size, style, variant } = this.props;
    const source =
      IconFiles?.[variant]?.[`${iconName}-${variant}`] ??
      IconFiles.regular?.[iconName];

    return (
      <VectorImage
        source={source}
        width={size}
        height={size}
        style={[style, { tintColor: color }]}
      />
    );
  }
}

export default Icon;
