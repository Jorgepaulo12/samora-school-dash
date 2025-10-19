import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Search, Edit, Trash2, BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const mockTeachers = [
  { id: 1, name: "Prof. Manuel Costa", subject: "Matemática", email: "manuel@escola.com", classes: ["10A", "11A"] },
  { id: 2, name: "Profª. Isabel Ferreira", subject: "Português", email: "isabel@escola.com", classes: ["10B", "12A"] },
  { id: 3, name: "Prof. António Silva", subject: "Física", email: "antonio@escola.com", classes: ["11A", "11B"] },
  { id: 4, name: "Profª. Rosa Machado", subject: "Química", email: "rosa@escola.com", classes: ["10A", "12A"] },
  { id: 5, name: "Prof. Carlos Santos", subject: "História", email: "carlos@escola.com", classes: ["10B", "11B"] },
];

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [teachers] = useState(mockTeachers);

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Gestão de Professores</h1>
          <p className="text-muted-foreground">
            Gerir informações dos professores e suas turmas
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Adicionar Professor
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Professor</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="teacher-name">Nome Completo</Label>
                <Input id="teacher-name" placeholder="Nome do professor" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Disciplina</Label>
                <Input id="subject" placeholder="Ex: Matemática" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@escola.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Senha Inicial</Label>
                <Input id="password" type="password" placeholder="Senha temporária" />
              </div>
              <Button className="w-full">Criar Conta de Professor</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Lista de Professores</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Pesquisar por nome ou disciplina..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Disciplina</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Turmas</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTeachers.map((teacher) => (
                <TableRow key={teacher.id}>
                  <TableCell className="font-medium">{teacher.name}</TableCell>
                  <TableCell>{teacher.subject}</TableCell>
                  <TableCell>{teacher.email}</TableCell>
                  <TableCell>
                    <div className="flex gap-1 flex-wrap">
                      {teacher.classes.map((cls) => (
                        <Badge key={cls} variant="secondary">
                          {cls}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" title="Ver Caderneta">
                        <BookOpen className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Teachers;
