import React from 'react';
import {
  TypographyBlocks,
  ColorBlocks,
  SpacingBlocks,
  BorderBlocks,
  IconBlocks,
  ShadowBlocks,
  ComponentBlocks
} from 'reablocks';
import favoriteIcon from 'reablocks';
import TWConfig from 'reablocks';
import { useTheme } from 'reablocks';
import { extractTheme } from 'reablocks';

export default {
  title: 'Components/Theme',
  decorators: [
    Story => (
      <div style={{ width: '95vw' }}>
        <Story />
      </div>
    )
  ]
};

const {
  colors,
  borderRadius,
  boxShadow,
  spacing,
  fontFamily,
  fontSize,
  fontWeight
} = extractTheme(TWConfig);

export const Colors = () => <ColorBlocks colors={colors} />;

export const Typography = () => (
  <TypographyBlocks
    families={fontFamily}
    sizes={fontSize}
    weights={fontWeight}
  />
);

export const Spacings = () => <SpacingBlocks spacings={spacing} />;

export const Borders = () => <BorderBlocks borders={borderRadius} />;

export const Shadows = () => <ShadowBlocks shadows={boxShadow} />;

export const Components = () => {
  const { theme } = useTheme();
  return <ComponentBlocks components={theme.components} />;
};

export const Icons = () => (
  <>
    <h2>Icon Block Helper ( icons not included )</h2>
    <IconBlocks
      icons={[
        {
          name: 'favorite',
          src: favoriteIcon
        },
        {
          name: 'another favorite',
          src: favoriteIcon
        }
      ]}
    />
  </>
);
