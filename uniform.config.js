const dotenv = require("dotenv");

// this file is not required, but it provides default standard values for the starter kit
// it is moved to the separate file because it is used in 2 places: server.ts and next.config.js
// you can override the values in the .env file if required

const defaults = {
  UNIFORM_API_SITENAME: "Habitat",
  UNIFORM_API_URL: `https://habitat-sc${(process.env.DNS_SUFFIX || '')}.unfrm.uno`,
  UNIFORM_PUBLISH_TARGET: "none",
  UNIFORM_MODE: "mixed",
  UNIFORM_API_TOKEN: "12345",
  UNIFORM_SSR_ENGINE: "nextjs",
  UNIFORM_PUBLISH_NEXT_POST_EXPORT_COMMAND: 'node ./scripts/decode-esi.js "__DIR__"', // this line is added to simplify Deploy+Optimize in-house testing
};

function processDefault(key, fallback) {
  if (!key) {
    return null;
  }
  process.env[key] = process.env[key] || fallback;
}

module.exports = function () {
  dotenv.config();
  Object.keys(defaults).forEach((k) => processDefault(k, defaults[k]));
};
