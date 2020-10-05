express = require("express");
const path = require('path')
app = express();

app.use(express.static("./dist/project5-frontend"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/src/index.html'));
});

app.listen(process.env.PORT || 8080);