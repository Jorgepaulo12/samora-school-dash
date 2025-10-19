import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockGrades = [
  { id: 1, student: "João Silva", math: 16, portuguese: 14, physics: 15, chemistry: 17, history: 13 },
  { id: 2, student: "Maria Santos", math: 18, portuguese: 17, physics: 16, chemistry: 18, history: 15 },
  { id: 3, student: "Carlos Machado", math: 14, portuguese: 15, physics: 14, chemistry: 13, history: 16 },
  { id: 4, student: "Ana Costa", math: 17, portuguese: 18, physics: 17, chemistry: 16, history: 18 },
  { id: 5, student: "Pedro Oliveira", math: 15, portuguese: 14, physics: 16, chemistry: 15, history: 14 },
];

const Grades = () => {
  const [selectedClass, setSelectedClass] = useState("10A");
  const [selectedPeriod, setSelectedPeriod] = useState("1");

  const calculateAverage = (student: any) => {
    const sum = student.math + student.portuguese + student.physics + student.chemistry + student.history;
    return (sum / 5).toFixed(1);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2">Pautas e Notas</h1>
        <p className="text-muted-foreground">
          Visualizar e gerir pautas das turmas
        </p>
      </div>

      <div className="flex gap-4 items-end">
        <div className="grid gap-2">
          <label className="text-sm font-medium">Turma</label>
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
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

        <div className="grid gap-2">
          <label className="text-sm font-medium">Período</label>
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1º Trimestre</SelectItem>
              <SelectItem value="2">2º Trimestre</SelectItem>
              <SelectItem value="3">3º Trimestre</SelectItem>
              <SelectItem value="final">Final</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="gap-2" variant="outline">
          <Download className="h-4 w-4" />
          Exportar PDF
        </Button>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Pauta da Turma {selectedClass} - {selectedPeriod}º Trimestre
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Aluno</TableHead>
                <TableHead className="text-center">Matemática</TableHead>
                <TableHead className="text-center">Português</TableHead>
                <TableHead className="text-center">Física</TableHead>
                <TableHead className="text-center">Química</TableHead>
                <TableHead className="text-center">História</TableHead>
                <TableHead className="text-center font-bold">Média</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockGrades.map((grade) => {
                const avg = parseFloat(calculateAverage(grade));
                return (
                  <TableRow key={grade.id}>
                    <TableCell className="font-medium">{grade.student}</TableCell>
                    <TableCell className="text-center">{grade.math}</TableCell>
                    <TableCell className="text-center">{grade.portuguese}</TableCell>
                    <TableCell className="text-center">{grade.physics}</TableCell>
                    <TableCell className="text-center">{grade.chemistry}</TableCell>
                    <TableCell className="text-center">{grade.history}</TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`font-bold ${
                          avg >= 14
                            ? "text-accent"
                            : avg >= 10
                            ? "text-primary"
                            : "text-destructive"
                        }`}
                      >
                        {calculateAverage(grade)}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          <div className="mt-4 p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Estatísticas da Turma</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Média da Turma:</span>
                <p className="text-lg font-bold text-primary">15.2</p>
              </div>
              <div>
                <span className="text-muted-foreground">Taxa de Aprovação:</span>
                <p className="text-lg font-bold text-accent">96%</p>
              </div>
              <div>
                <span className="text-muted-foreground">Total de Alunos:</span>
                <p className="text-lg font-bold">{mockGrades.length}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Grades;
