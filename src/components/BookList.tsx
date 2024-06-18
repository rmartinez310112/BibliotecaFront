
import { Link } from 'react-router-dom';
import "./List.style.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteBooksT, setBooksT } from '../features/books/thunks';
import { RootState } from '../store/store';

const BookList = () => {

    const libros = useSelector((state: RootState) => state.books)
    const dispatch = useDispatch();

    useEffect(() => {
         dispatch(setBooksT());
          
      }, []);
    
      const handleDelete = (id: number) => {
        dispatch(deleteBooksT(id));
      };

  return (
    <>
      <div>
        <h2>Lista de Libros</h2>
      </div>
      <div style={{paddingBottom:"30px"}}>
      <Link to='/create-book' >Agregar nuevo libro</Link>
      </div>
      <div>
    <table>
        <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Categoria</th>
            <th>Autor</th>
            <th>Fecha Publicación</th>
            <th>Cantidad</th>
            <th>Accion</th>
        </tr>
        {
        libros.bookslist.map(book => (
        <tr key={ book.idLibro }>
            <td>{book.idLibro}</td>
            <td>{book.titulo}</td>
            <td>{ libros.categorys.find(x => x.IdCategoria == book.idCategoria).Nombre}</td>
            <td>{book.autor}</td>
            <td>{book.fechaPublicacion}</td>
            <td>{book.cantidad}</td>
            <td>
                <Link to={`/edit-book/${book.idLibro}`} style={{paddingRight:"15px"}}>Editar</Link>
                <Link onClick={ () => handleDelete(book.idLibro)}>Eliminar</Link>
            </td>
        </tr>
        ))
        }
    </table>
      </div>
    </>
  )
}

export default BookList
