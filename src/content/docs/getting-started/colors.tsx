"use client";

import { schemes } from 'reaviz';
import { ColorPaletteBlocks } from 'reablocks';

export const ColorsPalette = () => Object.keys(schemes).map(name => (
  <>
    <ColorPaletteBlocks
      name={name}
      className="blocks"
      colors={schemes[name]}
      showNames={false}
    />
    <br />
  </>
))