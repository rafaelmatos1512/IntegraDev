import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/navbar";
import FloatingWhatsApp from "./components/floating-whatsapp";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import Blog from "./pages/blog";
import NotFound from "@/pages/not-found";
import RouteHandler from "./components/route-handler";

function Router() {
  return (
    <>
      <RouteHandler />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/sobre-nos" component={About} />
        <Route path="/produtos" component={Products} />
        <Route path="/blog" component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="pt-16">
            <Router />
          </main>
          <Footer />
          <FloatingWhatsApp />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
