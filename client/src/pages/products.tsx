import { motion } from "framer-motion";
import HeroSection from "../components/hero-section";
import AnimatedSection from "../components/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Logo from "@/components/logo";
import IntegraPsisLogo from "@/components/integrapsis-logo";
import { 
  Bot, 
  Filter, 
  FileText, 
  Code, 
  Shield, 
  Brain, 
  Users, 
  Calendar,
  Bell, 
  DollarSign,
  CheckCircle,
  MessageCircle,
  BarChart,
  File,
  Stethoscope,
  Target,
  TrendingUp
} from "lucide-react";

export default function Products() {
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
              Nossos
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Produtos
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Soluções completas em IA e desenvolvimento de sistemas para impulsionar seu negócio
            </p>
          </motion.div>
        </div>
      </div>

      {/* AI Agents Section */}
      <AnimatedSection className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Bot className="text-blue-600 mr-2" size={20} />
              <span className="text-blue-800 font-medium">Agentes IA</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Agentes de Inteligência Artificial
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nossos agentes de IA aprendem com o seu negócio e fornecem respostas personalizadas em tempo real no seu WhatsApp
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Agent 1: Lead Filtering */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Filter className="text-white" size={48} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Agente de Filtragem de Leads</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Qualifica automaticamente seus contatos, identificando leads mais promissores através de perguntas estratégicas.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-sm text-blue-800 font-medium">Resultado:</div>
                  <div className="text-lg font-bold text-blue-600">+75% leads qualificados</div>
                </div>
              </div>
            </motion.div>
            
            {/* Agent 2: RAG Documents */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <FileText className="text-white" size={48} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">RAG de Documentos</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Responde perguntas com base em arquivos da sua empresa, como contratos, manuais e documentos técnicos.
                </p>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="text-sm text-purple-800 font-medium">Resultado:</div>
                  <div className="text-lg font-bold text-purple-600">-80% tempo de consulta</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* System Development Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full mb-4">
              <Code className="text-emerald-600 mr-2" size={20} />
              <span className="text-emerald-800 font-medium">Desenvolvimento de Sistemas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sistemas Personalizados
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Desenvolvemos o sistema ideal para sua empresa, integrado com automações de IA, CRMs e WhatsApp
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* IntegraPsis - Sistema para Corretoras */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                <Shield className="text-white" size={48} />
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white text-sm font-medium">Corretoras</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <IntegraPsisLogo size={30} showText={false} />
                  <h3 className="text-xl font-bold text-teal-600 ml-2">IntegraPsis</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Sistema completo para corretoras de seguros com gestão de leads, propostas e automação WhatsApp.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-2 text-teal-500" />
                    Gestão de Leads
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <File size={16} className="mr-2 text-teal-500" />
                    Propostas
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MessageCircle size={16} className="mr-2 text-teal-500" />
                    WhatsApp
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BarChart size={16} className="mr-2 text-teal-500" />
                    Analytics
                  </div>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg mb-4">
                  <div className="text-sm text-teal-800 font-medium">Impacto:</div>
                  <div className="text-lg font-bold text-teal-700">+200% conversão</div>
                </div>
                <Button 
                  onClick={() => window.open('https://integrapsis.com.br/', '_blank')}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Visitar Site IntegraPsis
                </Button>
              </div>
            </motion.div>
            
            {/* IntegraPsi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Brain className="text-white" size={48} />
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white text-sm font-medium">Psicólogos</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">IntegraPsi</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  CRM completo para clínicas de psicologia com agenda inteligente, prontuários e automações.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2 text-blue-500" />
                    Agenda Smart
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Stethoscope size={16} className="mr-2 text-blue-500" />
                    Prontuários
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Bell size={16} className="mr-2 text-blue-500" />
                    Lembretes
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign size={16} className="mr-2 text-blue-500" />
                    Financeiro
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-sm text-blue-800 font-medium">Impacto:</div>
                  <div className="text-lg font-bold text-blue-700">-60% tempo admin</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Quick Benefits */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por que escolher nossas soluções?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Atendimento 24/7</h3>
              <p className="text-gray-600">Respostas personalizadas sem interrupção</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Personalização Total</h3>
              <p className="text-gray-600">Desenvolvido para suas necessidades específicas</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Resultados Comprovados</h3>
              <p className="text-gray-600">Aumento real na eficiência e conversões</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-12 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Interessado em nossos produtos?
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Fale conosco e descubra como podemos criar a solução perfeita para seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                const message = encodeURIComponent("Olá! Gostaria de conhecer mais sobre os produtos da IntegraDev.IA");
                window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <MessageCircle className="mr-2" size={18} />
              Falar no WhatsApp
            </Button>
            <Link href="/sobre-nos">
              <Button 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border-white/20"
              >
                Conhecer a Empresa
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
