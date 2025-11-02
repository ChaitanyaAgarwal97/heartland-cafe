// api.js

const text = {
  title: "Taste The Story Of Every Cup",
  desc: "Modern café vibes, vibrant flavors, and a warm heart — The Heartland Café & Restro brings bold coffee, fresh plates and playful moments. Come for the aroma, stay for the energy."
};

const images = [
  { id: "1", image: "/images/index_g_1.jpg" },
  { id: "2", image: "/images/index_g_2.jpg" },
  { id: "3", image: "/images/index_g_3.jpg" },
  { id: "4", image: "/images/index_g_4.jpg" },
  { id: "5", image: "/images/index_g_5.jpg" },
  { id: "6", image: "/images/index_g_6.jpg" }
];

const mainImage = {

   id: "7", image: "/images/index_main.jpg" 
}
;

// ✅ Export them all together
module.exports = { text, images, mainImage };
