const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/games", function (req, res) {
  return res.send([
    { title: "3 hit pay", img: "3-hit-pay", size: 2, tags: ["top"] },
    {
      title: "Aloha Cluster Pays",
      img: "aloha-cluser-pays",
      size: 1,
      tags: ["new", "top"],
    },
    {
      title: "Day of the Dead",
      img: "day-of-the-dead",
      size: 1,
      tags: ["new"],
    },
    {
      title: "Dr. Jekill & Mr. Hyde",
      img: "dr-jekill-mr-hyde",
      size: 1,
      tags: ["new", "top"],
    },
    { title: "Fa-Fa Twins", img: "fa-fa-twins", size: 1, tags: ["top"] },
    { title: "Fruit Spin", img: "fruit-spin", size: 1, tags: ["new", "top"] },
    { title: "Gonzo's Quest", img: "gonzos-quest", size: 1, tags: ["new"] },
    { title: "Hotline", img: "hotline", size: 1, tags: ["new", "top"] },
    { title: "Jack Hammer", img: "jack-hammer", size: 1, tags: [] },
    { title: "Jumanji", img: "jumanji", size: 2, tags: ["new", "top"] },
    {
      title: "Neon Jungle",
      img: "neon-jungle",
      size: 1,
      tags: ["new", "top"],
    },
    {
      title: "Sea of Tranqility",
      img: "sea-of-tranqility",
      size: 1,
      tags: [],
    },
    {
      title: "Sugar Smash",
      img: "sugar-smash",
      size: 1,
      tags: ["new", "top"],
    },
    { title: "Smokin' Hot Gems", img: "smokin-hot-gems", size: 1, tags: [] },
    {
      title: "Spinata Grande",
      img: "spinata-grande",
      size: 1,
      tags: ["new", "top"],
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
