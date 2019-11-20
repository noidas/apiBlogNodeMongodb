express = require("express");
mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const server = express();
server.use(cors());

mongoose.connect(
  "mongodb+srv://marcelo:marcelo123@cluster0-qsue3.mongodb.net/blog?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || 3333);
