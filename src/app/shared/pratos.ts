import { Timestamp } from "firebase/firestore";
import { PratosNovo } from "../pratos-novo";

interface Pratos {
  nome: string;
  valor: number;
}

export const entradas: Pratos[] = [
  { nome: 'Couver', valor: 15 },
];

export const pasteis: Pratos[] = [
  { nome: 'Pastel Camarão', valor: 15 },
  { nome: 'Pastel Carne', valor: 13 },
  { nome: 'Pastel Queijo', valor: 13 }
];

export const lanches: Pratos[] = [
  { nome: 'Misto quente', valor: 20 },
  { nome: 'Cachorro quente', valor: 20 },
  { nome: 'Hambúrguer', valor: 35 },
  { nome: 'Desejos', valor: 35 }
];

export const petiscos: Pratos[] = [
  { nome: 'Polvo a vinagrete', valor: 40 },
  { nome: 'Tataki', valor: 20 },
  { nome: 'Cevitche', valor: 20 },
  { nome: 'Lula dore', valor: 55 },
  { nome: 'Camarão dore', valor: 55 },
  { nome: 'Camarão salteado', valor: 55 },
  { nome: 'Bolinho de bacalhau', valor: 55 },
  { nome: 'Isca de peixe', valor: 55 },
  { nome: 'Fritas', valor: 25 },
  { nome: 'Tabua de frios', valor: 40 },
  { nome: 'Filé aperetivo', valor: 65 },
  { nome: 'Frango a passarinho', valor: 40 },
];

export const frangos: Pratos[] = [
  { nome: 'Frango grelhado', valor: 60 },
  { nome: 'Frango á parmegiana', valor: 60 },
  { nome: 'Strogonoff de frango ', valor: 60 },
  { nome: 'Frango ao molho curry', valor: 60 },
];

export const contraFiles: Pratos[] = [
  { nome: 'Carne Grelhado', valor: 70 },
  { nome: 'Carne á parmegiana', valor: 70 },
  { nome: 'Strognoff de carne', valor: 70 },
  { nome: 'Carne á cavalo', valor: 70 },
  { nome: 'Carne ao molho gongorzola', valor: 70 },
  { nome: 'Carne ao molho madeira', valor: 70 },
  { nome: 'Misto de carne p/ 2 pessoas', valor: 130 }
];

export const saladas: Pratos[] = [
  { nome: 'Salada da Casa', valor: 30 },
  { nome: 'Salada a Grega', valor: 30 },
  { nome: 'Salada Sentinelas', valor: 30 }
]

export const risotos: Pratos[] = [
  { nome: 'Risoto de Camarão', valor: 70 },
  { nome: 'Risoto de frutos do mar', valor: 70 },
  { nome: 'Risoto de queijo com alho poró', valor: 65 },
  { nome: 'Risoto de Legumes com peixe e camarão grelhados', valor: 65}
];

export const sopas: Pratos[] = [
  { nome: 'Sopa de frutos do mar', valor: 55 },
  { nome: 'Sopa do dia', valor: 30 }
];

export const frutosDoMar: Pratos[] = [
  { nome: 'Peixe na brasa (P/ 2 pessoas)', valor: 130 },
  { nome: 'Misto de frutos do mar (P/ 2 pessoas)', valor: 130 },
  { nome: 'Peixe com molho de camarão', valor: 75 },
  { nome: 'Camarão no abacaxi ', valor: 70 },
  { nome: 'Camarão ao catupiry', valor: 70 },
  { nome: 'Camarão empanado', valor: 70 },
  { nome: 'Camarão ao curry', valor: 60 },
  { nome: 'Polvo grelhado', valor: 90 },
  { nome: 'Peixe frito ou grelhado', valor: 60 },
  { nome: 'Moqueca de peixe', valor: 70 },
  { nome: 'Moqueca de frutos do mar', valor: 80 },
];

export const massas: Pratos[] = [
  { nome: 'Massa Frutos do mar', valor: 70 },
  { nome: 'Massa Camarão ao pesto', valor: 60 },
  { nome: 'Massa Bolonhesa', valor: 50 },
  { nome: 'Massa Parisiense (Molho branco) ', valor: 50 },
  { nome: 'Massa Primavera (Vegetariano)', valor: 50 },
];


export const bebidasCompleto: Pratos[] = [
  { nome: 'Sucos naturais - COPO', valor: 10 },
  { nome: 'Sucos naturais - JARRA PEQUENA', valor: 25 },
  { nome: 'Sucos naturais - JARRA GRANDE', valor: 35 },
  { nome: 'Água sem gás', valor: 5 },
  { nome: 'Água com gás', valor: 5 },
  { nome: 'Guaravita', valor: 5 },
  { nome: 'Coca-cola', valor: 7 },
  { nome: 'Guarana', valor: 7 },
  { nome: 'H2O', valor: 8 },
];

export const bebidas: Pratos[] = [
  { nome: 'Água sem gás', valor: 5 },
  { nome: 'Água com gás', valor: 5 },
  { nome: 'Guaravita', valor: 5 },
  { nome: 'Coca-cola', valor: 8 },
  { nome: 'Guarana', valor: 8 },
  { nome: 'H2O', valor: 8 },
];

export const sucos: Pratos[] = [
  { nome: 'Sucos naturais - COPO', valor: 10 },
  { nome: 'Sucos naturais - JARRA PEQUENA', valor: 25 },
  { nome: 'Sucos naturais - JARRA GRANDE', valor: 35 },
];

export const alcool: Pratos[] = [
  { nome: 'Ice', valor: 12 },
  { nome: 'Cervejas', valor: 15 },
  { nome: 'Whisky(Dose)', valor: 30 },
  { nome: 'Cachaça(Dose)', valor: 10 },
  { nome: 'Run(Dose)', valor: 20 },
  { nome: 'Gin(Dose)', valor: 20 },
  { nome: 'Vodka(Dose)', valor: 20 },
  { nome: 'Gin tônica', valor: 35 },
  { nome: 'Caipvodka', valor: 30 },
  { nome: 'Caipirinha', valor: 20 },
  { nome: 'Pina colada', valor: 30 },
  { nome: 'Margarita', valor: 30 },
  { nome: 'Mojito', valor: 30 },
  { nome: 'Sex on the beach', valor: 30 },
  { nome: 'Sunset Sentinelas', valor: 40 }
];

export const sobremesas: Pratos[] = [
  { nome: 'Petiti gateau', valor: 25 },
  { nome: 'Sorvete', valor: 15 },
  { nome: 'Do dia', valor: 20 }
];












export const entradasNovo: PratosNovo[] = [
  { nome: 'Couver', valor: 15, tipo: 'entrada', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
];

export const pasteisNovo: PratosNovo[] = [
  { nome: 'Pastel de Camarão', valor: 15, tipo: 'pastel', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Pastel de Carne', valor: 13, tipo: 'pastel', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Pastel de Queijo', valor: 13, tipo: 'pastel', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' }
];

export const lanchesNovo: PratosNovo[] = [
  { nome: 'Misto quente', valor: 20, tipo: 'lanche', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Cachorro quente', valor: 20, tipo: 'lanche', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Hambúrguer', valor: 35, tipo: 'lanche', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Desejos', valor: 35, tipo: 'lanche', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' }
];

export const petiscosNovo: PratosNovo[] = [
  { nome: 'Polvo a vinagrete', valor: 40, tipo: 'petisco', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Tataki', valor: 20, tipo: 'petisco', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Cevitche', valor: 20, tipo: 'petisco', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Lula dore', valor: 55, tipo: 'petisco', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Camarão dore', valor: 55, tipo: 'petisco', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Camarão salteado', valor: 55, tipo: 'petisco', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Bolinho de bacalhau', valor: 55, tipo: 'petisco', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Isca de peixe', valor: 55, tipo: 'petisco', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Fritas', valor: 25, tipo: 'petisco', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Tabua de frios', valor: 40, tipo: 'petisco', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Filé aperetivo', valor: 65, tipo: 'petisco', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Frango a passarinho', valor: 40, tipo: 'petisco', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
];

export const frangosNovo: PratosNovo[] = [
  { nome: 'Frango grelhado', valor: 60, tipo: 'frango', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Frango á parmegiana', valor: 60, tipo: 'frango', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Strogonoff de frango ', valor: 60, tipo: 'frango', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Frango ao molho curry', valor: 60, tipo: 'frango', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
];

export const carneNovo: PratosNovo[] = [
  { nome: 'Carne Grelhado', valor: 70, tipo: 'carne', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Carne á parmegiana', valor: 70, tipo: 'carne', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Strognoff de carne', valor: 70, tipo: 'carne', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Carne á cavalo', valor: 70, tipo: 'carne', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Carne ao molho gongorzola', valor: 70, tipo: 'carne', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Carne ao molho madeira', valor: 70, tipo: 'carne', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Misto de carne p/ 2 pessoas', valor: 130, tipo: 'carne', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' }
];

export const saladasNovo: PratosNovo[] = [
  { nome: 'Salada da Casa', valor: 30, tipo: 'salada', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Salada a Grega', valor: 30, tipo: 'salada', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Salada Sentinelas', valor: 30, tipo: 'salada', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' }
]

export const risotosNovo: PratosNovo[] = [
  { nome: 'Risoto de Camarão', valor: 70, tipo: 'risoto', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Risoto de frutos do mar', valor: 70, tipo: 'risoto', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Risoto de queijo com alho poró', valor: 65, tipo: 'risoto', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Risoto de Legumes com peixe e camarão grelhados', valor: 65, tipo: 'risoto', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' }
];

export const sopasNovo: PratosNovo[] = [
  { nome: 'Sopa de frutos do mar', valor: 55, tipo: 'sopas', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Sopa do dia', valor: 30, tipo: 'sopas', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' }
];

export const frutosDoMarNovo: PratosNovo[] = [
  { nome: 'Peixe na brasa (P/ 2)', valor: 130, tipo: 'doMar', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Misto de frutos do mar (P/ 2)', valor: 130, tipo: 'doMar', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Peixe com molho de camarão', valor: 75, tipo: 'doMar', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Camarão no abacaxi ', valor: 70, tipo: 'doMar', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Camarão ao catupiry', valor: 70, tipo: 'doMar', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Camarão empanado', valor: 70, tipo: 'doMar', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Camarão ao curry', valor: 60, tipo: 'doMar', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Polvo grelhado', valor: 90, tipo: 'doMar', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Peixe frito ou grelhado', valor: 60, tipo: 'doMar', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Moqueca de peixe', valor: 70, tipo: 'doMar', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Moqueca de frutos do mar', valor: 80, tipo: 'doMar', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
];

export const massasNovo: PratosNovo[] = [
  { nome: 'Massa Frutos do mar', valor: 70, tipo: 'massa', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Massa Camarão ao pesto', valor: 60, tipo: 'massa', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Massa Bolonhesa', valor: 50, tipo: 'massa', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Massa Parisiense (Molho branco) ', valor: 50, tipo: 'massa', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Massa Primavera (Vegetariano)', valor: 50, tipo: 'massa', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
];


export const bebidasCompletoNovo: PratosNovo[] = [
  { nome: 'Sucos naturais - COPO', valor: 10, tipo: 'semALcool', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Sucos naturais - JARRA PEQUENA', valor: 25, tipo: 'semALcool', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Sucos naturais - JARRA GRANDE', valor: 35, tipo: 'semALcool', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Água sem gás', valor: 5, tipo: 'semALcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Água com gás', valor: 5, tipo: 'semALcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Guaravita', valor: 5, tipo: 'semALcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Coca-cola', valor: 7, tipo: 'semALcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Guarana', valor: 7, tipo: 'semALcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'H2O', valor: 8, tipo: 'semALcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
];

export const bebidasNovo: PratosNovo[] = [
  { nome: 'Água sem gás', valor: 5, tipo: 'semALcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Água com gás', valor: 5, tipo: 'semALcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Guaravita', valor: 5, tipo: 'semALcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Coca-cola', valor: 8, tipo: 'semALcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Guarana', valor: 8, tipo: 'semALcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'H2O', valor: 8, tipo: 'semALcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
];

export const sucosNovo: PratosNovo[] = [
  { nome: 'Sucos naturais - COPO', valor: 10, tipo: 'semALcool', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Sucos naturais - JARRA PEQUENA', valor: 25, tipo: 'semALcool', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Sucos naturais - JARRA GRANDE', valor: 35, tipo: 'semALcool', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
];

export const alcoolNovo: PratosNovo[] = [
  { nome: 'Ice', valor: 12, tipo: 'alcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Cervejas', valor: 15, tipo: 'alcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Whisky(Dose)', valor: 30, tipo: 'alcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Cachaça(Dose)', valor: 10, tipo: 'alcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Run(Dose)', valor: 20, tipo: 'alcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Gin(Dose)', valor: 20, tipo: 'alcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Vodka(Dose)', valor: 20, tipo: 'alcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Gin tônica', valor: 35, tipo: 'alcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Caipvodka', valor: 30, tipo: 'alcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Caipirinha', valor: 20, tipo: 'alcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Pina colada', valor: 30, tipo: 'alcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Margarita', valor: 30, tipo: 'alcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Mojito', valor: 30, tipo: 'alcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Sex on the beach', valor: 30, tipo: 'alcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Sunset Sentinelas', valor: 40, tipo: 'alcool-bebida', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' }
];

export const docesNovo: PratosNovo[] = [
  { nome: 'Petiti gateau', valor: 25, tipo: 'doce', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Sorvete', valor: 15, tipo: 'doce', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' },
  { nome: 'Do dia', valor: 20, tipo: 'doce', descricao: '', quantidade: 1, adicional1: { nome: '', valor: 0 }, adicional2: { nome: '', valor: 0 }, cliente: '', garcom: '', horario: Timestamp.now(), id: '' }
];
