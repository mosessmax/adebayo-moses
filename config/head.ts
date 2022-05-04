import { NuxtOptionsHead } from "@nuxt/types/config/head"

/* Define constants */
const image = "https://colors.dopely.top/static/dc.png"
const description =
  "Impeccable and Quietly Confident Software Developer from the trenches, trying to improve his JavaScript skills!"

const Head: NuxtOptionsHead = {
  title: "Moses Adebayo",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: description,
    },
    /* Twitter */
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@mosessmax",
    },
    {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "@mosessmax",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "mosessmax.com",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: image,
    },
    /* Open-Graph */
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "Moses Adebayo",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      name: "og:image",
      content: image,
    },
    /* Others */
    {
      hid: "theme-color",
      name: "theme-color",
      content: "#171717",
    },
  ].map((i) => {
    // @ts-ignore-next-line
    if (i.name && !i.property) i.property = i.name
    return i
  }),
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "https://eggsy.xyz/assets/icons/icon.ico",
    },
    {
      rel: "search",
      type: "application/opensearchdescription+xml",
      title: "Moses's Blog",
      href: "https://eggsy.xyz/opensearch.xml",
    },
  ],
}

export default Head
