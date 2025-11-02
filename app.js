const express = require("express");
const path = require("path");
const hbs = require("hbs");

// App setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 80;

// Static paths
const static_path = path.join(__dirname, "./public");
app.use(express.static(static_path));

// hbs setup
const template_path = path.join(__dirname, "./templates/views");
app.set("views", template_path);

const partials_path = path.join(__dirname, "./templates/partials");
hbs.registerPartials(partials_path);

app.set("view engine", "hbs");

// Fetching data from api
const { text, images, mainImage } = require("./src/api/index_hero");
const {
  index_about_text,
  index_about_image,
} = require("./src/api/index_about");
const index_menu_cards = require("./src/api/index_menu_cards");
const { location_text, location_map } = require("./src/api/location");
const menu_images = require("./src/api/menu");
const { footer } = require("./src/api/footer");

const { contact } = require("./src/api/contact");

const { log } = require("console");
const { loadavg } = require("os");

// Routes
app.get("/", async (req, res) => {
  res.render("index", {
    text,
    images,
    mainImage,
    index_about_text,
    index_about_image,
    index_menu_cards,
    contact,
    footer,
  });
});

app.get("/location", (req, res) => {
  res.render("location", { location_text, location_map, contact, footer });
});

app.get("/menu", (req, res) => {
  res.render("menu", { menu_images, contact, footer });
});

app.post("/book-table", (req, res) => {
  // Define your pre-filled message
  const message = encodeURIComponent(
    "Hello! I’d like to reserve a table at your café. Please confirm the availability."
  );

  // Construct WhatsApp link
  const whatsappURL = `https://wa.me/${contact.phone_number}?text=${message}`;

  // Redirect user to WhatsApp chat with the pre-filled message
  res.redirect(whatsappURL);
});

// 404
app.get("*", (req, res) => {
  res.status(404).render("404");
});
app.post("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
