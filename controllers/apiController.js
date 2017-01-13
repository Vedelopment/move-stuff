function index(req, res) {
  res.json({
    message: "Welcome to haul!",
    // documentation_url: "https://github.com/sf-wdi-labs/tunely/api.md",
    base_url: "http://localhost:3000/",
    // endpoints: [
    //   {method: "GET", path: "/api", description: "Describes available endpoints"}
    // ]
  });
}

module.exports.index = index;
