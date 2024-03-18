module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_7DPbhUW9JrSjAV2y4ISfq589bQYx/kUmlVUkxoF",
      apiToken: "NaxBCvopTTxBqX0QCOHlbq4o",
      appFilter: "strapi-my-portfolio",
      teamFilter: "team_DH9di7mmdt7kHIixxrIWiGBs",

      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
