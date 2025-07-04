import { motion } from "framer-motion";
import HeroSection from "../components/hero-section";
import AnimatedSection from "../components/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Brain, ServerCog, TrendingUp, Users, CheckCircle, Target } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Transforme seu negócio com"
        subtitle="Inteligência Artificial"
        description="Desenvolvemos agentes de IA personalizados e sistemas integrados que revolucionam o atendimento ao cliente e otimizam processos empresariais"
        primaryAction={{
          label: "Conhecer Produtos",
          href: "/produtos"
        }}
        secondaryAction={{
          label: "Sobre Nós",
          href: "/sobre-nos"
        }}
      />

      {/* Company Highlights */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Por que escolher a IntegraDev.IA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos expertise em IA com desenvolvimento de sistemas para criar soluções que realmente impactam seu negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Brain className="text-white" size={32} />,
                title: "IA Personalizada",
                description: "Nossos agentes aprendem com seu negócio e fornecem respostas personalizadas em tempo real",
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100"
              },
              {
                icon: <ServerCog className="text-white" size={32} />,
                title: "Integração Completa",
                description: "Sistemas integrados com WhatsApp, CRMs e ferramentas que sua empresa já utiliza",
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-50 to-purple-100"
              },
              {
                icon: <TrendingUp className="text-white" size={32} />,
                title: "Resultados Mensuráveis",
                description: "Aumento comprovado na eficiência do atendimento e conversão de leads",
                gradient: "from-emerald-500 to-emerald-600",
                bgGradient: "from-emerald-50 to-emerald-100"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-br ${item.bgGradient} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Mission and Values */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Democratizar o acesso à inteligência artificial para empresas de todos os tamanhos, 
                criando soluções que transformam a forma como você se conecta com seus clientes.
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
          </div>
        </div>
      </AnimatedSection>

      {/* Company Stats */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Números que Impressionam
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossa experiência se reflete em resultados concretos para nossos clientes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Clientes Atendidos", icon: <Users size={40} /> },
              { number: "500+", label: "Agentes IA Criados", icon: <Brain size={40} /> },
              { number: "75%", label: "Aumento em Conversões", icon: <TrendingUp size={40} /> },
              { number: "24/7", label: "Atendimento Automático", icon: <CheckCircle size={40} /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Fale conosco e descubra como nossa IA pode revolucionar seu atendimento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                const message = encodeURIComponent("Olá! Gostaria de conhecer mais sobre os produtos da IntegraDev.IA");
                window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
              }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Falar com Especialista
            </Button>
            <Link href="/produtos">
              <Button 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border-white/20"
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
