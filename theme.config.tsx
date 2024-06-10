import { Pre, Code } from "nextra/components";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "reaviz-docs-theme";
import Link from "next/link";

// eslint-disable-next-line import/no-anonymous-default-export
const config: DocsThemeConfig = {
  head: (
    <>
      <meta property="og:image" content="https://reaviz.dev/preview.png" />
      <meta
        property="og:title"
        content="reaviz - Open Source ReactJS Data Visualization Library"
      />
      <meta
        property="og:description"
        content="Beautifully designed, highly customizable, Open Source React Data Visualization Library"
      />
      <meta
        name="twitter:title"
        content="reaviz - Open Source ReactJS Component Library"
      />
      <meta
        name="twitter:description"
        content="Beautifully designed, highly customizable, Open Source React Data Visualization Library"
      />
    </>
  ),
  logo: (
    <svg
      className="h-fit w-[150px] text-[var(--foreground-rgb)]"
      width="815"
      height="160"
      viewBox="0 0 815 160"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.7437 123.134V100.571L24.7347 103.52C25.0296 103.594 25.3246 103.631 25.6195 103.631C26.3937 103.631 27.1311 103.336 27.684 102.82L40.6612 90.3959L57.1407 100.94C58.1361 101.603 59.4633 101.566 60.4219 100.866L73.7307 91.4649L87.9243 102.967C89.1778 104 91.058 103.778 92.0901 102.525L106.173 85.087L120.072 94.3038C121.436 95.1886 123.242 94.8199 124.164 93.4928C124.201 93.4559 124.201 93.419 124.238 93.3822L137.805 71.1148L150.819 75.8337V123.134L14.7437 123.134ZM14.7437 60.129L25.1769 66.3226C26.2092 66.9493 27.5364 66.8756 28.495 66.1382L39.4075 57.8433L48.4399 73.3643C49.251 74.7652 51.0575 75.2445 52.4952 74.4334C52.6795 74.3229 52.8639 74.1754 53.0113 74.0279L68.9745 59.0968L86.8549 66.4702C88.0347 66.9495 89.3988 66.6177 90.2465 65.6591L104.735 48.4424L119.445 57.438C120.699 58.2123 122.321 57.9542 123.242 56.8113L137.363 40L150.856 38.1567V69.4935L137.584 64.664C136.256 64.1848 134.782 64.7009 134.044 65.9175L120.809 87.6321L107.242 78.6364C105.989 77.7885 104.256 78.0466 103.334 79.2263L89.4355 96.4801L75.7948 85.4203C74.7625 84.5723 73.3247 84.5355 72.2188 85.3097L58.7256 94.8581L41.9882 84.1299C40.8453 83.3926 39.3338 83.5401 38.3752 84.4986L24.882 97.3281L14.8542 94.3787V60.1293L14.7437 60.129ZM27.684 20.1291L43.0944 33.5855C44.0161 34.3598 45.3064 34.5441 46.3756 33.9911L57.8413 28.2768L73.6939 43.0973C74.8737 44.2033 76.7539 44.1296 77.8598 42.9498L77.9704 42.8392L91.6479 26.544L106.358 30.157C107.538 30.452 108.791 29.9727 109.492 28.9773L121.916 10.8758L133.16 16.9956C134.376 17.6592 135.888 17.3643 136.81 16.3319L150.782 0V32.2584L135.372 34.3598C134.634 34.4704 133.971 34.8391 133.528 35.3921L120.33 51.1342L105.62 42.1385C104.367 41.3643 102.744 41.6224 101.823 42.7652L87.0759 60.2769L69.4537 52.9774C68.3846 52.535 67.168 52.7562 66.32 53.5672L51.6838 67.2448L42.8726 52.0188C42.0615 50.6178 40.255 50.1386 38.854 50.9496C38.7434 51.0233 38.6328 51.0971 38.5591 51.1708L26.5406 60.277L14.7433 53.2724V35.6502L27.684 20.1291ZM160 137.88H4.57131L0 133.383C0.000771972 130.787 0 12.1662 0 12.1662L8.84803 19.9689C8.84803 19.9689 8.81116 124.352 8.84803 126.011L11.9448 129.034H152.144L160 137.88Z" fill="url(#paint0_linear_1_121)"/>
      <path d="M267.969 100.44L254.02 76.6802C261.309 73.3502 266.172 66.1502 266.172 58.3202C266.172 52.5602 264.102 47.6102 260.051 43.5602C256 39.5102 251.051 37.4402 245.199 37.4402H220V49.0502H245.199C249.879 49.0502 253.75 53.1902 253.75 58.3202C253.75 63.4502 249.879 67.6802 245.199 67.6802L220 67.6902V100.44H232.422V78.5702H241.871L254.559 100.44H267.969Z" />
      <path d="M285.969 74.4402L322.238 74.4302V62.7302L285.969 62.7302V74.4402Z" />
      <path d="M285.969 37.4402V49.3202H324.488V37.4402H285.969Z" />
      <path d="M299.039 88.5902V88.5602H324.938V100.44H285.969V88.5902H299.039Z" />
      <path d="M389.016 100.44H402.516L380.379 37.4402H364.988L342.938 100.44H356.25L372.371 51.4402H372.863L386.523 92.9526L389.016 100.44Z" />
      <path d="M471.094 37.4402H457.594L455.102 44.9277L441.441 86.4402H440.949L424.828 37.4402H411.516L433.566 100.44H448.957L471.094 37.4402Z" />
      <path d="M491.094 37.4402H503.512V100.44H491.094V37.4402Z" />
      <path d="M542.352 88.5602L568.543 47.2502V37.4402H527.141V49.3202H552.703L526.512 90.5402V100.44H569.082V88.5602H542.352Z" />
      <defs>
      <linearGradient id="paint0_linear_1_121" x1="24.8723" y1="120.722" x2="126.082" y2="-32.0457" gradientUnits="userSpaceOnUse">
        <stop stopColor="#105EFF"/>
        <stop offset="0.413357" stopColor="#009BFF"/>
        <stop offset="0.735652" stopColor="#105EFF"/>
        <stop offset="1" stopColor="#090E43"/>
      </linearGradient>
      </defs>
    </svg>
  ),
  components: {
    // Handle storybook overrides
    code: (props: any) => (
      <Code {...props} className={`${props.className} rb-code`} />
    ),
    // Handle storybook overrides
    pre: (props: any) => (
      <Pre {...props} className={`${props.className} prismjs`} />
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 3,
  },
  footer: {
    component: (
      <footer
        className="block self-center pb-5 pt-5 text-center"
        style={{ borderTop: "solid 1px hsla(203, 50%, 30%, 0.15)" }}
      >
        <span>
          Made with ❤️ by{" "}
          <Link
            className="text-secondary underline"
            href="https://goodcode.us?utm_source=reaviz"
          >
            Good Code
          </Link>
        </span>
      </footer>
    ),
  },
  feedback: {
    content: null,
  },
  project: {
    link: "https://github.com/reaviz/reaviz",
  },
  docsRepositoryBase: "https://github.com/reaviz/reaviz-website/tree/master",
  useNextSeoProps: () => {
    const { asPath } = useRouter();

    if (asPath !== "/") {
      // The index page is getting wrong titles
      if (asPath === "/docs" || asPath === "/blocks") {
        return {
          titleTemplate:
            "reaviz \u2013 Open Source ReactJS Component Library",
          description:
            "Beautifully designed, highly customizable, Open Source React Data Visualization Library"
        };
      }

      return {
        titleTemplate: "%s \u2013 reaviz",
        description:
          "Beautifully designed, highly customizable, Open Source React Data Visualization Library",
      };
    } else {
      return {
        titleTemplate: "reaviz \u2013 Open Source ReactJS Component Library",
        description:
          "Beautifully designed, highly customizable, Open Source React Data Visualization Library",
      };
    }
  },
};

export default config;
