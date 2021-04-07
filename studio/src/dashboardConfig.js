export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "606cf940a980f712598e58c5",
                  title: "Sanity Studio",
                  name: "sanityecommerce-studio",
                  apiId: "bfc2ebd3-5c25-4227-a306-c7d4e368c893",
                },
                {
                  buildHookId: "606cf9404b46b1177adf23de",
                  title: "Blog Website",
                  name: "sanityecommerce",
                  apiId: "90b59cbd-a6e4-4add-ba09-0d67bd90be3b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/prokopious/sanityEcommerce",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanityecommerce.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
