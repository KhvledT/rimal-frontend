import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LenisProvider from "@/providers/LenisProvider";
import ScrollToTop from "./components/ScrollToTop";

// Route-level code splitting: each page is loaded on demand.
// The initial bundle no longer includes Leadership team images,
// Contact form code, or any page not visited on first load.
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Businesses = lazy(() => import("./pages/Businesses"));
const Leadership = lazy(() => import("./pages/Leadership"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <LenisProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-sand" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/businesses" element={<Businesses />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LenisProvider>
);

export default App;
