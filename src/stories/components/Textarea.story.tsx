import React from 'react';
import { Stack } from 'reablocks';
import { Textarea } from 'reablocks';

export default {
  title: 'Components/Form/Textarea',
  component: Textarea
};

export const AutoFocus = () => <Textarea autoFocus />;

export const Basic = () => <Textarea />;

export const DefaultValue = () => <Textarea defaultValue="Text" />;

export const Disabled = () => <Textarea disabled value="Text" />;

export const Error = () => <Textarea error value="Text" />;

export const FullWidth = () => (
  <div style={{ width: '600px' }}>
    <Textarea fullWidth />
  </div>
);

export const Placeholder = () => <Textarea placeholder="Type your text here" />;

export const Sizes = () => (
  <Stack direction="column">
    <Textarea value="Small" size="small" />
    <Textarea value="Medium" size="medium" />
    <Textarea value="Large" size="large" />
  </Stack>
);
