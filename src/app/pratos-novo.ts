import { Timestamp } from "firebase/firestore";

export interface PratosNovo {
  nome: string;
  valor: number;
  tipo: string;
  descricao?: string;
  quantidade: number;
  adicional1?: Adicional;
  adicional2?: Adicional;
  cliente: string;
  garcom: string;
  horario: Timestamp;
  id?: string;
  dezporcento?: boolean;
}

interface Adicional {
  nome: string;
  valor: number;
}
