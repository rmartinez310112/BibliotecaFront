import { Dispatch } from "@reduxjs/toolkit";
import { apiData } from "../../api/apiData";
import { addBook, deleteBook, editBook, setBooks } from "./bookSlice";
import { IBook } from "../../interfaces/book";


export const setBooksT = () => {
    return async (dispatch:Dispatch, getState: () => any) =>  {
        const resp = await apiData.get('/Book/Lista');
     //    console.log(resp.data);
        dispatch( setBooks( resp.data ))
     }
}

export const addBooksT = (book:IBook) => {
    return async (dispatch:Dispatch, getState: () => any) => {

        const resp = await apiData.post('/Book/Guardar', book)
         console.log("esto es respuesta de agregar libro",resp);
       dispatch( addBook({ idLibro: resp.data, titulo: book.titulo, idCategoria:book.idCategoria, autor:book.autor, fechaPublicacion: book.fechaPublicacion, cantidad: book.cantidad} ))
    }
}

export const deleteBooksT = (id:number) => {
    return async (dispatch:Dispatch, getState: () => any) => {

      const result = await apiData.delete(`/Book/Eliminar/${id}`);

       dispatch( deleteBook( id ))
    }
}

export const editBooksT = (book:IBook) => {
    return async (dispatch:Dispatch, getState: () => any) => {
        // console.log(book);
      const result = await apiData.put('/Book/Editar', book)

       dispatch( editBook(book))
    }
}


