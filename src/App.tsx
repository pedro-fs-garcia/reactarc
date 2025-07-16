import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import MainRouter from './routers/MainRouter';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/theme/ThemeProvider';

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#how-to-use", label: "Get started" },
  { href: "#themes", label: "Themes" },
  { href: "#ui-components", label: "UI Components" },
  { href: "#material-ui-demo", label: "Material UI" },
]

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter basename="/reactarc">
        <>
          <Header navItems={navItems} logoUrl={'/reactarc-logo.svg'}></Header>
          <main className="main-container bg-background text-text">
            <MainRouter />
          </main>
          <Footer />
        </>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
