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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ZapCellLanding() {
  const whatsappNumber = "5531999999999"
  const whatsappMessage = "Oi! Vi o vídeo da troca de tela e quero garantir minha vaga na Turma de Julho 2025. Ainda tem vaga disponível? 🔥"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200/50 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Zap Cell
                </h1>
                <p className="text-sm text-gray-500">Contagem - MG</p>
              </div>
            </div>
            <Badge variant="outline" className="border-blue-600 text-blue-600 hidden sm:flex">
              <MapPin className="h-3 w-3 mr-1" />
              Presencial
            </Badge>
          </div>
        </div>
      </header>

      {/* Professional Notice */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-center space-x-3">
            <p className="font-medium text-sm md:text-base">
              Apenas 3 vagas restantes para a Turma de Julho 2025
            </p>
          </div>
        </div>
      </div>

      {/* Video Hook Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#36b320]/10 text-[#36b320] border-[#36b320]/20 mb-6">Vídeo Demonstrativo</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              VÍDEO EXCLUSIVO: Como Trocar
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Tela de Celular em 5 Minutos
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Demonstração real com celular quebrado • Resultado garantido
            </p>
            <p className="text-xl text-gray-600 mb-8">Técnica profissional que poucos conhecem • 100% gratuito</p>

            <div className="bg-white border border-gray-200 p-6 rounded-xl mb-6 max-w-2xl mx-auto shadow-sm">
              <p className="text-gray-700 font-semibold text-center">
                Mesma técnica que as assistências técnicas cobram R$ 200+
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
              <video
                className="w-full aspect-video relative z-10"
                controls
                poster="/placeholder.svg?height=400&width=800"
              >
                <source src="#" type="video/mp4" />
                Seu navegador não suporta vídeo.
              </video>
            </div>
            
            <p className="text-center text-gray-500 text-sm mt-4">
              ⏱️ Apenas 5 minutos • Sem cadastro • 100% gratuito
            </p>

            <div className="text-center mt-4 mb-2">
              <p className="text-2xl font-bold text-gray-900">
                "Ficou fácil, certo? Agora imagine aprendendo 40+ técnicas assim, PRESENCIALMENTE, e faturando R$ 3.000+/mês. Só restam 3 vagas!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-8 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-200">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-green-600 to-green-700 text-white border-0 px-6 py-3 text-base font-bold">
                    TURMA JULHO 2025 • ÚLTIMAS 3 VAGAS • MEIO DO ANO
                  </Badge>
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
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
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Transforme sua paixão por tecnologia em uma profissão lucrativa. Curso 100% prático na nossa loja em
                    <span className="font-semibold text-green-600"> Contagem-MG</span>.
                  </p>

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 p-6 rounded-2xl text-center shadow-lg transform hover:scale-105 transition-transform">
                        <div className="text-4xl font-extrabold text-green-600 mb-2">40+</div>
                        <div className="text-sm font-medium text-green-700">Técnicas como essa</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-300 p-6 rounded-2xl text-center shadow-xl transform hover:scale-105 transition-transform">
                        <div className="text-4xl font-extrabold text-green-700 mb-2">R$ 3.000+</div>
                        <div className="text-sm font-medium text-green-800">Renda mensal média</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 p-6 rounded-2xl text-center shadow-lg transform hover:scale-105 transition-transform">
                        <div className="text-4xl font-extrabold text-green-600 mb-2">100%</div>
                        <div className="text-sm font-medium text-green-700">Aulas práticas</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span className="font-bold text-blue-600">INSCRIÇÕES ENCERRAM EM:</span>
                    </div>
                    <div className="flex justify-center space-x-4 text-center">
                      <div className="bg-blue-600 text-white px-4 py-3 rounded-lg font-bold">
                        <div className="text-2xl">02</div>
                        <div className="text-xs">DIAS</div>
                      </div>
                      <div className="bg-blue-600 text-white px-4 py-3 rounded-lg font-bold">
                        <div className="text-2xl">14</div>
                        <div className="text-xs">HORAS</div>
                      </div>
                      <div className="bg-blue-600 text-white px-4 py-3 rounded-lg font-bold">
                        <div className="text-2xl">23</div>
                        <div className="text-xs">MIN</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-10 py-8 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group transform hover:scale-105"
                    asChild
                  >
                    <Link
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                    >
                      <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      QUERO MINHA VAGA (Últimas 3 vagas)
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center justify-center space-x-8 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-full border-2 border-white"
                        ></div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">500+ alunos formados</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Vidas Transformadas", icon: Users },
              { number: "8+", label: "Anos de Experiência", icon: Award },
              { number: "97%", label: "Aumentaram a renda", icon: Target },
              { number: "24h", label: "Suporte Pós-Curso", icon: Clock },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#36b320] to-[#2a8f1a] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 px-6 py-6 group"
          asChild
        >
          <Link href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank">
            <MessageCircle className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="font-bold">FALAR NO WHATSAPP</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}