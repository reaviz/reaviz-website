import { useMDXComponents as getDocsMDXComponents } from 'reablocks-docs-theme';

const docsComponents = getDocsMDXComponents();

export const useMDXComponents: any = (components?: any) => ({
  ...docsComponents,
  ...components,
});
