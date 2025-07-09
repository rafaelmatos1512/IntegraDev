import { motion } from "framer-motion";
import HeroSection from "../components/hero-section";
import AnimatedSection from "../components/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Brain, ServerCog, TrendingUp, Users, CheckCircle, Target } from "lucide-react";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-8"
          >
            <Logo size={120} showText={false} />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transforme seu negócio com
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Inteligência Artificial
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Desenvolvemos agentes de IA personalizados e sistemas integrados que revolucionam o atendimento ao cliente e otimizam processos empresariais
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/produtos">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Conhecer Produtos
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
                onClick={() => window.open('https://integrapsis.com.br/', '_blank')}
              >
                Site Principal
              </Button>
              <Link href="/sobre-nos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                  Sobre Nós
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Company Highlights */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a IntegraPsis?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Combinamos expertise em IA com desenvolvimento de sistemas para criar soluções que realmente impactam seu negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain className="text-white" size={28} />,
                title: "IA Personalizada",
                description: "Agentes que aprendem com seu negócio e fornecem respostas personalizadas",
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
              },
              {
                icon: <ServerCog className="text-white" size={28} />,
                title: "Integração Completa",
                description: "Sistemas integrados com WhatsApp, CRMs e suas ferramentas atuais",
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-50 to-purple-100",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
              },
              {
                icon: <TrendingUp className="text-white" size={28} />,
                title: "Resultados Mensuráveis",
                description: "Aumento comprovado na eficiência do atendimento e conversão de leads",
                gradient: "from-emerald-500 to-emerald-600",
                bgGradient: "from-emerald-50 to-emerald-100",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center`}>
                    {item.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Visual Showcase */}
      <AnimatedSection className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tecnologia que Transforma
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nossa plataforma combina as mais avançadas tecnologias de IA para criar soluções 
                que realmente fazem a diferença no seu negócio.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Inovação constante em IA", color: "bg-blue-600" },
                  { label: "Atendimento personalizado", color: "bg-purple-600" },
                  { label: "Resultados comprovados", color: "bg-emerald-600" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-3 h-3 ${item.color} rounded-full mr-4`}></div>
                    <span className="text-gray-700 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Advanced AI technology" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Company Stats */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Números que Impressionam
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nossa experiência se reflete em resultados concretos
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "100+", label: "Clientes Atendidos", icon: <Users size={32} />, gradient: "from-blue-500 to-blue-600" },
              { number: "500+", label: "Agentes IA Criados", icon: <Brain size={32} />, gradient: "from-purple-500 to-purple-600" },
              { number: "75%", label: "Aumento em Conversões", icon: <TrendingUp size={32} />, gradient: "from-emerald-500 to-emerald-600" },
              { number: "24/7", label: "Atendimento Automático", icon: <CheckCircle size={32} />, gradient: "from-orange-500 to-orange-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white">{stat.icon}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Fale conosco e descubra como nossa IA pode revolucionar seu atendimento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                const message = encodeURIComponent("Olá! Gostaria de conhecer mais sobre os produtos da IntegraPsis");
                window.open(`https://wa.me/552138282956?text=${message}`, "_blank");
              }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Falar com Especialista
            </Button>
            <Link href="/produtos">
              <Button 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border-white/20"
              >
                Ver Produtos
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
