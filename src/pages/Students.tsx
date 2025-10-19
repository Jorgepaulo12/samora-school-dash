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
import { Plus, Search, Edit, Trash2 } from "lucide-react";
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

const mockStudents = [
  { id: 1, number: "2024001", name: "João Silva", class: "10A", birthdate: "2008-03-15" },
  { id: 2, number: "2024002", name: "Maria Santos", class: "10B", birthdate: "2008-05-20" },
  { id: 3, number: "2024003", name: "Carlos Machado", class: "11A", birthdate: "2007-08-10" },
  { id: 4, number: "2024004", name: "Ana Costa", class: "11B", birthdate: "2007-12-05" },
  { id: 5, number: "2024005", name: "Pedro Oliveira", class: "12A", birthdate: "2006-02-28" },
];

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students] = useState(mockStudents);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.number.includes(searchTerm)
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Gestão de Alunos</h1>
          <p className="text-muted-foreground">
            Gerir informações dos alunos matriculados
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Adicionar Aluno
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Aluno</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="student-number">Número do Aluno</Label>
                <Input id="student-number" placeholder="Ex: 2024006" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="student-name">Nome Completo</Label>
                <Input id="student-name" placeholder="Nome do aluno" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="birthdate">Data de Nascimento</Label>
                <Input id="birthdate" type="date" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="class">Turma</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a turma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10A">10A</SelectItem>
                    <SelectItem value="10B">10B</SelectItem>
                    <SelectItem value="11A">11A</SelectItem>
                    <SelectItem value="11B">11B</SelectItem>
                    <SelectItem value="12A">12A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Salvar Aluno</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Lista de Alunos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Pesquisar por nome ou número..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Número</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Turma</TableHead>
                <TableHead>Data de Nascimento</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.number}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{new Date(student.birthdate).toLocaleDateString('pt-PT')}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
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

export default Students;
