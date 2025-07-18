"use client";

import { StoryRenderer } from "@/components/ui/story-renderer";
import { FC } from "react";
import { useTheme } from 'reablocks-docs-theme';

export type BlockCanvasProps = {
  lightStoryPath: string;
  lightStoryName: string;
  darkStoryPath: string;
  darkStoryName: string;
  key: string;
};

export const BlockRenderer: FC<BlockCanvasProps> = ({
  darkStoryPath,
  lightStoryPath,
  lightStoryName,
  darkStoryName,
  key
}) => {
  const { theme } = useTheme();
  let path = theme === 'light' ? lightStoryPath : darkStoryPath;
  let name = theme === 'light' ? lightStoryName : darkStoryName;

  return (
    <>
      <StoryRenderer path={path} name={name} storybookKey={key}/>
    </>
  );
};
