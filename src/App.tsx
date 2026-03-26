import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { QuoteModalProvider } from "./components/QuoteModal";
import Index from "./pages/Index";
import ReviewPage from "./pages/ReviewPage";
import ACRepairPage from "./pages/ACRepairPage";
import ACInstallationPage from "./pages/ACInstallationPage";
import ACMaintenancePage from "./pages/ACMaintenancePage";
import DuctCleaningPage from "./pages/DuctCleaningPage";
import PalmettoPage from "./pages/areas/PalmettoPage";
import MemphisPage from "./pages/areas/MemphisPage";
import BradentonPage from "./pages/areas/BradentonPage";
import EllentonPage from "./pages/areas/EllentonPage";
import PalmaSolaPage from "./pages/areas/PalmaSolaPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import QuotePage from "./pages/QuotePage";
import HVACTipsPage from "./pages/HVACTipsPage";
import TipDetailPage from "./pages/TipDetailPage";
import GetYourDiscountPage from "./pages/GetYourDiscountPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const InternalAnchorRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="/"]') as HTMLAnchorElement | null;

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("//")) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      event.preventDefault();
      navigate(href);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <InternalAnchorRouter />
        <QuoteModalProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/get-your-discount" element={<GetYourDiscountPage />} />

            <Route path="/review" element={<ReviewPage />} />
            <Route path="/services/ac-repair" element={<ACRepairPage />} />
            <Route path="/services/ac-installation" element={<ACInstallationPage />} />
            <Route path="/services/ac-maintenance" element={<ACMaintenancePage />} />
            <Route path="/services/duct-cleaning" element={<DuctCleaningPage />} />
            <Route path="/areas/palmetto" element={<PalmettoPage />} />
            <Route path="/areas/memphis" element={<MemphisPage />} />
            <Route path="/areas/bradenton" element={<BradentonPage />} />
            <Route path="/areas/ellenton" element={<EllentonPage />} />
            <Route path="/areas/palma-sola" element={<PalmaSolaPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/tips" element={<HVACTipsPage />} />
            <Route path="/tips/:slug" element={<TipDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QuoteModalProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
