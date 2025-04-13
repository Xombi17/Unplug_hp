import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimationProvider } from "./hooks/useAnimations";
import { useEffect } from "react";
import { initGSAPAnimations } from "./lib/gsap-animations";

import Index from "@/pages/Index";
import ApplicationPage from "@/pages/ApplicationPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    // Initialize GSAP animations at the app level
    initGSAPAnimations();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnimationProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/apply" element={<ApplicationPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
        </AnimationProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
