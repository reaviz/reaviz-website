import { FC } from "react";
import { useTheme } from 'reablocks-docs-theme';
import { Canvas, Meta } from '@storybook/blocks';

export type BlockCanvasProps = {
  lightStory?: any;
  darkStory?: any;
  lightMeta?: any;
  darkMeta?: any;
  storybook?: string;
};

export const BlockCanvas: FC<BlockCanvasProps> = ({
  storybook,
  darkMeta,
  darkStory,
  lightMeta,
  lightStory,
  ...props
}) => {
  const { setTheme, ...rest } = useTheme();
  const story = rest.theme === 'dark' ? darkStory : lightStory;
  const meta = rest.theme === 'dark' ? darkMeta : lightMeta;

  return (
    <>
      <Meta of={meta} />
      <Canvas
        of={story}
        {...props}
        additionalActions={[
          {
            title: 'Toggle Theme',
            onClick: () => {
              setTheme(rest.theme === 'dark' ? 'light' : 'dark');
              rest.theme = rest.theme === 'dark' ? 'light' : 'dark';
            }
          },
          ...(
            storybook ? [{
              title: 'View Storybook',
              onClick: () => {
                window.open(`https://reaviz.io/?path=/story/${storybook}`, '_blank');
              }
            }] : []
          )
        ]}
      />
    </>
  );
};
