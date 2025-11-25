import { useState } from 'react'
import css from './App.module.css'
import SearchBox from '../SearchBox/SearchBox'
import Pagination from '../Pagination/Pagination'
import {fetchFunc, createFunc, deleteFunc} from '../../fetchFunc/fetchFunc'
import NoteList from '../NoteList/NoteList'
import Modal from '../Modal/Modal'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type { CreateNoteParams } from '../../types/types'

function App() {
  const [page, setPage] = useState<number>(1);
  const [openForm, setOpenForm] = useState<boolean>(false)
  const [topic, setTopic] = useState<string>('')

  const queryClient = useQueryClient();

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['notes', topic, page],
    queryFn: () => fetchFunc({topic, page}),
  });


  const mutation = useMutation({
    mutationFn: (values: CreateNoteParams) => createFunc(values),
    onSuccess: () => {
      console.log("Todo added successfully");
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  })


  const deletion = useMutation({
    mutationFn: (id: string) => deleteFunc(id),
    onSuccess: () => {
      console.log("Todo deleted successfully");
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  })


  const handleDeleteNote = (id: string) => {
    deletion.mutate(id)
  }

    const handleCreateNote = (values: CreateNoteParams) => {
	  mutation.mutate(values)
  };


  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          <SearchBox onType={setTopic} text={topic}/>
          {data && data.totalPages > 1 && (
            <Pagination pages={data.totalPages} changePage={setPage} currentPage={page} />
          )}
          <button className={css.button} onClick={() => setOpenForm(true)}>Create note</button>
        </header>
        <main>
          {openForm && (<Modal onClose={setOpenForm} onCreate={handleCreateNote}/>)}
          {data && data.notes && data.notes.length > 0 && <NoteList list={data.notes} deleteNote={handleDeleteNote}/>}

        </main>
      </div>
    </>
  )
}

export default App
