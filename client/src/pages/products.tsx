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
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />

        {/* Animated tech background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-20 w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
              <Logo size={80} showText={false} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Nossos
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent block">
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4 border border-blue-200">
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Agente Inteligente de Qualificação de Leads</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Automatize a triagem e descubra oportunidades de ouro.</strong> Utiliza perguntas estratégicas para identificar os leads mais promissores, economizando tempo da equipe e acelerando seu funil de vendas.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-sm text-blue-800 font-medium">📊 Resultado comprovado:</div>
                  <div className="text-lg font-bold text-blue-600">+75% de leads qualificados</div>
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Agente de Vendas com Inteligência de Conteúdo</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Transforme seus arquivos em um consultor de vendas 24h.</strong> Responde dúvidas com base nos documentos da empresa (contratos, manuais, apresentações etc.), auxiliando clientes e vendedores em tempo real.
                </p>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="text-sm text-purple-800 font-medium">🚀 Resultado comprovado:</div>
                  <div className="text-lg font-bold text-purple-600">+30% de eficiência nas vendas</div>
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-4 border border-emerald-200">
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
            {/* IntegraCorretora */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <Shield className="text-white" size={48} />
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white text-sm font-medium">Corretoras</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">IntegraOutlier</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Sistema completo para corretoras de seguros com gestão de leads, propostas e automação WhatsApp.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-2 text-emerald-500" />
                    Gestão de Leads
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <File size={16} className="mr-2 text-emerald-500" />
                    Propostas
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MessageCircle size={16} className="mr-2 text-emerald-500" />
                    WhatsApp
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BarChart size={16} className="mr-2 text-emerald-500" />
                    Analytics
                  </div>
                </div>
                <div className="bg-emerald-50 p-3 rounded-lg mb-4">
                  <div className="text-sm text-emerald-800 font-medium">Impacto:</div>
                  <div className="text-lg font-bold text-emerald-700">+200% conversão</div>
                </div>
                <Button 
                  onClick={() => window.open('https://integraoutlier.com.br/', '_blank')}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Visitar Site IntegraOutlier
                </Button>
              </div>
            </motion.div>

            {/* IntegraPsis - Sistema para Clínicas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-white flex items-center justify-center overflow-hidden">
                <img 
                  src="/attached_assets/integrapsis_new_logo.png" 
                  alt="IntegraPsis" 
                  className="h-32 w-auto object-contain"
                />
                <div className="absolute top-4 left-4 bg-teal-500 rounded-lg px-3 py-1">
                  <span className="text-white text-sm font-medium">Clínicas</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <IntegraPsisLogo size={30} showText={false} />
                  <h3 className="text-xl font-bold text-teal-600 ml-2">IntegraPsis</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  CRM completo para clínicas de psicologia com agenda inteligente, prontuários e automações.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2 text-teal-500" />
                    Agenda Smart
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Stethoscope size={16} className="mr-2 text-teal-500" />
                    Prontuários
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Bell size={16} className="mr-2 text-teal-500" />
                    Lembretes
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign size={16} className="mr-2 text-teal-500" />
                    Financeiro
                  </div>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg mb-4">
                  <div className="text-sm text-teal-800 font-medium">Impacto:</div>
                  <div className="text-lg font-bold text-teal-700">-60% tempo admin</div>
                </div>
                <Button 
                  onClick={() => window.open('https://integrapsis.com.br/', '_blank')}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Visitar Site IntegraPsis
                </Button>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interessado em nossos produtos?
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Fale conosco e descubra como podemos criar a solução perfeita para seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                const message = encodeURIComponent("Olá! Gostaria de saber sobre os produtos da IntegraDev.IA");
                window.open(`https://wa.me/552138282956?text=${message}`, "_blank");
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center"
            >
              <svg 
                className="mr-2" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.064 3.687"/>
              </svg>
              Falar com Especialista
            </Button>
            <Link href="/produtos">
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