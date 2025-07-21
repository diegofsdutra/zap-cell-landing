import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  CheckCircle,
  Users,
  Clock,
  Award,
  Target,
  Wrench,
  Smartphone,
  Battery,
  Cpu,
  Shield,
  MessageCircle,
  Star,
  Play,
  ArrowRight,
  Zap,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ZapCellLanding() {
  const whatsappNumber = "5531999999999"
  const whatsappMessage = "Oi! Quero garantir minha vaga na turma de julho de manutenção de celular. Ainda tem vaga disponível?"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200/50 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1"></div>
            <div className="flex-1 flex justify-center">
              <Image src="/zapcell-header.png" width={180} height={60} alt="Zap Cell" className="h-10" />
            </div>
            <div className="flex-1 flex justify-end">
              <Badge className="bg-gradient-to-r from-[#36b320] to-[#2a8f1a] text-white border-0 hidden sm:flex px-4 py-2 font-bold shadow-lg">
                <MapPin className="h-4 w-4 mr-2" />
                100% PRESENCIAL
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Notice */}
      <div className="bg-gradient-to-r from-[#228B22] to-[#1F7A1F] text-white py-4 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-center space-x-3">
            <p className="font-medium text-sm md:text-base">
              🔥 ÚLTIMAS 3 VAGAS - Turma Julho 2025
            </p>
          </div>
        </div>
      </div>

      {/* Video Hook Section */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-gradient-to-r from-[#36b320] to-[#2a8f1a] text-white border-0 mb-8 px-4 py-2 text-base font-bold">VÍDEO EXCLUSIVO</Badge>
            
            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
              Como Ganhar R$ 300 em 5 Minutos
              <span className="block bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mt-2">
                (Técnica que Assistências Escondem)
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl font-semibold text-gray-700 mb-8 text-center max-w-2xl mx-auto">
              Demonstração real de troca de tela - Aprenda a técnica completa
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 p-4 rounded-xl shadow-md">
                <p className="font-bold text-green-800">Demonstração 100% real</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 p-4 rounded-xl shadow-md">
                <p className="font-bold text-green-800">Celular quebrado vira novo</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 p-4 rounded-xl shadow-md">
                <p className="font-bold text-green-800">Técnica profissional revelada</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-green-200 border-2 border-green-300 p-4 rounded-xl mb-10 max-w-2xl mx-auto shadow-md">
              <p className="text-xl font-bold text-green-800 mb-1">
                VALOR REAL: R$ 300 por reparo
              </p>
              <p className="text-base font-semibold text-green-700">
                Aprenda GRÁTIS em 5 minutos
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#36b320] to-[#2a8f1a] text-white p-3 rounded-xl mb-8 max-w-lg mx-auto shadow-md">
              <p className="text-lg font-bold mb-1">ASSISTA AGORA</p>
              <p className="text-green-100 text-sm">100% gratuito • Sem cadastro • Sem enrolação</p>
            </div>

            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
              <iframe
                src="https://player.vimeo.com/video/1103287863?autoplay=1&loop=0&muted=1"
                className="w-full aspect-video relative z-10"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Como Trocar Tela de Celular em 5 Minutos"
              ></iframe>
            </div>
            

            <div className="max-w-4xl mx-auto mt-16 mb-8">
              <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 border-2 border-green-200 rounded-3xl p-8 lg:p-12 shadow-lg text-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  FICOU FÁCIL, CERTO?
                </h3>
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-4">
                  Agora imagine aprendendo essas <span className="font-bold text-green-600">40+ técnicas</span> <span className="font-bold text-[#36b320] bg-green-50 px-2 py-1 rounded">PRESENCIALMENTE</span>, na prática
                </p>
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
                  e faturando <span className="font-bold text-green-600">R$ 3.000+/mês</span>
                </p>
                <p className="text-lg text-gray-600 font-medium mb-4">
                  Só restam 3 vagas para a turma de julho!
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  Veja como garantir sua vaga abaixo ↓
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="bg-[#36b320] text-white border-0 mb-4">
              Oportunidade de Mercado
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Por que AGORA é o
              <span className="block bg-gradient-to-r from-[#36b320] to-green-400 bg-clip-text text-transparent">
                melhor momento?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                number: "240Mi",
                label: "smartphones no Brasil",
                subtitle: "E crescendo 15% ao ano",
                icon: Smartphone
              },
              {
                number: "87%",
                label: "quebram a tela por ano",
                subtitle: "= 200 milhões de reparos/ano",
                icon: Shield
              },
              {
                number: "R$ 300",
                label: "preço médio do reparo",
                subtitle: "Mercado de R$ 70 bilhões",
                icon: Target
              },
              {
                number: "73%",
                label: "preferem consertar",
                subtitle: "Ao invés de comprar novo",
                icon: Award
              }
            ].map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-center group hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#36b320] to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-green-300 font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.subtitle}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#228B22] to-[#1F7A1F] p-8 rounded-3xl shadow-2xl text-center mb-8">
            <h3 className="text-3xl font-bold mb-6 text-white">PROBLEMA: Falta de técnicos qualificados</h3>
            <p className="text-xl mb-6 text-green-100">
              Para cada 1.000 aparelhos quebrados, existem apenas 3 técnicos capacitados
            </p>
            <p className="text-2xl font-bold text-white">
              = OPORTUNIDADE ÚNICA para quem se capacitar AGORA!
            </p>
          </div>

          <div className="text-center mt-12 mb-8">
            <p className="text-xl text-gray-300 mb-4">
              Quer dominar essas técnicas e aproveitar essa oportunidade?
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-[#36b320] to-green-400 bg-clip-text text-transparent">
              Veja como abaixo ↓
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#36b320]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="bg-[#36b320]/10 text-[#36b320] border-[#36b320]/20 mb-4">
              Por que escolher a Zap Cell?
            </Badge>
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              5 motivos para não perder
              <span className="block bg-gradient-to-r from-[#36b320] to-[#2a8f1a] bg-clip-text text-transparent">
                essa oportunidade
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "100% Presencial",
                description: "Aprenda na prática, com acompanhamento direto do professor",
                color: "from-[#228B22] to-[#1F7A1F]",
              },
              {
                icon: Wrench,
                title: "Ferramentas Incluídas",
                description: "Todas as ferramentas necessárias fornecidas durante o curso",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Award,
                title: "Certificado Reconhecido",
                description: "Certificado de conclusão reconhecido no mercado",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: Clock,
                title: "Horários Flexíveis",
                description: "Turmas nos períodos manhã, tarde e noite",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Target,
                title: "Suporte Pós-Curso",
                description: "Tire dúvidas mesmo após finalizar o curso",
                color: "from-red-500 to-red-600",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-8 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#228B22]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-200">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-green-600 to-green-700 text-white border-0 px-6 py-3 text-base font-bold">
                    CURSO PRESENCIAL - JULHO 2025 • ÚLTIMAS 3 VAGAS
                  </Badge>
                  <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                      Domine a
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                      Manutenção
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                      de Celular
                    </span>
                  </h1>
                  <div className="mb-6">
                    <div className="inline-block bg-gradient-to-r from-[#36b320] to-[#2a8f1a] text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-lg mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        <span>100% PRESENCIAL</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Transforme sua paixão por tecnologia em uma profissão lucrativa. Curso 100% <span className="font-bold text-[#36b320]">PRESENCIAL</span> e prático - Aprenda na nossa oficina em
                    <span className="font-semibold text-green-600"> Contagem-MG</span> com equipamentos profissionais.
                  </p>

                  <div className="space-y-16">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                      <div className="bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-300 p-6 rounded-2xl text-center shadow-lg transform hover:scale-105 transition-all duration-300">
                        <div className="text-4xl font-extrabold text-green-700 mb-2">100%</div>
                        <div className="text-sm font-medium text-green-800">Presencial</div>
                        <div className="text-xs text-green-600 mt-1">Aprenda na prática, manuseando equipamentos reais, com professor ao seu lado</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-200 to-green-300 border-3 border-green-400 p-8 rounded-3xl text-center shadow-2xl transform hover:scale-110 transition-all duration-300 relative">
                        <div className="text-5xl font-black text-green-800 mb-3">R$ 3.000+</div>
                        <div className="text-base font-bold text-green-900">Renda mensal média</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-300 p-6 rounded-2xl text-center shadow-lg transform hover:scale-105 transition-all duration-300">
                        <div className="text-4xl font-extrabold text-green-700 mb-2">40+</div>
                        <div className="text-sm font-medium text-green-800">Técnicas como essa</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Clock className="h-5 w-5 text-green-600" />
                      <span className="font-bold text-green-700">ÚLTIMAS 3 VAGAS ENCERRAM EM:</span>
                    </div>
                    <div className="flex justify-center space-x-4 text-center">
                      <div className="bg-gradient-to-br from-green-600 to-green-700 text-white px-5 py-4 rounded-xl font-bold shadow-lg">
                        <div className="text-3xl">02</div>
                        <div className="text-xs">DIAS</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-600 to-green-700 text-white px-5 py-4 rounded-xl font-bold shadow-lg">
                        <div className="text-3xl">14</div>
                        <div className="text-xs">HORAS</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-600 to-green-700 text-white px-5 py-4 rounded-xl font-bold shadow-lg">
                        <div className="text-3xl">23</div>
                        <div className="text-xs">MIN</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-10">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-2">
                      Não perca esta oportunidade única
                    </p>
                    <p className="text-xs text-gray-400 mb-6">
                      Próxima turma só abre em dezembro/2025
                    </p>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-12 py-10 text-xl rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-500 group transform hover:scale-110 hover:rotate-1 border-2 border-green-500"
                      asChild
                    >
                      <Link
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                      >
                        <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
GARANTIR MINHA VAGA (Últimas 3 vagas)
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-8 pt-8">
                  <div className="bg-green-50 border border-green-200 rounded-full px-4 py-2 shadow-md">
                    <div className="flex items-center space-x-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full border-3 border-white shadow-lg"
                          ></div>
                        ))}
                      </div>
                      <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        500+ FORMADOS
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-full px-4 py-2 shadow-md">
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                      ))}
                      <div className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full ml-2">
                        4.9/5 - Avaliação dos alunos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#36b320]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-[#36b320] text-white border-0 mb-4">
                Nossas Garantias
              </Badge>
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
                Seu sucesso é
                <span className="block bg-gradient-to-r from-[#36b320] to-[#2a8f1a] bg-clip-text text-transparent">
                  nossa prioridade
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: CheckCircle,
                  title: "Aulas de reforço GRATUITAS",
                  description: "Se tiver dificuldade, oferecemos aulas extras sem custo até você dominar 100%."
                },
                {
                  icon: Users,
                  title: "100% de aprovação",
                  description: "Em 8 anos de curso, TODOS os 500+ alunos se formaram com sucesso. Você será o próximo!"
                },
                {
                  icon: Clock,
                  title: "Suporte de 6 meses",
                  description: "Mesmo após formado, você terá 6 meses de suporte para tirar dúvidas via WhatsApp."
                },
                {
                  icon: Award,
                  title: "Certificado garantido",
                  description: "Certificado de conclusão reconhecido pelo mercado, emitido ao final do curso."
                },
                {
                  icon: Wrench,
                  title: "Acesso às ferramentas",
                  description: "Use nossas ferramentas profissionais durante todo o curso, sem custo adicional."
                },
                {
                  icon: Target,
                  title: "Acompanhamento individual",
                  description: "Professor dedicado acompanha seu progresso pessoalmente em cada aula."
                }
              ].map((guarantee, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#36b320] to-[#2a8f1a] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <guarantee.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{guarantee.title}</h3>
                    <p className="text-gray-600">{guarantee.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-md mx-auto">
              <div className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-[#36b320]/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#36b320] to-[#2a8f1a] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    GARANTIA DE SUCESSO
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Garantimos seu sucesso ou oferecemos aulas extras gratuitas até você dominar.
                  </p>
                  <div className="bg-gradient-to-r from-[#36b320] to-[#2a8f1a] p-4 rounded-2xl">
                    <p className="text-white font-bold text-lg">
                      "500+ alunos formados com sucesso!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#36b320]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="bg-[#36b320]/10 text-[#36b320] border-[#36b320]/20 mb-4">
              Transformações Reais
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nossos alunos
              <span className="block bg-gradient-to-r from-[#36b320] to-[#2a8f1a] bg-clip-text text-transparent">
                mudaram de vida
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Silva, 28 anos - Eldorado, Contagem-MG",
                before: "Desempregado há 8 meses",
                after: "R$ 3.200/mês em apenas 4 meses",
                image: "/placeholder.svg?height=80&width=80",
                quote: "Saí do desespero para ter agenda lotada! Mudou completamente minha vida.",
                verified: true
              },
              {
                name: "Ana Costa, 34 anos - Industrial, Contagem-MG", 
                before: "Balconista de loja",
                after: "R$ 4.500/mês próprio negócio",
                image: "/placeholder.svg?height=80&width=80",
                quote: "De balconista para empresária! Hoje sou dona do meu tempo.",
                verified: true
              },
              {
                name: "Pedro Santos, 22 anos - Ressaca, Contagem-MG",
                before: "Estudante sem renda",
                after: "R$ 2.800/mês trabalhando apenas 4h/dia",
                image: "/placeholder.svg?height=80&width=80", 
                quote: "Pago minha faculdade e ainda ajudo em casa. Melhor decisão da minha vida!",
                verified: true
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-white">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{testimonial.name}</h4>
                      <div className="flex space-x-1">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 border-l-4 border-gray-300 p-4 rounded">
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">ANTES:</span> {testimonial.before}
                      </p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-300 p-4 rounded">
                      <p className="text-sm text-green-700">
                        <span className="font-medium">DEPOIS:</span> {testimonial.after}
                      </p>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-600 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
          
        </div>
      </section>

      {/* Second CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-200">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Última chance - apenas 3 vagas restantes
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                Não perca esta oportunidade única
              </p>
              <p className="text-base text-gray-500 mb-8">
                Próxima turma só abre em dezembro/2025
              </p>
              
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-10 py-8 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:scale-105 border-2 border-green-500"
                  asChild
                >
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                  >
                    <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    GARANTIR MINHA VAGA
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#228B22]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-[#36b320]/10 text-[#36b320] border-[#36b320]/20 mb-4">Seu Professor</Badge>
                <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Quem vai te
                  <span className="block bg-gradient-to-r from-[#36b320] to-[#2a8f1a] bg-clip-text text-transparent">
                    ensinar
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professor Harison Moreira</h3>
                  <p className="text-lg text-[#36b320] font-semibold mb-4">Proprietário da Zap Cell</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-300">Proprietário da Zap Cell</Badge>
                    <Badge className="bg-green-100 text-green-800 border-green-300">Especialista Certificado</Badge>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                  ZapCell mais de 8 anos transformando a vida de pessoas através da tecnologia. Já ajudou mais de 500 pessoas 
                  a conquistarem sua independência financeira no mercado de manutenção de celulares, com uma metodologia 
                  exclusiva e resultados comprovados.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <p className="text-green-800 font-semibold text-center">
                    Quer aprender com quem realmente entende?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: CheckCircle, text: "8+ anos de experiência" },
                    { icon: CheckCircle, text: "500+ alunos formados" },
                    { icon: CheckCircle, text: "97% dos alunos conseguem emprego" },
                    { icon: CheckCircle, text: "Metodologia exclusiva" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#36b320] to-[#2a8f1a] rounded-full flex items-center justify-center">
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#36b320] to-[#2a8f1a] rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                  <Image
                    src="/professor-harison.jpg"
                    alt="Professor Harison Moreira"
                    width={400}
                    height={500}
                    className="rounded-2xl w-full"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                ⭐ 500+ Alunos Aprovados
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#228B22]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="bg-[#36b320]/10 text-[#36b320] border-[#36b320]/20 mb-4">
              Dúvidas Frequentes
            </Badge>
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Tire suas
              <span className="block bg-gradient-to-r from-[#36b320] to-[#2a8f1a] bg-clip-text text-transparent">
                principais dúvidas
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                question: "Preciso ter experiência prévia em eletrônica?",
                answer: "NÃO! Nosso curso é pensado para iniciantes completos. Começamos desde o básico: como segurar as ferramentas, identificar componentes e fazer os primeiros diagnósticos. Mais de 80% dos nossos alunos nunca tinham mexido em eletrônica antes.",
                icon: Users
              },
              {
                question: "Quanto posso ganhar trabalhando com manutenção?",
                answer: "Nossos alunos ganham entre R$ 2.000 a R$ 8.000 por mês. Iniciantes: R$ 2.000-3.500. Com experiência: R$ 4.000-6.000. Próprio negócio: R$ 6.000-8.000+. Carlos (aluno) faturou R$ 12.000 no terceiro mês com assistência própria.",
                icon: Target
              },
              {
                question: "E se eu não conseguir aprender?",
                answer: "IMPOSSÍVEL não aprender! Temos método aprovado por 500+ alunos, aulas práticas individualizadas e professor dedicado. Oferecemos aulas de reforço GRATUITAS até você dominar completamente. Em 8 anos, 100% dos alunos se formaram com sucesso.",
                icon: Shield
              },
              {
                question: "Tem mercado na minha cidade?",
                answer: "SIM! O mercado de smartphones cresce 300% ao ano no Brasil. São 240 milhões de aparelhos em uso. Cada pessoa quebra a tela 1-2 vezes por ano. Em qualquer cidade, sempre tem demanda. Quanto menor a cidade, menos concorrência!",
                icon: Award
              },
              {
                question: "Qual a diferença para cursos online?",
                answer: "TOTAL! Online você vê, aqui você FAZ. Manuseio real de aparelhos, ferramentas profissionais, diagnóstico ao vivo, suporte direto do professor. Nossos alunos saem prontos para trabalhar no primeiro dia.",
                icon: Wrench
              },
              {
                question: "Quando começam as aulas de julho?",
                answer: "Turma de Julho inicia dia 28/07/2025. São apenas 8 vagas para garantir atendimento personalizado. ÚLTIMAS 3 VAGAS disponíveis. Próxima turma apenas em dezembro/2025.",
                icon: Clock
              }
            ].map((faq, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-[#36b320]/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#36b320] to-[#2a8f1a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <faq.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Ainda tem dúvidas? Fale conosco no WhatsApp!</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#36b320] to-[#2a8f1a] hover:from-[#2a8f1a] hover:to-[#1f6b14] text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Oi! Tenho uma dúvida sobre o curso de manutenção de celular. Pode me ajudar?")}`}
                target="_blank"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Tirar dúvidas no WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="bg-[#36b320] text-white border-0 mb-4">Conteúdo Completo</Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              O que você vai
              <span className="block bg-gradient-to-r from-[#36b320] to-green-400 bg-clip-text text-transparent">
                aprender
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Conteúdo completo e atualizado com as principais técnicas do mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Smartphone,
                title: "Módulo 1: Fundamentos",
                color: "from-[#228B22] to-[#1F7A1F]",
                topics: [
                  "Conhecendo os componentes",
                  "Ferramentas essenciais",
                  "Segurança no trabalho",
                  "Diagnóstico inicial",
                ],
              },
              {
                icon: Shield,
                title: "Módulo 2: Telas e Touch",
                color: "from-purple-500 to-purple-600",
                topics: ["Troca de tela completa", "Reparo de touch", "Calibração e testes", "Soldagem avançada"],
              },
              {
                icon: Battery,
                title: "Módulo 3: Bateria e Carga",
                color: "from-green-500 to-green-600",
                topics: [
                  "Troca de bateria",
                  "Reparo de conector de carga",
                  "Diagnóstico de problemas",
                  "Micro soldagem",
                ],
              },
              {
                icon: Wrench,
                title: "Módulo 4: Reparos Especializados",
                color: "from-red-500 to-red-600",
                topics: ["Desoxidação e limpeza", "Reparo por danos líquidos", "Manutenção de conectores", "Soldagem de precisão"],
              },
            ].map((module, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-500 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <module.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{module.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-[#36b320] rounded-full flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-300">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* What You Get Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-[#36b320] to-[#2a8f1a] text-white border-0 mb-6 px-6 py-3 text-base font-bold">
                O QUE VOCÊ LEVA PARA CASA
              </Badge>
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
                Seu investimento completo em
                <span className="block bg-gradient-to-r from-[#36b320] to-[#2a8f1a] bg-clip-text text-transparent">
                  conhecimento profissional
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#36b320] to-[#2a8f1a] rounded-xl flex items-center justify-center mb-4">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">40+ Técnicas</h3>
                <p className="text-gray-600">Domínio completo de reparo de telas, placas, baterias e componentes</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#36b320] to-[#2a8f1a] rounded-xl flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Certificado</h3>
                <p className="text-gray-600">Certificado profissional reconhecido pelo mercado</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#36b320] to-[#2a8f1a] rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Suporte 6 Meses</h3>
                <p className="text-gray-600">Acompanhamento contínuo via WhatsApp após formatura</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#36b320] to-[#2a8f1a] rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">R$ 3.000+/mês</h3>
                <p className="text-gray-600">Potencial de renda mensal trabalhando meio período</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-3xl p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Investimento que se paga sozinho
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Com apenas 3 reparos você já recupera todo o investimento do curso
                </p>
                <div className="flex justify-center items-center space-x-4 text-green-600">
                  <div className="text-center">
                    <div className="text-2xl font-bold">R$ 300</div>
                    <div className="text-sm">por reparo</div>
                  </div>
                  <div className="text-3xl">×</div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm">reparos</div>
                  </div>
                  <div className="text-3xl">=</div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">R$ 900</div>
                    <div className="text-sm">recuperado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex flex-col items-center space-y-4 mb-6 md:mb-0">
              <Image src="/zapcell-footer.png" width={240} height={80} alt="Zap Cell" className="h-16" />
              <p className="text-gray-400 text-center">Transformando vidas através da tecnologia</p>
            </div>

            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full">
              <MapPin className="h-5 w-5 text-[#36b320]" />
              <span className="text-white font-medium">Contagem - MG</span>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Zap Cell. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 px-6 py-6 group"
          asChild
        >
          <Link href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank">
            <MessageCircle className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="font-bold">QUERO MINHA VAGA</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}