import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  className?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
  className = ""
}: HeroSectionProps) {
  return (
    <div className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              {subtitle}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryAction && (
              <Link href={primaryAction.href}>
                <Button className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  {primaryAction.label}
                </Button>
              </Link>
            )}
            {secondaryAction && (
              <Link href={secondaryAction.href}>
                <Button 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border-white/20"
                >
                  {secondaryAction.label}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float-delayed">
        <div className="w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
      </div>
    </div>
  );
}
