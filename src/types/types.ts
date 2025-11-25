export interface Note {
  id: string;
  title: string;
  tag: string;
  content: string; 
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateNoteParams {
  title: string;
  content: string;
  tag: string;
}