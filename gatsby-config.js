module.exports = {
  siteMetadata: {
    title: "100days-of-gatsby",
    siteUrl
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "fb17W8uwwOUXZd1O4K-ZJ5Q0BhWjD9NoStN-VlqwNPM",
        spaceId: "22440r8nc9lr",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
