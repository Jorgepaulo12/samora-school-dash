import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Search, Edit, Trash2, Monitor, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const mockRooms = [
  { id: 1, number: "101", floor: "1º Andar", capacity: 35, type: "Sala Normal", equipment: ["Projetor", "Quadro"] },
  { id: 2, number: "102", floor: "1º Andar", capacity: 32, type: "Sala Normal", equipment: ["Projetor"] },
  { id: 3, number: "201", floor: "2º Andar", capacity: 40, type: "Laboratório", equipment: ["Computadores", "Projetor"] },
  { id: 4, number: "202", floor: "2º Andar", capacity: 30, type: "Sala Normal", equipment: ["Quadro"] },
  { id: 5, number: "301", floor: "3º Andar", capacity: 38, type: "Auditório", equipment: ["Projetor", "Som", "Microfones"] },
];

const Rooms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rooms] = useState(mockRooms);

  const filteredRooms = rooms.filter((room) =>
    room.number.includes(searchTerm) ||
    room.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Gestão de Salas</h1>
          <p className="text-muted-foreground">
            Gerir salas de aula e equipamentos
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Adicionar Sala
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Adicionar Nova Sala</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="room-number">Número da Sala</Label>
                <Input id="room-number" placeholder="Ex: 103" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="floor">Andar</Label>
                <Input id="floor" placeholder="Ex: 1º Andar" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="capacity">Capacidade</Label>
                <Input id="capacity" type="number" placeholder="Número de alunos" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type">Tipo de Sala</Label>
                <Input id="type" placeholder="Ex: Sala Normal, Laboratório" />
              </div>
              <Button className="w-full">Criar Sala</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Pesquisar salas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredRooms.map((room) => (
          <Card key={room.id} className="shadow-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Sala {room.number}</span>
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
                <span className="text-muted-foreground">Andar:</span>
                <span className="font-medium">{room.floor}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Capacidade:</span>
                <span className="font-medium flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {room.capacity}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Tipo:</span>
                <Badge variant="secondary">{room.type}</Badge>
              </div>
              <div className="text-sm pt-2 border-t">
                <span className="text-muted-foreground flex items-center gap-1 mb-2">
                  <Monitor className="h-4 w-4" />
                  Equipamentos:
                </span>
                <div className="flex flex-wrap gap-1">
                  {room.equipment.map((item, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {item}
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

export default Rooms;
