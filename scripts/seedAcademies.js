const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Academy = require("../pkg/academy/academySchema");

dotenv.config({ path: path.join(__dirname, "../config.env") });

const sampleAcademies = [
  {
    ime: "Akademija za Programiranje",
    adresa: "Partizanski Odredi 10, Skopje",
  },
  {
    ime: "Akademija za Graficki Dizajn",
    adresa: "Jane Sandanski 22, Skopje",
  },
  {
    ime: "Akademija za Digitalen Marketing",
    adresa: "Ulica Makedonija 5, Bitola",
  },
  {
    ime: "Data Science Akademija",
    adresa: "Kej 13-ti Noemvri, Skopje",
  },
  {
    ime: "Tehnoloska Akademija",
    adresa: "Ilindenska bb, Tetovo",
  },
];

const DB = process.env.DATABASE?.replace(
  "<password>",
  process.env.DATABASE_PASSWORD,
);

const seedAcademies = async () => {
  try {
    if (!DB) {
      throw new Error("Missing DATABASE or DATABASE_PASSWORD in config.env");
    }

    await mongoose.connect(DB);
    const inserted = await Academy.insertMany(sampleAcademies);
    console.log(`Inserted ${inserted.length} academies.`);
    await mongoose.connection.close();
  } catch (err) {
    console.log(err.message);
  }
};

seedAcademies();
