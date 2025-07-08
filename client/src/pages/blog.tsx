import { motion } from "framer-motion";
import AnimatedSection from "../components/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Logo from "@/components/logo";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Como a IA está transformando o atendimento ao cliente",
      excerpt: "Descubra como os agentes de IA estão revolucionando a forma como empresas se comunicam com seus clientes, oferecendo respostas instantâneas e personalizadas.",
      date: "2025-01-05",
      author: "Equipe IntegraDev.IA",
      readTime: "5 min",
      category: "Inteligência Artificial",
      slug: "ia-transformando-atendimento-cliente"
    },
    {
      id: 2,
      title: "Integração WhatsApp Business: Guia Completo",
      excerpt: "Aprenda a integrar sua empresa ao WhatsApp Business com agentes de IA, automatizando respostas e melhorando a experiência do cliente.",
      date: "2025-01-03",
      author: "Equipe IntegraDev.IA",
      readTime: "8 min",
      category: "Automação",
      slug: "whatsapp-business-guia-completo"
    },
    {
      id: 3,
      title: "ROI em Automação: Cases de Sucesso",
      excerpt: "Conheça casos reais de empresas que implementaram nossas soluções e os resultados impressionantes que obtiveram.",
      date: "2025-01-01",
      author: "Equipe IntegraDev.IA",
      readTime: "6 min",
      category: "Cases",
      slug: "roi-automacao-cases-sucesso"
    },
    {
      id: 4,
      title: "Tendências de IA para 2025",
      excerpt: "Explore as principais tendências em inteligência artificial que moldarão o futuro dos negócios em 2025.",
      date: "2024-12-28",
      author: "Equipe IntegraDev.IA",
      readTime: "7 min",
      category: "Tendências",
      slug: "tendencias-ia-2025"
    }
  ];

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
              Nosso
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Insights, tendências e conhecimento sobre IA e automação para impulsionar seu negócio
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={16} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <Button 
                      variant="outline" 
                      className="w-full group hover:bg-blue-50 hover:border-blue-300 transition-colors"
                    >
                      Ler artigo
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Newsletter CTA */}
      <AnimatedSection className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Receba insights exclusivos sobre IA
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Cadastre-se em nossa newsletter e receba conteúdo exclusivo sobre inteligência artificial e automação
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              Cadastrar
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}