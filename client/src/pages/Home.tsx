import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Leaf, Recycle, Droplet, Zap, Target, Users } from "lucide-react";

export default function Home() {
  const goals = [
    {
      icon: Recycle,
      title: "Redução de Resíduos",
      description: "Reduzir substancialmente a geração de resíduos por meio da prevenção, redução, reciclagem e reuso até 2030.",
    },
    {
      icon: Droplet,
      title: "Gestão de Recursos",
      description: "Alcançar a gestão sustentável e o uso eficiente dos recursos naturais em toda a cadeia de produção.",
    },
    {
      icon: Leaf,
      title: "Alimentos Responsáveis",
      description: "Reduzir pela metade o desperdício de alimentos per capita mundial até 2030.",
    },
    {
      icon: Zap,
      title: "Energia Limpa",
      description: "Promover o uso eficiente de energia e a transição para fontes renováveis na produção.",
    },
    {
      icon: Target,
      title: "Práticas Sustentáveis",
      description: "Incentivar empresas a adotar práticas sustentáveis e integrar informações de sustentabilidade.",
    },
    {
      icon: Users,
      title: "Conscientização Global",
      description: "Garantir que as pessoas tenham informação relevante para desenvolvimento sustentável.",
    },
  ];

  const actions = [
    "Escolha produtos com embalagem reciclável ou biodegradável",
    "Reduza o consumo de plástico descartável",
    "Apoie empresas com práticas sustentáveis",
    "Minimize o desperdício de alimentos",
    "Reutilize e recicle sempre que possível",
    "Consuma produtos locais e de temporada",
    "Reduza o consumo de energia em casa",
    "Participe de iniciativas comunitárias de sustentabilidade",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-linear-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">12</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">PEX - ODS 12</h1>
              <p className="text-xs text-slate-600">Consumo e Produção Responsáveis</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#objetivos" className="text-slate-600 hover:text-slate-900 font-medium">
              Objetivos
            </a>
            <a href="#acoes" className="text-slate-600 hover:text-slate-900 font-medium">
              Ações
            </a>
            <a href="#impacto" className="text-slate-600 hover:text-slate-900 font-medium">
              Impacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-linear-to-r from-green-500 via-green-400 to-yellow-400 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-white font-semibold text-sm">Agenda 2030 das Nações Unidas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Consumo e Produção Responsáveis
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              O ODS 12 busca assegurar padrões de produção e de consumo sustentáveis, transformando a forma como produzimos e consumimos recursos para garantir um futuro viável para as próximas gerações.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-green-600 hover:bg-slate-100 font-semibold px-8 py-6 text-base">
                Saiba Mais
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base">
                Participe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16 md:py-20">
        {/* Objetivos Section */}
        <section id="objetivos" className="container mx-auto px-4 mb-20">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Metas principais</h3>
            <p className="text-lg text-slate-600 max-w-2xl">
              O ODS 12 estabelece 11 metas específicas para transformar os padrões globais de produção e consumo até 2030.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-linear-to-br from-green-100 to-yellow-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-slate-900">{goal.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{goal.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="bg-white py-16 md:py-20 mb-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Por que importa?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h4 className="text-xl font-semibold text-slate-900 mb-4">Desafios Globais</h4>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Aproximadamente um terço dos alimentos produzidos no mundo é desperdiçado</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>A produção e consumo são responsáveis por 60% das emissões globais de gases de efeito estufa</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Bilhões de toneladas de resíduos são gerados anualmente em todo o mundo</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Os recursos naturais estão sendo consumidos mais rápido do que podem ser regenerados</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-slate-900 mb-4">Benefícios da Ação</h4>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Redução significativa de emissões de carbono e poluição</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Conservação de recursos naturais para futuras gerações</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Criação de oportunidades econômicas e empregos verdes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Melhoria da saúde humana e qualidade de vida</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Actions Section */}
        <section id="acoes" className="container mx-auto px-4 mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">O que você pode fazer</h3>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl">
            Cada ação individual contribui para uma mudança global. Aqui estão maneiras práticas de adotar consumo e produção responsáveis no seu dia a dia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {actions.map((action, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-green-300 transition-colors">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-slate-700 font-medium">{action}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section id="impacto" className="bg-linear-to-r from-slate-900 to-slate-800 py-16 md:py-20 text-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold mb-12">Impacto global</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-4xl font-bold text-green-400 mb-2">1/3</div>
                <p className="text-white/90">dos alimentos produzidos é desperdiçado globalmente</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
                <p className="text-white/90">das emissões de gases de efeito estufa vêm da produção e consumo</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-4xl font-bold text-green-400 mb-2">2030</div>
                <p className="text-white/90">é o ano alvo para atingir as metas do ODS 12</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-4xl font-bold text-green-400 mb-2">193</div>
                <p className="text-white/90">países comprometidos com os Objetivos de Desenvolvimento Sustentável</p>
              </div>
            </div>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Sobre ODS 12</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                O Objetivo de Desenvolvimento Sustentável 12 é parte da Agenda 2030 das Nações Unidas, um plano global para erradicar a pobreza e promover o desenvolvimento sustentável.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Saiba Mais Sobre ODS</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Relatórios Oficiais</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Iniciativas Globais</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Conecte-se</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Nações Unidas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">PNUMA</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agenda 2030</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-center text-slate-400 text-sm">
              © 2025 PEX ODS 12 - Consumo e Produção Responsáveis. Desenvolvido por Gabriel V. Costa - Faculdade Descomplica.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
