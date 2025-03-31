import {BestResto} from "./Components/BestResto";
import { Header } from "./Components/Header";
import { Instamart } from "./Components/Instamart";
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
    </>
  );
}

export default App;
