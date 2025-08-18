import { motion } from "framer-motion";
import AnimatedSection from "../components/animated-section";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { FaWhatsapp } from "react-icons/fa";
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
  BarChart,
  File,
  Stethoscope,
  Target,
  TrendingUp,
  ArrowRight,
  Zap,
  Star,
  Globe,
  Award
} from "lucide-react";

export default function Products() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const aiAgents = [
    {
      title: "Agente Inteligente de Qualificação de Leads",
      description: "Automatize a triagem e descubra oportunidades de ouro. Utiliza perguntas estratégicas para identificar os leads mais promissores, economizando tempo da equipe e acelerando seu funil de vendas.",
      icon: Filter,
      gradient: "from-blue-500 to-blue-600",
      color: "blue",
      category: "Vendas",
      features: [
        { name: "Qualificação Automática", icon: Target },
        { name: "Análise Inteligente", icon: Brain },
        { name: "WhatsApp Integrado", icon: FaWhatsapp },
        { name: "Relatórios Detalhados", icon: BarChart }
      ],
      impact: {
        label: "Resultado comprovado:",
        value: "+75% leads qualificados"
      }
    },
    {
      title: "Agente de Atendimento para Clínicas",
      description: "Otimize a gestão de pacientes com um agente que se integra ao seu CRM. Automatize agendamentos, envie lembretes e responda dúvidas frequentes, liberando sua equipe para focar no cuidado.",
      icon: Calendar,
      gradient: "from-teal-500 to-teal-600",
      color: "teal",
      category: "Saúde",
      features: [
        { name: "Agendamento Automático", icon: Calendar },
        { name: "Lembretes Inteligentes", icon: Bell },
        { name: "CRM Integrado", icon: Users },
        { name: "Prontuários Digitais", icon: FileText }
      ],
      impact: {
        label: "Resultado comprovado:",
        value: "+40% agendamentos automáticos"
      }
    }
  ];

  const systems = [
    {
      title: "IntegraOutlier",
      description: "Sistema completo para corretoras de seguros com gestão de leads, propostas e automação WhatsApp.",
      icon: Shield,
      gradient: "from-emerald-500 to-emerald-600",
      color: "emerald",
      category: "Corretoras",
      features: [
        { name: "Gestão de Leads", icon: Users },
        { name: "Propostas Digitais", icon: File },
        { name: "WhatsApp Business", icon: FaWhatsapp },
        { name: "Analytics Avançado", icon: BarChart }
      ],
      impact: {
        label: "Impacto:",
        value: "+200% conversão"
      },
      ctaText: "Visitar Site IntegraOutlier",
      ctaUrl: "https://integraoutlier.com.br/"
    },
    {
      title: "IntegraPsis",
      description: "CRM completo para clínicas de psicologia com agenda inteligente, prontuários e automações.",
      icon: Stethoscope,
      gradient: "from-teal-500 to-cyan-600",
      color: "teal",
      category: "Clínicas",
      features: [
        { name: "Agenda Inteligente", icon: Calendar },
        { name: "Prontuários Digitais", icon: Stethoscope },
        { name: "Lembretes Automáticos", icon: Bell },
        { name: "Gestão Financeira", icon: DollarSign }
      ],
      impact: {
        label: "Impacto:",
        value: "-60% tempo administrativo"
      },
      ctaText: "Visitar Site IntegraPsis",
      ctaUrl: "https://integrapsis.com.br/"
    }
  ];

  const benefits = [
    {
      title: "Atendimento 24/7",
      description: "Respostas personalizadas sem interrupção, garantindo que seus clientes sejam sempre atendidos",
      icon: CheckCircle,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Personalização Total",
      description: "Desenvolvido especificamente para suas necessidades, integrando perfeitamente ao seu fluxo de trabalho",
      icon: Code,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Resultados Comprovados",
      description: "Aumento real na eficiência e conversões, com métricas claras de retorno sobre investimento",
      icon: BarChart,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Integração Completa",
      description: "Conecta-se facilmente aos seus sistemas existentes, CRMs e ferramentas de comunicação",
      icon: Globe,
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const achievements = [
    { number: "50+", label: "Projetos Entregues", icon: Award },
    { number: "200+", label: "Agentes IA Ativos", icon: Bot },
    { number: "95%", label: "Taxa de Satisfação", icon: Star },
    { number: "24/7", label: "Suporte Técnico", icon: Shield }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section Enhanced */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Logo size={100} showText={false} />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Nossos
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block bg-[length:200%_100%]"
                animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                Produtos
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Soluções completas em inteligência artificial e desenvolvimento de sistemas 
              para impulsionar seu negócio ao próximo nível.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 text-white/70"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm">Soluções personalizadas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap size={16} className="text-yellow-400" />
                <span className="text-sm">Automação inteligente</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe size={16} className="text-blue-400" />
                <span className="text-sm">Integração total</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* AI Agents Section */}
      <AnimatedSection id="agentes-ia" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Agentes de IA
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Nossos agentes de IA aprendem com o seu negócio e fornecem respostas personalizadas em tempo real
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {aiAgents.map((agent, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                {/* Header */}
                <div className={`relative h-48 bg-gradient-to-br ${agent.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-full border-2 border-white/20"></div>
                    <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-white/10"></div>
                    <div className="absolute bottom-6 left-8 w-12 h-12 rounded-full border border-white/20"></div>
                  </div>
                  
                  <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
                    <agent.icon className="text-white" size={56} />
                  </div>
                  
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <span className="text-white text-sm font-medium">{agent.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {agent.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {agent.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {agent.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 group/feature">
                        <feature.icon size={16} className={`mr-2 text-${agent.color}-500 transition-transform duration-200 group-hover/feature:scale-110`} />
                        <span className="group-hover/feature:text-gray-800 transition-colors duration-200">
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className={`bg-${agent.color}-50 p-4 rounded-xl border border-${agent.color}-100`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`text-sm text-${agent.color}-800 font-medium flex items-center`}>
                          <TrendingUp size={14} className="mr-1" />
                          {agent.impact.label}
                        </div>
                        <div className={`text-2xl font-bold text-${agent.color}-700`}>
                          {agent.impact.value}
                        </div>
                      </div>
                      <div className={`w-12 h-12 bg-${agent.color}-100 rounded-full flex items-center justify-center`}>
                        <Star className={`text-${agent.color}-600`} size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Systems Section */}
      <AnimatedSection id="sistemas-personalizados" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mr-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Sistemas Personalizados
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Desenvolvemos o sistema ideal para sua empresa, integrado com automações de IA, CRMs e WhatsApp
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {systems.map((system, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                {/* Header */}
                <div className={`relative h-48 bg-gradient-to-br ${system.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-full border-2 border-white/20"></div>
                    <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-white/10"></div>
                    <div className="absolute bottom-6 left-8 w-12 h-12 rounded-full border border-white/20"></div>
                  </div>
                  
                  <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
                    <system.icon className="text-white" size={56} />
                  </div>
                  
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <span className="text-white text-sm font-medium">{system.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {system.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {system.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {system.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 group/feature">
                        <feature.icon size={16} className={`mr-2 text-${system.color}-500 transition-transform duration-200 group-hover/feature:scale-110`} />
                        <span className="group-hover/feature:text-gray-800 transition-colors duration-200">
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className={`bg-${system.color}-50 p-4 rounded-xl border border-${system.color}-100 mb-6`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`text-sm text-${system.color}-800 font-medium flex items-center`}>
                          <TrendingUp size={14} className="mr-1" />
                          {system.impact.label}
                        </div>
                        <div className={`text-2xl font-bold text-${system.color}-700`}>
                          {system.impact.value}
                        </div>
                      </div>
                      <div className={`w-12 h-12 bg-${system.color}-100 rounded-full flex items-center justify-center`}>
                        <Star className={`text-${system.color}-600`} size={20} />
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  {system.ctaUrl && (
                    <a href={system.ctaUrl} target="_blank" rel="noopener noreferrer">
                      <button
                        className={`w-full bg-gradient-to-r ${
                          system.color === 'emerald'
                            ? 'from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800'
                            : 'from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800'
                        } text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center group/btn`}
                      >
                        {system.ctaText}
                        <ArrowRight size={16} className="ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </button>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Por que escolher nossas soluções?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia de ponta combinada com resultados comprovados
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Achievements Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Resultados em Números
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dados que demonstram nossa excelência em entrega
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center group hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                
                <motion.div
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {achievement.number}
                </motion.div>
                
                <p className="text-gray-300 font-semibold">{achievement.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20" />
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Zap className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Interessado em nossos produtos?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Fale conosco e descubra como podemos criar a solução perfeita para seu negócio
            </p>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105"
                onClick={() => {
                  const message = encodeURIComponent("Olá! Gostaria de saber sobre os produtos da IntegraDev.IA");
                  window.open(`https://wa.me/552138282956?text=${message}`, "_blank");
                }}
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                Falar com Especialista
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Shield size={16} className="text-green-400" />
                <span>Suporte especializado</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-blue-400" />
                <span>Resultados garantidos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={16} className="text-yellow-400" />
                <span>Clientes satisfeitos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
