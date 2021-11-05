import VueGtag from "vue-gtag";

export default async ({ app,router }) => {
  app.use(VueGtag, {
    config: { id: process.env.GOOGLE_ANALYTICS_ID },
  },router);
};