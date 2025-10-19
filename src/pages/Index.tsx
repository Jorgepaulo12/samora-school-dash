import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, BookOpen, Building2 } from "lucide-react";

const stats = [
  {
    title: "Total de Alunos",
    value: "1,234",
    icon: Users,
    change: "+12% desde o mês passado",
  },
  {
    title: "Professores",
    value: "87",
    icon: GraduationCap,
    change: "+3 novos este mês",
  },
  {
    title: "Turmas Ativas",
    value: "42",
    icon: BookOpen,
    change: "12 turmas por ano",
  },
  {
    title: "Salas Disponíveis",
    value: "28",
    icon: Building2,
    change: "Todas equipadas",
  },
];

const Index = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Bem-vindo ao sistema de gestão escolar
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="shadow-card hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "Novo aluno matriculado - João Silva",
                "Pauta da turma 10A publicada",
                "Reunião de professores agendada",
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Próximos Eventos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "Exames finais - 15 a 30 de Junho",
                "Férias escolares - 1 de Julho",
                "Reunião de pais - 10 de Junho",
              ].map((event, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>{event}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Avisos Importantes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "Prazo de matrículas até 30/05",
                "Atualização do sistema dia 15",
                "Nova biblioteca inaugurada",
              ].map((notice, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-destructive" />
                  <span>{notice}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
