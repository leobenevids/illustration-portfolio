import { Footer, Navbar } from "./components";
import { sections } from "./components/Sections";
import Theme from "./providers/Theme";

function App() {
  return (
    <Theme>
      <Navbar />
      {sections.map(({ component }) => component)}
    </Theme>
  );
}

export default App;
