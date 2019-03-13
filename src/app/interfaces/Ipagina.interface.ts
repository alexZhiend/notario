export interface Ipagina {
  titulo?: string;
  email?: string;
  facebook?: string;
  celular?: string;
  descripcion?: string;
  direccion?: string;
  slogan?: string;
  equipo_trabajo?: Equipotrabajo;
  especialidades?: Especialidades;
  fijo?: string;
}

export interface Especialidades {
  esp1?: Esp1;
  esp2?: Esp1;
  esp3?: Esp1;
  esp4?: Esp1;
  esp5?: Esp1;
  esp6?: Esp1;
  esp7?: Esp1;
  esp8?: Esp1;
  esp9?: Esp1;
  esp10?: Esp1;
  esp11?: Esp1;
}

export interface Esp1 {
  nombre?: string;
}

export interface Equipotrabajo {
  abogado1?: Abogado1;
  abogado2?: Abogado1;
  abogado3?: Abogado1;
  abogado4?: Abogado1;
  abogado5?: Abogado1;
  abogado6?: Abogado1;
}

export interface Abogado1 {
  nombre: string;
  especialidad: string;
  descripcion: string;
}
