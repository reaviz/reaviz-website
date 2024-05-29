import { Text } from 'reablocks';
import React from 'react';

export default {
  title: 'Components/Typography/Text',
  component: Text
};

export const Simple = () => <Text>Hello world</Text>;

export const Colors = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
    <Text>Default</Text>
    <Text color="primary">Primary</Text>
    <Text color="secondary">Secondary</Text>
    <Text color="error">Error</Text>
    <Text color="success">Success</Text>
    <Text color="warning">Warning</Text>
    <Text color="info">Info</Text>
  </div>
);

export const Monospace = () => <Text variant="mono">Hello world</Text>;

export const Bold = () => <Text fontStyle="bold">Bold</Text>;

export const ExtraBold = () => <Text fontStyle="extraBold">Extra Bold</Text>;

export const Thin = () => <Text fontStyle="thin">Thin</Text>;

export const Italic = () => <Text fontStyle="italic">Italic</Text>;
