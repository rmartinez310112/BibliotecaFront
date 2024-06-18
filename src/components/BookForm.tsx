
import { useEffect, useState } from "react"
import "./Form.style.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { RootState } from "../store/store";
import { addBooksT, editBooksT } from "../features/books/thunks";

const BookForm = () => {

    const [book, setBook] = useState({
        idLibro:0,
    idCategoria:0,
    titulo:"",
    autor:"",
    fechaPublicacion:"",
    cantidad:1 
    });

    const dispatch = useDispatch();
    const navigate =useNavigate();
    const params = useParams();
    const libros = useSelector((state:RootState) => state.books);

        const handleChange = (e:any) => {
            setBook({
                ...book,[e.target.name]: e.target.value,
            });
        }

        const handleBack = (e:any) => {
            e.preventDefault();
            navigate('/')
        }

    
    
       const handleSubmit = (e:any) => {
        e.preventDefault();
        if(params.id){
            dispatch(editBooksT({ ...book, id:params.id}));
            console.log(book);
        }else{
          // console.log(book);
            dispatch(addBooksT(book))
        }
        navigate('/')
       }
    
       useEffect(() => {
            if(params.id){
                 setBook(libros.bookslist.find((libro) => libro.idLibro == params.id))
    
                // const resultado = bookslist.find((libro) => libro.titulo === "Imaginaria");
                // const resultado1 = bookslist.find((libro) => libro.idLibro == params.id);
                // console.log(resultado1);
            }
        }, [params, libros.bookslist]);


  return (
    <div className="form-container">
        <div>
            <h3>Agrega un libro nuevo</h3>
        </div>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Titulo : </label>
            <input type="text" name="titulo" onChange={handleChange} value={book?.titulo}/>
        </div>
        <div>
            <label>Categoria : </label>
            <select name="idCategoria" onChange={handleChange}>
            <option value="0" selected> Seleccione ...</option>
                {
                    libros.categorys.map( cat => (
                        <option key={cat.IdCategoria} value={cat.IdCategoria}>
                            {cat.Nombre}
                        </option>
                    ))
                }
            </select>
        </div>
        <div>
            <label>Autor : </label>
            <input type="text" name="autor" onChange={handleChange}  value={book?.autor}/>
        </div>
        <div>
            <label>Fecha de Publicación : </label>
            <input type="date" name="fechaPublicacion" onChange={handleChange}  value={book?.fechaPublicacion}/>
        </div>
        <div>
            <label>Cantidad : </label>
            <input type="number" min="1" name="cantidad" onChange={handleChange}  value={book?.cantidad}/>
        </div>
        <div id="divButton">
            <input type="button" onClick={handleBack} value="Regresar" />
            <button type="submit">Agregar Libro</button>
        </div>
    </form>
    </div>
  )
}

export default BookForm
