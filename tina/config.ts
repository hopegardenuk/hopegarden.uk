import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/english/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true,
          },
          {
            type: "string",
            name: "images",
            label: "Images",
            list: true,
          },
          {
            type: "string",
            name: "captions",
            label: "Captions",
            list: true
          },
          {
            type: "string",
            name: "alttext",
            label: "AltText",
            list: true
          },
        ],
      },
      {
        name: "erthygl",
        label: "Erthyglau",
        path: "content/cymraeg/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Teitl",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Disgrifiad",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Dyddiad",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Awdur",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Testun",
            isBody: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tagiau",
            list: true,
          },
          {
            type: "string",
            name: "categories",
            label: "Categorïau",
            list: true,
          },
          {
            type: "string",
            name: "images",
            label: "Delweddau",
            list: true,
          },
          {
            type: "string",
            name: "captions",
            label: "Capsiynau",
            list: true
          },
          {
            type: "string",
            name: "alttext",
            label: "AltText",
            list: true
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: 'e65d4bae40c44fb21a54ed4b55ccff8089986ad6',
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
