
export type Turma = {
    id: string
    nome: string
    docentes: string
    estudantes: string
    modulo: number
  };

export type Estudante = {
    id: string
    nome: string
    email: string
    data_nasc: string
    turma_id: string
  };

  export type Docente = {
    id: string
    nome: string
    email: string
    data_nasc: string
    turma_id: string
  };

  export type Hobby = {
    id:string
    nome: string
  };

  export type HobbyEstudante = {
    id: string
    estudante_id: string
    hobby_id: string
  }