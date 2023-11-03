const app = require("./app");

// Gives us access to our environment variables in .env
require("dotenv").config();
const PORT = process.env.PORT;

// Listener
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});