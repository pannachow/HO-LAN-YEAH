import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Header from "../components/Header";
import MainFeaturedPost from "../components/MainFeaturedPost";
import Footer from "../components/Footer";
import ContentGrid from "../components/ContentGrid";

const categories = [
  {
    title: "CBD",
    imagePrefix: "CBD/",
    products: [
      {
        title: "Revuele Face Serum With Hemp Seed 30ml",
        image: "1.jpg",
      },
      {
        title: "Lovehemp CBD Oil Atomizer 2% (30ml)",
        image: "2.jpg",
      },
      { title: "Jacob Hooy CBD Oil 5% (30ml)", image: "3.jpg" },
      { title: "Jacob Hooy CBD Oil 10% (30ml)", image: "4.jpg" },
      { title: "Lucovitaal CBD, 5mg (30 Capsules)", image: "5.jpg" },
      { title: "Jacob Hooy CBD Milk Chocolate (30 Pieces)", image: "6.jpg" },
    ],
  },
  {
    title: "Skincare & Cosmetics",
    imagePrefix: "Skincare/",
    products: [
      { title: "De Tuinen Aloe Vera Gel", image: "1.jpg" },
      { title: "Ultrasun Family SPF 30", image: "2.jpg" },
      { title: "Dr. Organic Snail Gel Face Cream", image: "3.jpg" },
      { title: "Dr. Organic Charcoal Face Mask", image: "4.jpg" },
      { title: "Jacob Hooy Lifting Cure", image: "5.jpg" },
      {
        title: "Royal Green Camu Camu + Vitamin C",
        image: "6.jpg",
      },
    ],
  },
  {
    title: "Toys & Souvenirs",
    imagePrefix: "Toys/",
    products: [
      { title: "Mr Maria Nijntje Lamp XXS", image: "1.jpg" },
      { title: "Miffy Sitting Corduroy 23 cm", image: "2.jpg" },
      { title: "Miffy Birth Package Pink", image: "3.jpg" },
      { title: "Delftblue Clogs 5cm", image: "4.jpg" },
      { title: "Miffy Clog Slipper", image: "5.jpg" },
      {
        title: "Delfts Blue Polder Mill 11 cm",
        image: "6.jpg",
      },
    ],
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <>
      <Container maxWidth="lg">
        <Header setSelectedCategory={setSelectedCategory} />
        <main>
          <MainFeaturedPost />
          <ContentGrid category={categories[selectedCategory]} />
        </main>
      </Container>
      <Footer />
    </>
  );
}
