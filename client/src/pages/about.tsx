import { motion } from "framer-motion";
import HeroSection from "../components/hero-section";
import AnimatedSection from "../components/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code, Database, Server, Smartphone, Globe, Cpu, Users, Award, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Sobre a"
        subtitle="IntegraDev.IA"
        description="Conheça nossa história, valores e as tecnologias que utilizamos para criar soluções inovadoras em inteligência artificial"
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
        className="min-h-[70vh]"
      />

      {/* Who We Are */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quem Somos</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A IntegraDev.IA nasceu da paixão por tecnologia e do desejo de tornar a inteligência artificial 
                acessível para empresas de todos os portes. Nossa equipe multidisciplinar combina expertise em 
                desenvolvimento de software, machine learning e experiência do usuário.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Desde nossa fundação, já ajudamos mais de 100 empresas a implementar soluções de IA que 
                transformaram seus processos de atendimento e vendas, gerando resultados mensuráveis e 
                sustentáveis.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-gray-600">Agentes IA Criados</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Development workspace" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Values */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam nossa empresa e moldam cada solução que desenvolvemos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="text-blue-600" size={32} />,
                title: "Foco no Cliente",
                description: "Cada solução é pensada para atender as necessidades específicas de cada cliente"
              },
              {
                icon: <Zap className="text-purple-600" size={32} />,
                title: "Inovação Constante",
                description: "Sempre buscamos as tecnologias mais avançadas para criar soluções de ponta"
              },
              {
                icon: <Award className="text-emerald-600" size={32} />,
                title: "Excelência",
                description: "Comprometimento com a qualidade e resultados em cada projeto desenvolvido"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Technologies */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tecnologias Utilizadas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Utilizamos as mais avançadas tecnologias para criar soluções robustas e escaláveis
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="text-white" size={32} />,
                name: "Python",
                description: "Machine Learning",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: <Server className="text-white" size={32} />,
                name: "Node.js",
                description: "Backend APIs",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: <Globe className="text-white" size={32} />,
                name: "React",
                description: "Frontend",
                gradient: "from-blue-400 to-blue-500"
              },
              {
                icon: <Database className="text-white" size={32} />,
                name: "MongoDB",
                description: "Database",
                gradient: "from-orange-500 to-orange-600"
              },
              {
                icon: <Smartphone className="text-white" size={32} />,
                name: "WhatsApp API",
                description: "Integração",
                gradient: "from-green-400 to-green-500"
              },
              {
                icon: <Cpu className="text-white" size={32} />,
                name: "TensorFlow",
                description: "Deep Learning",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: <Server className="text-white" size={32} />,
                name: "Docker",
                description: "Containerização",
                gradient: "from-blue-600 to-blue-700"
              },
              {
                icon: <Globe className="text-white" size={32} />,
                name: "AWS",
                description: "Cloud Services",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Blog Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Blog Institucional</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fique por dentro das últimas novidades em IA e desenvolvimento de sistemas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
                category: "IA & Automação",
                title: "Como a IA está transformando o atendimento ao cliente",
                description: "Descubra como agentes inteligentes podem revolucionar a experiência do seu cliente...",
                categoryColor: "text-blue-600"
              },
              {
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
                category: "Transformação Digital",
                title: "Integração WhatsApp: O futuro das vendas",
                description: "Saiba como integrar seu sistema de vendas com WhatsApp para aumentar conversões...",
                categoryColor: "text-purple-600"
              },
              {
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
                category: "Casos de Sucesso",
                title: "Como aumentamos 300% a eficiência de uma corretora",
                description: "Conheça a história de sucesso da implementação do nosso sistema IntegraCorretora...",
                categoryColor: "text-emerald-600"
              }
            ].map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className={`text-sm font-medium mb-2 ${post.categoryColor}`}>{post.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <Button variant="ghost" className={`${post.categoryColor} hover:bg-gray-50 p-0`}>
                    Ler mais →
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Equipe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profissionais especializados trabalhando juntos para criar soluções inovadoras
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Desenvolvedores</h3>
              <p className="text-gray-600">Especialistas em frontend, backend e mobile</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cientistas de Dados</h3>
              <p className="text-gray-600">Experts em machine learning e IA</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consultores</h3>
              <p className="text-gray-600">Especialistas em estratégia e negócios</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vamos transformar seu negócio juntos?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos ajudar sua empresa a crescer com inteligência artificial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a IntegraDev.IA");
                window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
              }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Falar Conosco
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
