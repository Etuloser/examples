import express from "express";
import info from './esclient'

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const esinfo = await info
  res.send(esinfo);
});

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
