import Head from "next/head";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductContainer from "../components/ProductContainer";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <>
    <Head>
      <title>Ecommerce</title>
    </Head>
    <Navbar />
    <Slider />
    <Categories />
    <ProductContainer />
    <About />
    <Blogs />
    <Footer />
    </>
  )
};

export default HomePage;
