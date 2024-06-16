import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/eBookHaven'
import CreateBook from './pages/createBooks'
import EditBook from './pages/editBooks'
// import DeleteBook from './pages/DeleteBook'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
    </Routes>
  )
}

export default App