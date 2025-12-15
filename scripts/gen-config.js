const fs = require("fs");

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error("Missing SUPABASE_URL or SUPABASE_ANON_KEY");
  process.exit(1);
}

const content = `window.SUPABASE_URL = "${SUPABASE_URL}";
window.SUPABASE_ANON_KEY = "${SUPABASE_ANON_KEY}";`;

fs.writeFileSync("supabase-config.js", content, "utf8");
console.log("supabase-config.js generated");

