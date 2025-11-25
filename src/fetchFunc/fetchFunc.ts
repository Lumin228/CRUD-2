import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;

import type { Note } from "../types/types";
import type { CreateNoteParams } from "../types/types";

interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

interface FetchFuncParams {
  page: number;
  topic: string;
}

export const deleteFunc = async (id: string) => {
  const response = await axios.delete(`https://notehub-public.goit.study/api/notes/${id}`, {
    headers: { 
      'Authorization': `Bearer ${API_KEY}`,
    }
  });
  return response.data;
}


export const createFunc = async (values: CreateNoteParams) => {
  const response = await axios.post('https://notehub-public.goit.study/api/notes', {
    title: values.title,
    content: values.content,
    tag: values.tag
  },
    {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      }
    }
  )
  return response.data;
}


export const fetchFunc = async ({ topic, page }: FetchFuncParams): Promise<NotesResponse> => {
  const response = await axios.get(
    `https://notehub-public.goit.study/api/notes?&perPage=12&sortBy=created`,
    {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
      params: {
        'page': page,
        'search': topic,
      },
    }
  );
  console.log(response);

  return response.data;
};


