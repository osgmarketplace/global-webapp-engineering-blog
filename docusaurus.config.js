/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "OBFnS Engineering Blog",
    tagline: "Articles and References for the OBFnS Engineering team",
    url: "https://obfns.github.io",
    baseUrl: "/global-webapp-engineering-blog/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "obfns", // Usually your GitHub org/user name.
    projectName: "global-webapp-engineering-blog", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "OBFnS Engineering Blog",
            logo: {
                alt: "OBFnS Engineering",
                src: "img/logo.svg",
            },
            items: [
                {
                    label: "Help",
                    href: "/tags/help",
                },
                {
                    label: "React",
                    href: "/tags/react",
                },
                {
                    label: "All Tags",
                    href: "/tags",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} Resonance`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                blog: {
                    path: "./blog",
                    routeBasePath: "/",
                    blogTitle: "OBFnS Engineering Blog",
                    blogDescription:
                        "Articles and References for the OBFnS Engineering team",
                    editUrl:
                        "https://github.com/obfns/global-webapp-engineering-blog/tree/main",
                    blogSidebarCount: 10,
                },
                docs: {
                    path: "./docs",
                },
                pages: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    plugins: [
        [
            "@cmfcmf/docusaurus-search-local",
            {
                blogRouteBasePath: "/",
                indexBlog: true,
                indexDocs: false,
                indexPages: false,
            },
        ],
    ],
};
