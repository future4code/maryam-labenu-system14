
export type Turma = {
    id: string
    nome: string
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

  export type Especialidades = {
    id:string
    nome: string
  };

  export type EspecialidadesDocentes = {
    id: string
    docente_id: string
    especialidade_id: string
  }
