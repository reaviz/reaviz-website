import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents } from "@/mdx-components";
import { notFound } from "next/navigation";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

function isValidMdxPath(mdxPath: string[]): boolean {
  if (!mdxPath || mdxPath.length === 0) return false;

  // Reject paths that start with dots (hidden files, .well-known, etc.)
  if (mdxPath.some(segment => segment.startsWith('.'))) return false;

  // Reject common non-MDX file extensions
  const lastSegment = mdxPath[mdxPath.length - 1];
  if (lastSegment && /\.(js|css|json|xml|txt|ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/i.test(lastSegment)) {
    return false;
  }

  // Reject service worker files
  return !mdxPath.some(segment => /^(mockServiceWorker|service-worker|sw)\.js$/i.test(segment));
}

export async function generateMetadata(props: any) {
  const params = await props.params;

  if (!isValidMdxPath(params.mdxPath)) {
    return {
      title: "Not Found",
      description: "Page not found",
    };
  }

  try {
    const { metadata } = await importPage(params.mdxPath);
    return {
      title: `${metadata?.title} - Reaviz` || 'Reaviz',
      description: metadata?.description || 'Documentation for Reaviz, a modular chart component library for React.',
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "Page not found",
    };
  }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const Wrapper = useMDXComponents().wrapper;

export default async function Page(props: any) {
  const params = await props.params;

  if (!isValidMdxPath(params.mdxPath)) {
    notFound();
  }

  try {
    const result = await importPage(params.mdxPath);
    const { default: MDXContent, toc, metadata } = result;

    return (
      <Wrapper toc={toc} metadata={metadata}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    );
  } catch (error) {
    console.error("Error loading page:", params.mdxPath, error);
    notFound();
  }
}