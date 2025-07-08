import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import MainRouter from './routers/MainRouter';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme/ThemeProvider';

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#implementation", label: "Implementations" },
  { href: "#themes", label: "Themes" },
  { href: "#ui-components", label: "UI Components" },
]

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <>
          <Header navItems={navItems} logoUrl={'/reactforge-logo.svg'}></Header>
          <main className="main-container bg-background text-text">
            <MainRouter />
          </main>
          <Footer />
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App
