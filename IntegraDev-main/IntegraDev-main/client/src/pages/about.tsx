import { motion } from "framer-motion";
import AnimatedSection from "../components/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Logo from "@/components/logo";
import { Code, Database, Server, Smartphone, Globe, Cpu, Users, Award, Target, Zap } from "lucide-react";
import aboutUsImage from "../assets/about-us-image.jpeg";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <Logo size={80} showText={false} />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sobre a
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                IntegraDev.IA
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Conheça nossa história, valores e as tecnologias que utilizamos para criar soluções inovadoras em inteligência artificial
            </p>
          </motion.div>
        </div>
      </div>

      {/* Who We Are */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quem Somos</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A IntegraDev.IA nasceu da paixão por tecnologia e do desejo de tornar a inteligência artificial 
                acessível para empresas de todos os portes. Nossa equipe multidisciplinar combina expertise em 
                desenvolvimento de software, machine learning e experiência do usuário.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Desde nossa fundação, já ajudamos mais de 20 empresas a implementar soluções de IA que 
                transformaram seus processos de atendimento e vendas, gerando resultados mensuráveis e 
                sustentáveis.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                  <div className="text-gray-600">Agentes IA Criados</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={aboutUsImage} 
                alt="Equipe da IntegraDev.IA em um ambiente de desenvolvimento colaborativo" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}