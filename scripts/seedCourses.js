const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Course = require("../pkg/course/courseSchema");

dotenv.config({ path: path.join(__dirname, "../config.env") });

const sampleCourses = [
  {
    ime: "Full Stack Web Development",
    adresa: "ul. Partizanska br. 10, Skopje",
    oblast: "Programiranje",
  },
  {
    ime: "UI/UX Dizajn",
    adresa: "Bulevar Jane Sandanski 22, Skopje",
    oblast: "Dizajn",
  },
  {
    ime: "Digitalen Marketing i SEO",
    adresa: "ul. Makedonija br. 5, Bitola",
    oblast: "Marketing",
  },
  {
    ime: "Data Science so Python",
    adresa: "Tehnoloshki park, Tetovo",
    oblast: "Podatoci",
  },
  {
    ime: "Sajber Bezbednost (Cybersecurity)",
    adresa: "ul. Ilindenska br. 45, Ohrid",
    oblast: "IT Bezbednost",
  },
  {
    ime: "Smetkovodstvo i Finansii",
    adresa: "ul. Dimitar Vlahov 12, Prilep",
    oblast: "Biznis",
  },
  {
    ime: "Menadzment so proekti (PMP)",
    adresa: "Biznis Centar Kapitol, Skopje",
    oblast: "Administracija",
  },
  {
    ime: "Cloud Computing (AWS)",
    adresa: "ul. Goce Delchev br. 8, Strumica",
    oblast: "Cloud",
  },
  {
    ime: "Kurs za Angliski jazik",
    adresa: "ul. Pitu Guli br. 3, Kumanovo",
    oblast: "Jazici",
  },
  {
    ime: "Razvoj na mobilni aplikacii (Flutter)",
    adresa: "ul. Kej 13-ti Noemvri, Skopje",
    oblast: "Programiranje",
  },
];

const DB = process.env.DATABASE?.replace(
  "<password>",
  process.env.DATABASE_PASSWORD,
);

const seedCourses = async () => {
  try {
    if (!DB) {
      throw new Error("Missing DATABASE or DATABASE_PASSWORD in config.env");
    }

    await mongoose.connect(DB);
    const inserted = await Course.insertMany(sampleCourses);
    console.log(`Inserted ${inserted.length} courses.`);
    await mongoose.connection.close();
  } catch (err) {
    console.log(err.message);
  }
};

seedCourses();
