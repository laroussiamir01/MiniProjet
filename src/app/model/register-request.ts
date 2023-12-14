export interface RegisterRequest{
  nomEt?:string;
  prenomEt?:string;
  email?:string;
  password?:string;
  role?:string;
  cin?: number;
  ecole?: string;
  dateNaissance?: Date;
  mfaEnabled?:string;

}
