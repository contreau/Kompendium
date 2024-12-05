import adapter from "@sveltejs/adapter-vercel";

export default {
  kit: {
    prerender: {
      handleHttpError: "warn",
    },
    adapter: adapter(),
  },
};
