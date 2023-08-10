// Import the required packages
const express = require("express"); // Import the Express framework
const cors = require("cors"); // Import the CORS middleware
const bodyParser = require("body-parser"); // Import the body-parser middleware

// Create an instance of the Express app
const app = express();

// Configure middleware
app.use(express.json()); // Parse JSON data from incoming requests
app.use(bodyParser.json({ limit: "500mb" })); // Set a limit on the size of JSON data to be parsed
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true })); // Set a limit on the size of URL-encoded data to be parsed
app.use(express.static("public")); // Serve static files from the "public" directory
app.use(cors({ origin: true })); // Enable CORS with the specified origin
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Set the Access-Control-Allow-Origin header to "*"
  next(); // Call the next middleware
});

// routes
const authUser = require("./Route");
app.use("/api/v1/authusers", authUser);
// Define a function to connect the app to the database and start the server
const connectAdminToDataBase = async () => {
  try {
    // Listen for incoming requests on the specified port (or fallback to 2222)
    app.listen(process.env.PORT || 2222, () => {
      console.log("app is listening on port 2222"); // Print a message when the server is started
    });
  } catch (error) {
    console.log(error); // Print an error message if there's an issue with the server setup
  }
};

// Call the function to connect the app to the database and start the server
connectAdminToDataBase();
