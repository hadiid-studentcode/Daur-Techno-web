import Contacts from "./Components/Contacts";
import Header from "./Components/Header";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
function App() {
  return (
    <div className="container">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Contacts />
    </div>
  );
}

export default App;

// function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// }

// function News() {
//   return (
//     <div>
//       <h1>News</h1>
//     </div>
//   );
// }
