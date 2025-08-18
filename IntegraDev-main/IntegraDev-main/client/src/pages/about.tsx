import { motion } from "framer-motion";
import AnimatedSection from "../components/animated-section";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Logo from "@/components/logo";
import { FaWhatsapp } from "react-icons/fa";
import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Globe, 
  Cpu, 
  Users, 
  Award, 
  Target, 
  Zap,
  Brain,
  Shield,
  Rocket,
  Heart,
  Star,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function About() {
  const [, setLocation] = useLocation();

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

  const values = [
    {
      icon: Brain,
      title: "Inovação",
      description: "Sempre na vanguarda da tecnologia IA",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Soluções seguras e robustas",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Humanização",
      description: "IA que aproxima pessoas",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Eficiência",
      description: "Resultados rápidos e mensuráveis",
      color: "from-orange-500 to-red-500"
    }
  ];

  const technologies = [
    { icon: Code, name: "React & Next.js", level: 95 },
    { icon: Database, name: "Node.js & Python", level: 90 },
    { icon: Brain, name: "Machine Learning", level: 88 },
    { icon: Server, name: "Cloud Computing", level: 92 },
    { icon: Smartphone, name: "Mobile Development", level: 85 },
    { icon: Globe, name: "APIs & Integrations", level: 94 }
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
              Sobre a
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block bg-[length:200%_100%]"
                animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                IntegraDev.IA
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transformamos ideias em realidade através da inteligência artificial. 
              Conheça nossa jornada, valores e a tecnologia que move o futuro.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <AnimatedSection id="nossa-historia" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Nossa História
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  A <span className="font-semibold text-blue-600">IntegraDev.IA</span> nasceu em 2025 da visão de 
                  democratizar a inteligência artificial para empresas de todos os portes. Nossa jornada começou 
                  quando percebemos o gap entre a tecnologia avançada e sua aplicação prática no mundo real.
                </p>
                <p className="text-lg">
                  Com uma equipe multidisciplinar de desenvolvedores, cientistas de dados e especialistas em UX, 
                  criamos soluções que não apenas funcionam, mas transformam a maneira como as empresas se 
                  relacionam com seus clientes.
                </p>
                <p className="text-lg">
                  Hoje, orgulhamo-nos de ter <span className="font-semibold text-purple-600">impactado positivamente</span> 
                  mais de 50 empresas, criando agentes de IA que não apenas automatizam processos, mas humanizam 
                  a experiência digital.
                </p>
              </div>

              <motion.div 
                className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Nossa Missão</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Tornar a inteligência artificial uma ferramenta acessível e poderosa para impulsionar 
                  o crescimento de negócios, mantendo sempre o foco na experiência humana.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-8 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
                
                <div className="relative z-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 mb-6"
                  >
                    <Brain className="w-full h-full" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4">Tecnologia de Ponta</h3>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    Utilizamos as mais avançadas tecnologias de IA, incluindo modelos de linguagem natural, 
                    machine learning e processamento de linguagem natural para criar soluções que realmente fazem a diferença.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">99.9%</div>
                      <div className="text-sm text-blue-200">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">&lt;2s</div>
                      <div className="text-sm text-blue-200">Tempo de Resposta</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam cada decisão e inovação em nossa jornada
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Technologies Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossa Stack Tecnológica
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ferramentas e tecnologias de última geração para criar soluções excepcionais
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between items-center text-sm text-gray-300 mb-1">
                    <span>Proficiência</span>
                    <span>{tech.level}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
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
              Pronto para Transformar Seu Negócio?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Junte-se a mais de 50 empresas que já revolucionaram seus processos com nossa IA
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://api.whatsapp.com/send?phone=5521994962723&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20IntegraDev.IA!" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 w-full"
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  Falar com Especialista
                </Button>
              </a>
              
              <Button 
                onClick={() => setLocation('/produtos')}
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-lg transition-all duration-300 hover:scale-105"
              >
                <Award className="mr-2 h-5 w-5" />
                Ver Nosso Portfólio
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}