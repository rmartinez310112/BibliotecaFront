import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../interfaces/category";
import { IBook } from "../../interfaces/book";



interface BookState {
  bookslist: IBook[];
  categorys: ICategory[];
  mensajeError: string;
}

const initialCategory: ICategory[] = [
  { IdCategoria: 1, Nombre: 'Psicologia' },
  { IdCategoria: 2, Nombre: 'Novela' },
  { IdCategoria: 3, Nombre: 'Ciencia Ficcion' },
  { IdCategoria: 4, Nombre: 'Fantasia' },
];

const initialState: BookState = {
  bookslist: [],
  categorys: initialCategory,
  mensajeError: '',
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IBook[]>) => {
      state.bookslist = action.payload;
    },
    addBook: (state, action: PayloadAction<IBook>) => {
      state.bookslist.push(action.payload);
    },
    editBook: (state, action: PayloadAction<IBook>) => {
      const { idLibro, titulo, autor, fechaPublicacion, cantidad, idCategoria } =
        action.payload;
      const foundBook = state.bookslist.find(
        (book) => book.idLibro === action.payload.idLibro
      );
      if (foundBook) {
        foundBook.idLibro = idLibro;
        foundBook.idCategoria = idCategoria;
        foundBook.titulo = titulo;
        foundBook.autor = autor;
        foundBook.fechaPublicacion = fechaPublicacion;
        foundBook.cantidad = cantidad;
      }
    },
    deleteBook: (state, action: PayloadAction<number>) => {
      const bookFound = state.bookslist.find(
        (book) => book.idLibro === action.payload
      );
      if (bookFound) {
        state.bookslist.splice(state.bookslist.indexOf(bookFound), 1);
      }
    },
  },
});

export const { setBooks, addBook, editBook,deleteBook} = bookSlice.actions;

export default bookSlice.reducer