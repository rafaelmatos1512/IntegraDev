import { motion } from "framer-motion";
import AnimatedSection from "../components/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FaWhatsapp } from "react-icons/fa";
import { 
  Brain, 
  ServerCog, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Target,
  Rocket,
  Zap,
  Star,
  Globe,
  ArrowRight,
  MessageCircle,
  Shield,
  Award
} from "lucide-react";
import Logo from "@/components/logo";
import FloatingWhatsApp from "@/components/floating-whatsapp";

export default function Home() {
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

  const highlights = [
    {
      icon: Brain,
      title: "IA Personalizada",
      description: "Agentes que aprendem com seu negócio e fornecem respostas personalizadas",
      color: "from-blue-500 to-blue-600",
      features: ["Respostas contextuais", "Aprendizado contínuo", "Multi-plataforma"]
    },
    {
      icon: ServerCog,
      title: "Integração Completa",
      description: "Sistemas integrados com WhatsApp, CRMs e suas ferramentas atuais",
      color: "from-purple-500 to-purple-600",
      features: ["APIs robustas", "Sincronização real-time", "Compatibilidade total"]
    },
    {
      icon: TrendingUp,
      title: "Resultados Mensuráveis",
      description: "Aumento comprovado na eficiência do atendimento e conversão de leads",
      color: "from-emerald-500 to-emerald-600",
      features: ["Dashboard analytics", "ROI transparente", "Métricas precisas"]
    }
  ];

  const benefits = [
    {
      title: "Inovação Constante",
      description: "Sempre na vanguarda da tecnologia IA para manter seu negócio competitivo",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Atendimento Humanizado",
      description: "IA que conversa naturalmente, criando conexões genuínas com seus clientes",
      icon: MessageCircle,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Segurança Total",
      description: "Dados protegidos com os mais altos padrões de segurança e conformidade",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Performance Superior",
      description: "Sistemas otimizados para máxima velocidade e confiabilidade",
      icon: Zap,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <FloatingWhatsApp />
      
      {/* Hero Section Enhanced */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
          {/* Floating particles */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -120, 0],
                x: [0, Math.random() * 60 - 30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
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
              className="relative mb-6"
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <Logo size={100} showText={false} />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Transforme seu negócio com
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block bg-[length:200%_100%]"
                animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Inteligência Artificial
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Desenvolvemos agentes de IA personalizados e sistemas integrados que revolutionam 
              o atendimento ao cliente e otimizam processos empresariais
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/produtos">
                  <Rocket className="mr-2 h-5 w-5" />
                  Conhecer Produtos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-lg transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/sobre-nos">
                  <Users className="mr-2 h-5 w-5" />
                  Sobre Nós
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Company Highlights */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Por que escolher a IntegraDev.IA?
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Combinamos expertise em IA com desenvolvimento de sistemas para criar soluções que realmente impactam seu negócio
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                {/* Header */}
                <div className={`relative h-48 bg-gradient-to-br ${highlight.color} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-full border-2 border-white/20"></div>
                    <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-white/10"></div>
                    <div className="absolute bottom-6 left-8 w-12 h-12 rounded-full border border-white/20"></div>
                  </div>
                  
                  <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
                    <highlight.icon className="text-white" size={56} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {highlight.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {highlight.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Tecnologia que Transforma
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa plataforma combina as mais avançadas tecnologias de IA para criar soluções que realmente fazem a diferença
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
                className="group flex"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Visual Showcase */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Resultados que
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">
                  Impressionam
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Métricas reais de empresas que revolucionaram seus processos com nossa tecnologia.
              </p>
              
              <div className="space-y-6">
                {[
                  { label: "Inovação constante em IA", value: "100%", icon: "🤖", color: "blue" },
                  { label: "Atendimento personalizado", value: "24/7", icon: "💬", color: "purple" },
                  { label: "Resultados comprovados", value: "+200%", icon: "📈", color: "emerald" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-xl mr-4 flex items-center justify-center text-xl`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">{item.label}</div>
                      <div className="text-gray-300 text-sm">Performance superior</div>
                    </div>
                    <div className={`text-2xl font-bold text-${item.color}-400`}>{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-8 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
                
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold mb-8">Métricas de Impacto</h3>
                  
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div>
                      <div className="text-4xl font-bold mb-2">24/7</div>
                      <div className="text-sm text-blue-200">Atendimento</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">+75%</div>
                      <div className="text-sm text-blue-200">Conversão</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">-60%</div>
                      <div className="text-sm text-blue-200">Tempo Admin</div>
                    </div>
                  </div>
                  
                  <div className="text-blue-100 text-sm">
                    Resultados reais de nossos clientes
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20" />
          {[...Array(20)].map((_, i) => (
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
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Fale conosco e descubra como nossa IA pode revolucionar seu atendimento
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105"
                onClick={() => {
                  const message = encodeURIComponent("Olá! Gostaria de conhecer mais sobre os produtos da IntegraDev.IA");
                  window.open(`https://wa.me/552138282956?text=${message}`, "_blank");
                }}
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                Falar com Especialista
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-lg transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/produtos">
                  <Award className="mr-2 h-5 w-5" />
                  Ver Produtos
                </Link>
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