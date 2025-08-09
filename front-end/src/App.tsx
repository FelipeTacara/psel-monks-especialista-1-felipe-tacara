import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Products from "./components/Products";
import SimpleGallery from "./components/SimpleGallery";
import AppSection from "./components/AppSection";
import TagSection from "./components/TagSection";
import CardSection from "./components/CardSection";
import FormSection from "./components/FormSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Hero />
      <Products />
      <SimpleGallery />
      <AppSection />
      <TagSection />
      <CardSection />
      <FormSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
