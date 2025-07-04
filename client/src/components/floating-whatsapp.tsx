import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Como podemos te ajudar hoje? 👋");
    const whatsappUrl = `https://wa.me/5511999999999?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse-slow"
        size="icon"
      >
        <MessageCircle size={28} />
      </Button>
    </div>
  );
}
