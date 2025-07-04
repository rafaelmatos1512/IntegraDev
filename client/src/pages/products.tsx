import { motion } from "framer-motion";
import HeroSection from "../components/hero-section";
import AnimatedSection from "../components/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
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
  Stethoscope
} from "lucide-react";

export default function Products() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Nossos"
        subtitle="Produtos"
        description="Soluções completas em IA e desenvolvimento de sistemas para impulsionar seu negócio"
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
        className="min-h-[70vh]"
      />

      {/* AI Agents Section */}
      <AnimatedSection className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Bot className="text-blue-600 mr-2" size={20} />
              <span className="text-blue-800 font-medium">Agentes IA</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Agentes de Inteligência Artificial
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nossos agentes de IA aprendem com o seu negócio, entendem as necessidades dos seus clientes 
              e fornecem respostas personalizadas em tempo real no seu WhatsApp, aumentando a eficiência do seu atendimento.
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
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Filter className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Agente de Filtragem de Leads</h3>
                    <p className="text-blue-600 font-medium">Qualificação Automática</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nosso agente inteligente qualifica automaticamente seus contatos, identificando leads mais 
                  promissores através de perguntas estratégicas e análise de comportamento, direcionando apenas 
                  os leads qualificados para sua equipe de vendas.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Qualificação automática 24/7",
                    "Pontuação de leads por interesse",
                    "Integração com CRM"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="text-sm text-blue-800 font-medium mb-2">Resultado comprovado:</div>
                  <div className="text-2xl font-bold text-blue-600">+75% de leads qualificados</div>
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
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <FileText className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">RAG de Documentos</h3>
                    <p className="text-purple-600 font-medium">Consulta Inteligente</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Agente especializado em responder perguntas com base em arquivos da sua empresa, como contratos, 
                  manuais, políticas e documentos técnicos. Fornece respostas precisas e contextualizadas, 
                  eliminando a necessidade de busca manual em documentos.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Processamento de PDFs, DOCs e TXTs",
                    "Respostas contextualizadas",
                    "Atualização automática de conhecimento"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="text-sm text-purple-800 font-medium mb-2">Resultado comprovado:</div>
                  <div className="text-2xl font-bold text-purple-600">-80% tempo de consulta</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sistemas Personalizados
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Aqui na IntegraDev desenvolvemos o sistema ideal para sua empresa, integrado com automações de IA 
              como CRMs, WhatsApp e funis de vendas. Atendemos clínicas, consultórios, corretoras e diversos outros segmentos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* IntegraCorretora */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">IntegraCorretora</h3>
                    <p className="text-emerald-600 font-medium">Sistema para Corretoras</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Sistema completo para corretoras de seguros de vida, com gestão inteligente de leads, 
                  acompanhamento de propostas, automação de follow-up via WhatsApp e dashboards analíticos 
                  para otimizar suas vendas.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: <Users size={20} />, title: "Gestão de Leads", desc: "Captura e qualificação automática" },
                    { icon: <File size={20} />, title: "Propostas", desc: "Acompanhamento completo" },
                    { icon: <MessageCircle size={20} />, title: "WhatsApp", desc: "Automação de mensagens" },
                    { icon: <BarChart size={20} />, title: "Analytics", desc: "Dashboards inteligentes" }
                  ].map((feature, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <span className="text-emerald-500 mr-2">{feature.icon}</span>
                        <span className="text-sm font-medium text-gray-700">{feature.title}</span>
                      </div>
                      <div className="text-xs text-gray-600">{feature.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-100 p-4 rounded-xl">
                  <div className="text-sm text-emerald-800 font-medium mb-1">Impacto médio:</div>
                  <div className="text-lg font-bold text-emerald-700">+200% conversão de leads</div>
                </div>
              </div>
            </motion.div>
            
            {/* IntegraPsi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Brain className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">IntegraPsi</h3>
                    <p className="text-blue-600 font-medium">CRM para Psicólogos</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  CRM completo para clínicas de psicologia, com sistema de agenda inteligente, prontuários 
                  eletrônicos seguros, automações via WhatsApp para lembretes e follow-ups, e gestão financeira integrada.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: <Calendar size={20} />, title: "Agenda Smart", desc: "Agendamento inteligente" },
                    { icon: <Stethoscope size={20} />, title: "Prontuários", desc: "Eletrônicos seguros" },
                    { icon: <Bell size={20} />, title: "Lembretes", desc: "Automação WhatsApp" },
                    { icon: <DollarSign size={20} />, title: "Financeiro", desc: "Gestão completa" }
                  ].map((feature, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <span className="text-blue-500 mr-2">{feature.icon}</span>
                        <span className="text-sm font-medium text-gray-700">{feature.title}</span>
                      </div>
                      <div className="text-xs text-gray-600">{feature.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-100 p-4 rounded-xl">
                  <div className="text-sm text-blue-800 font-medium mb-1">Impacto médio:</div>
                  <div className="text-lg font-bold text-blue-700">-60% tempo administrativo</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Comparison */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Por que escolher nossas soluções?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compare os benefícios de cada categoria de produto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Bot className="text-blue-600 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Agentes IA</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Atendimento 24/7 sem interrupção",
                  "Aprendizado contínuo com dados",
                  "Respostas personalizadas por cliente",
                  "Redução de custos operacionais",
                  "Escalabilidade ilimitada"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Code className="text-emerald-600 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Sistemas Personalizados</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Desenvolvido para suas necessidades específicas",
                  "Integração com ferramentas existentes",
                  "Interface intuitiva e moderna",
                  "Suporte técnico especializado",
                  "Atualizações e melhorias contínuas"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interessado em nossos produtos?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Fale conosco e descubra como podemos criar a solução perfeita para seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                const message = encodeURIComponent("Olá! Gostaria de conhecer mais sobre os produtos da IntegraDev.IA");
                window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <MessageCircle className="mr-2" size={20} />
              Falar no WhatsApp
            </Button>
            <Link href="/sobre-nos">
              <Button 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border-white/20"
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
