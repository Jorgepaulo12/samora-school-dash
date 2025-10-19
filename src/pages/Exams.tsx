import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Search, Edit, Trash2, FileText, BookOpen, Users, Calendar, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockExams = [
  { 
    id: 1, 
    name: "Prova de Matemática - 1º Trimestre", 
    subject: "Matemática", 
    classes: ["10ª Classe A", "10ª Classe B"],
    date: "2025-11-15",
    time: "08:00",
    period: "Manhã",
    duration: "120 min",
    teacher: "Prof. João Silva"
  },
  { 
    id: 2, 
    name: "Teste de Português", 
    subject: "Português", 
    classes: ["11ª Classe A"],
    date: "2025-11-18",
    time: "14:00",
    period: "Tarde",
    duration: "90 min",
    teacher: "Prof. Ana Costa"
  },
  { 
    id: 3, 
    name: "Prova de Física - Final", 
    subject: "Física", 
    classes: ["11ª Classe B"],
    date: "2025-11-20",
    time: "08:30",
    period: "Manhã",
    duration: "150 min",
    teacher: "Prof. Carlos Mendes"
  },
  { 
    id: 4, 
    name: "Exame de Química", 
    subject: "Química", 
    classes: ["11ª Classe A", "12ª Classe A"],
    date: "2025-11-22",
    time: "15:00",
    period: "Tarde",
    duration: "120 min",
    teacher: "Prof. Pedro Alves"
  },
  { 
    id: 5, 
    name: "Prova de História", 
    subject: "História", 
    classes: ["12ª Classe A"],
    date: "2025-11-25",
    time: "19:00",
    period: "Noite",
    duration: "90 min",
    teacher: "Prof. Teresa Moreira"
  },
];

const Exams = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [exams] = useState(mockExams);

  const filteredExams = exams.filter((exam) =>
    exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.classes.some(cls => cls.toLowerCase().includes(searchTerm.toLowerCase())) ||
    exam.teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Gestão de Provas</h1>
          <p className="text-muted-foreground">
            Gerir provas, exames e avaliações
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Adicionar Prova
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Adicionar Nova Prova</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="exam-name">Nome da Prova</Label>
                <Input id="exam-name" placeholder="Ex: Prova de Matemática - 1º Trimestre" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Disciplina</Label>
                <Select>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Selecione a disciplina" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math">Matemática</SelectItem>
                    <SelectItem value="portuguese">Português</SelectItem>
                    <SelectItem value="physics">Física</SelectItem>
                    <SelectItem value="chemistry">Química</SelectItem>
                    <SelectItem value="history">História</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="teacher">Professor</Label>
                <Select>
                  <SelectTrigger id="teacher">
                    <SelectValue placeholder="Selecione o professor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teacher1">Prof. João Silva</SelectItem>
                    <SelectItem value="teacher2">Prof. Ana Costa</SelectItem>
                    <SelectItem value="teacher3">Prof. Carlos Mendes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date">Data</Label>
                <Input id="date" type="date" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="time">Hora</Label>
                  <Input id="time" type="time" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="duration">Duração</Label>
                  <Input id="duration" placeholder="Ex: 120 min" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="period">Período</Label>
                <Select>
                  <SelectTrigger id="period">
                    <SelectValue placeholder="Selecione o período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Manhã</SelectItem>
                    <SelectItem value="afternoon">Tarde</SelectItem>
                    <SelectItem value="night">Noite</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Criar Prova</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Pesquisar provas, disciplinas ou professores..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredExams.map((exam) => (
          <Card key={exam.id} className="shadow-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-base">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="line-clamp-2">{exam.name}</span>
                </span>
                <div className="flex gap-1 flex-shrink-0">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{exam.subject}</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{formatDate(exam.date)}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{exam.time}</span>
                </div>
                <Badge variant="outline">{exam.period}</Badge>
              </div>

              <div className="flex items-center justify-between text-sm pt-2 border-t">
                <span className="text-muted-foreground">Duração:</span>
                <span className="font-medium">{exam.duration}</span>
              </div>

              <div className="space-y-2 pt-2 border-t">
                <span className="text-sm text-muted-foreground">
                  Professor:
                </span>
                <Badge variant="secondary" className="text-xs">
                  {exam.teacher}
                </Badge>
              </div>

              <div className="space-y-2 pt-2 border-t">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  Turmas:
                </span>
                <div className="flex flex-wrap gap-1">
                  {exam.classes.map((cls, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {cls}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Exams;
