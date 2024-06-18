import { BrowserRouter, Route, Routes } from "react-router-dom"
import BookList from "./components/BookList"
import Home from "./components/Home"
import BookForm from "./components/BookForm"
import LoansList from "./components/LoansList"
import LoanForm from "./components/LoanForm"


const App = () => {
  return (
    <BrowserRouter>
    <Home />
    <Routes>
      <Route path="/" element={<BookList />}/>
      <Route path="/create-book" element={<BookForm />}/>
      <Route path="/edit-book/:id" element={<BookForm />}/>

      <Route path="/loans" element={<LoansList />}/>
      <Route path="/create-loan" element={<LoanForm />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
