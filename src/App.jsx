import {BestResto} from "./Components/BestResto";
import { City } from "./Components/City";
import { Grocery } from "./Components/Grocery";
import { Header } from "./Components/Layout/Header";
import { Instamart } from "./Components/Instamart";
import { Footer } from "./Components/Layout/Footer";
import { Responsive } from "./Components/Responsive";
import {Sticker} from "./Components/Sticker";
function App() {
  return (
    <>
      <Header />
      
      <Responsive />

      <Instamart/>

      <BestResto/>

      <Sticker/>

      <City/>

      <Grocery/>

      <Footer/>
    </>
  );
}

export default App;
