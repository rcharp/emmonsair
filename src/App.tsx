import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <QuoteModalProvider>
          <Routes>
            <Route path="/" element={<Index />} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QuoteModalProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
