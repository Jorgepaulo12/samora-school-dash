import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Search, Edit, Trash2, BookOpen, Users, Clock } from "lucide-react";
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

const mockSubjects = [
  { 
    id: 1, 
    name: "Matemática", 
    teachers: ["Prof. João Silva", "Prof. Maria Santos"], 
    classes: ["10ª Classe A", "10ª Classe B"],
    period: "Manhã"
  },
  { 
    id: 2, 
    name: "Português", 
    teachers: ["Prof. Ana Costa"], 
    classes: ["10ª Classe A", "11ª Classe A"],
    period: "Tarde"
  },
  { 
    id: 3, 
    name: "Física", 
    teachers: ["Prof. Carlos Mendes"], 
    classes: ["11ª Classe B"],
    period: "Manhã"
  },
  { 
    id: 4, 
    name: "Química", 
    teachers: ["Prof. Pedro Alves", "Prof. Sofia Lima"], 
    classes: ["11ª Classe A", "11ª Classe B", "12ª Classe A"],
    period: "Tarde"
  },
  { 
    id: 5, 
    name: "História", 
    teachers: ["Prof. Teresa Moreira"], 
    classes: ["10ª Classe B", "12ª Classe A"],
    period: "Noite"
  },
];

const Subjects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [subjects] = useState(mockSubjects);

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subject.teachers.some(teacher => teacher.toLowerCase().includes(searchTerm.toLowerCase())) ||
    subject.classes.some(cls => cls.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Gestão de Disciplinas</h1>
          <p className="text-muted-foreground">
            Gerir disciplinas, professores e turmas
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Adicionar Disciplina
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Adicionar Nova Disciplina</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="subject-name">Nome da Disciplina</Label>
                <Input id="subject-name" placeholder="Ex: Matemática" />
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
              <Button className="w-full">Criar Disciplina</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Pesquisar disciplinas, professores ou turmas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredSubjects.map((subject) => (
          <Card key={subject.id} className="shadow-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  {subject.name}
                </span>
                <div className="flex gap-1">
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
                <Clock className="h-4 w-4 text-muted-foreground" />
                <Badge variant="outline">{subject.period}</Badge>
              </div>
              
              <div className="space-y-2 pt-2 border-t">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  Professores:
                </span>
                <div className="flex flex-wrap gap-1">
                  {subject.teachers.map((teacher, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {teacher}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t">
                <span className="text-sm text-muted-foreground">
                  Turmas:
                </span>
                <div className="flex flex-wrap gap-1">
                  {subject.classes.map((cls, i) => (
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

export default Subjects;
