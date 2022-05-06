import React from 'react';
import IconFiles from './Icon';
import VectorImage from 'react-native-vector-image';

const Icon = (props) => {
  const { name: iconName, color, size, style, variant } = props;
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
};

export default Icon;

Icon.defaultProps = {
  size: 24,
  style: {},
  color: '#333333',
  name: 'arrow-left',
  variant: 'regular',
};
