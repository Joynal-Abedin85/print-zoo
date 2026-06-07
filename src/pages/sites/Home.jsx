

import Slider from "../home/Slider";
import Printing from "../home/Printing";
import ProductCart from "../home/ProductCart";
import Discount from "../home/Discount";
import Popularproduct from "../home/Popularproduct";
import Collection from "../home/Collection";
import Topsell from "../home/Topsell";
import Newsletter from "../home/Newsletter";
import Footer from "@/shared/footer/Footer";

const Home = () => {
  return  <div >
    <Slider></Slider>
    <Printing></Printing>
    <ProductCart></ProductCart>
    <Discount></Discount>
    <Popularproduct></Popularproduct>
    <Collection></Collection>
    <Topsell></Topsell>
    <Newsletter></Newsletter>
    <Footer></Footer>
    </div>;
};

export default Home;
