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
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        
        {/* Animated tech background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-20 w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-teal-400 rounded-full animate-ping"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
              <Logo size={120} showText={false} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transforme seu negócio com
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent block">
                Inteligência Artificial
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Desenvolvemos agentes de IA personalizados e sistemas integrados que revolucionam o atendimento ao cliente e otimizam processos empresariais
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/produtos">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-500/20">
                  Conhecer Produtos
                </Button>
              </Link>
              <Link href="/sobre-nos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
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
              Por que escolher a IntegraDev.IA?
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
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-40 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90`} />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white opacity-20 text-8xl">
                      {item.icon}
                    </div>
                  </div>
                  <div className={`absolute bottom-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg border border-white/30`}>
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
                  { label: "Inovação constante em IA", color: "bg-blue-600", icon: "🤖" },
                  { label: "Atendimento personalizado", color: "bg-purple-600", icon: "💬" },
                  { label: "Resultados comprovados", color: "bg-emerald-600", icon: "📈" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className={`w-10 h-10 ${item.color} rounded-full mr-4 flex items-center justify-center text-white font-bold`}>
                      {item.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-3 gap-4 text-white">
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm opacity-80">Atendimento</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">+75%</div>
                    <div className="text-sm opacity-80">Conversão</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">-60%</div>
                    <div className="text-sm opacity-80">Tempo Admin</div>
                  </div>
                </div>
                <div className="mt-6 text-center text-white">
                  <div className="text-lg font-semibold">Resultados Comprovados</div>
                  <div className="text-sm opacity-80">Métricas reais de nossos clientes</div>
                </div>
              </div>
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
              { number: "50+", label: "Clientes Atendidos", icon: <Users size={32} />, gradient: "from-blue-500 to-blue-600" },
              { number: "100+", label: "Agentes IA Criados", icon: <Brain size={32} />, gradient: "from-purple-500 to-purple-600" },
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
                const message = encodeURIComponent("Olá! Gostaria de conhecer mais sobre os produtos da IntegraDev.IA");
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
                Ver Produtos
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
