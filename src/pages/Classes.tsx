import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Search, Edit, Trash2, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockClasses = [
  { id: 1, name: "10A", year: "10º Ano", students: 32, room: "Sala 101", coordinator: "Prof. Manuel Costa" },
  { id: 2, name: "10B", year: "10º Ano", students: 28, room: "Sala 102", coordinator: "Profª. Isabel Ferreira" },
  { id: 3, name: "11A", year: "11º Ano", students: 30, room: "Sala 201", coordinator: "Prof. António Silva" },
  { id: 4, name: "11B", year: "11º Ano", students: 27, room: "Sala 202", coordinator: "Profª. Rosa Machado" },
  { id: 5, name: "12A", year: "12º Ano", students: 25, room: "Sala 301", coordinator: "Prof. Carlos Santos" },
];

const Classes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [classes] = useState(mockClasses);

  const filteredClasses = classes.filter((cls) =>
    cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cls.year.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Gestão de Turmas</h1>
          <p className="text-muted-foreground">
            Gerir turmas e suas informações
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Adicionar Turma
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Adicionar Nova Turma</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="class-name">Nome da Turma</Label>
                <Input id="class-name" placeholder="Ex: 10C" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="year">Ano</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o ano" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10º Ano</SelectItem>
                    <SelectItem value="11">11º Ano</SelectItem>
                    <SelectItem value="12">12º Ano</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="room">Sala</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a sala" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="101">Sala 101</SelectItem>
                    <SelectItem value="102">Sala 102</SelectItem>
                    <SelectItem value="201">Sala 201</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="coordinator">Coordenador</Label>
                <Input id="coordinator" placeholder="Nome do coordenador" />
              </div>
              <Button className="w-full">Criar Turma</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Pesquisar turmas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredClasses.map((cls) => (
          <Card key={cls.id} className="shadow-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{cls.name}</span>
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
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Ano:</span>
                <span className="font-medium">{cls.year}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Sala:</span>
                <span className="font-medium">{cls.room}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Alunos:</span>
                <span className="font-medium flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {cls.students}
                </span>
              </div>
              <div className="text-sm pt-2 border-t">
                <span className="text-muted-foreground">Coordenador:</span>
                <p className="font-medium mt-1">{cls.coordinator}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Classes;
