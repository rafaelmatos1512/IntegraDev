import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  User, 
  ChevronRight, 
  Sparkles, 
  TrendingUp, 
  Bot, 
  Zap,
  Target,
  Star,
  Globe,
  Shield,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import Logo from "@/components/logo";
import AnimatedSection from "@/components/animated-section";
import { FaWhatsapp } from "react-icons/fa";

export default function Blog() {
  const [expandedPost, setExpandedPost] = useState(null);

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

  const blogPosts = [
    {
      id: 1,
      title: "Como a IA está transformando o atendimento ao cliente",
      excerpt: "Descubra como os agentes de IA estão revolucionando a forma como empresas se comunicam com seus clientes, oferecendo respostas instantâneas e personalizadas.",
      content: "A inteligência artificial (IA) está redefinindo o padrão de atendimento ao cliente. Com chatbots e assistentes virtuais, as empresas podem oferecer suporte 24/7, responder a perguntas frequentes instantaneamente e resolver problemas simples sem intervenção humana. Isso não apenas melhora a satisfação do cliente, mas também libera a equipe humana para se concentrar em questões mais complexas e estratégicas. A personalização é outra grande vantagem. A IA pode analisar o histórico de um cliente e fornecer recomendações e soluções sob medida, criando uma experiência única e mais valiosa. A implementação de IA no atendimento ao cliente é um passo crucial para empresas que desejam se manter competitivas na era digital.",
      date: "2025-01-05",
      author: "Equipe IntegraDev.IA",
      readTime: "5 min",
      category: "Inteligência Artificial",
      gradient: "from-blue-500 to-blue-600",
      icon: Bot
    },
    {
      id: 2,
      title: "Integração WhatsApp Business: Guia Completo",
      excerpt: "Aprenda a integrar sua empresa ao WhatsApp Business com agentes de IA, automatizando respostas e melhorando a experiência do cliente.",
      content: "O WhatsApp Business é uma ferramenta poderosa para comunicação com o cliente. Ao integrá-lo com agentes de IA, você pode automatizar o envio de notificações, confirmações de pedidos e respostas a perguntas comuns. Este guia completo mostra o passo a passo para configurar a API do WhatsApp Business, treinar um agente de IA com as informações da sua empresa e implantar um sistema que funcione de forma autônoma. Abordaremos as melhores práticas para garantir que a comunicação seja natural e eficaz, além de dicas para analisar os dados e otimizar o desempenho do seu agente virtual. A automação via WhatsApp não só economiza tempo, mas também aproxima sua marca dos clientes.",
      date: "2025-01-03",
      author: "Equipe IntegraDev.IA",
      readTime: "8 min",
      category: "Automação",
      gradient: "from-purple-500 to-purple-600",
      icon: Zap
    },
    {
      id: 3,
      title: "ROI em Automação: Cases de Sucesso",
      excerpt: "Conheça casos reais de empresas que implementaram nossas soluções e os resultados impressionantes que obtiveram.",
      content: "Muitas empresas hesitam em investir em automação por não terem certeza do retorno sobre o investimento (ROI). Neste artigo, apresentamos cases de sucesso de diferentes setores que demonstram o impacto positivo da automação. Desde a redução de custos operacionais até o aumento nas vendas e na retenção de clientes, os resultados são claros. Analisaremos os desafios que essas empresas enfrentavam, a solução de automação que implementaram e os dados que comprovam o ROI. Estes exemplos práticos servirão de inspiração e guia para você planejar seus próprios investimentos em tecnologia e automação.",
      date: "2025-01-01",
      author: "Equipe IntegraDev.IA",
      readTime: "6 min",
      category: "Cases",
      gradient: "from-emerald-500 to-emerald-600",
      icon: TrendingUp
    },
    {
      id: 4,
      title: "Tendências de IA para 2025",
      excerpt: "Explore as principais tendências em inteligência artificial que moldarão o futuro dos negócios em 2025.",
      content: "O campo da inteligência artificial está em constante evolução. Para 2025, esperamos ver avanços significativos em áreas como IA generativa, aprendizado de máquina federado e IA explicável (XAI). A IA generativa continuará a transformar a criação de conteúdo, enquanto o aprendizado federado permitirá treinar modelos em dados descentralizados, melhorando a privacidade. A XAI se tornará cada vez mais importante para a transparência e a confiança nos sistemas de IA. Manter-se atualizado sobre essas tendências é fundamental para que as empresas possam inovar e se adaptar às novas oportunidades que a tecnologia oferece.",
      date: "2024-12-28",
      author: "Equipe IntegraDev.IA",
      readTime: "7 min",
      category: "Tendências",
      gradient: "from-cyan-500 to-cyan-600",
      icon: Sparkles
    }
  ];

  const handleTogglePost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

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
              Nosso
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block bg-[length:200%_100%]"
                animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                Blog
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Insights, tendências e conhecimento sobre inteligência artificial e automação 
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
                <span className="text-sm">Conteúdo sempre atualizado</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles size={16} className="text-yellow-400" />
                <span className="text-sm">Insights exclusivos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe size={16} className="text-blue-400" />
                <span className="text-sm">Tendências globais</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Section */}
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
                <Bot className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Últimos Artigos
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Descubra as últimas novidades e tendências do mundo da inteligência artificial
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                {/* Header */}
                <div className={`relative h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-full border-2 border-white/20"></div>
                    <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-white/10"></div>
                    <div className="absolute bottom-6 left-8 w-12 h-12 rounded-full border border-white/20"></div>
                  </div>
                  
                  <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
                    <post.icon className="text-white" size={56} />
                  </div>
                  
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <span className="text-white text-sm font-medium">{post.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Meta information */}
                  <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Read more button */}
                  <button
                    onClick={() => handleTogglePost(post.id)}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 group/btn mb-4"
                  >
                    {expandedPost === post.id ? 'Ler menos' : 'Ler mais'}
                    <ChevronRight 
                      size={16} 
                      className={`ml-1 transition-transform duration-200 group-hover/btn:translate-x-1 ${
                        expandedPost === post.id ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>

                  {/* Expanded content */}
                  {expandedPost === post.id && (
                    <motion.div 
                      className="pt-6 border-t border-gray-100"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-700 leading-relaxed">
                        {post.content}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Newsletter Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mr-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Fique por dentro das novidades
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Cadastre-se em nossa newsletter e receba conteúdo exclusivo sobre inteligência artificial e automação
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-gray-100 shadow-xl">
              <div className="text-center mb-8">
                <Sparkles className="mx-auto mb-4 text-blue-500" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Receba insights exclusivos sobre IA
                </h3>
                <p className="text-gray-600">
                  Seja o primeiro a saber sobre novas tendências e soluções
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-lg"
                  />
                </div>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Target className="mr-2 h-5 w-5" />
                  Cadastrar
                </Button>
              </div>

              <div className="mt-6 flex items-center justify-center gap-8 text-gray-500 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield size={16} className="text-green-500" />
                  <span>100% seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-yellow-500" />
                  <span>Conteúdo premium</span>
                </div>
              </div>
            </div>
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
              Interessado em implementar IA no seu negócio?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Fale conosco e descubra como podemos criar a solução perfeita para sua empresa
            </p>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105"
                onClick={() => {
                  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre as soluções de IA da IntegraDev.IA");
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
