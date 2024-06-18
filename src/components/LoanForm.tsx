import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { RootState } from "../store/store";
import { useState } from "react";
import { addLoansT } from "../features/loans/thunks";


const LoanForm = () => {

    const navigate =useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const prestamos = useSelector((state:RootState) => state.loans);
    const libros = useSelector((state:RootState) => state.books);
    
    console.log("esto es libros: ", libros);

   const [loan, setLoans] = useState({
    idUsuarioBiblioteca:0,
    idLibro:0,
    fechaPrestamo:null,
    fechaDevolucion:null,
    estadoPrestamo:'Prestado'
   })

   const handleChange = (e:any) => {
        setLoans({ ...loan, idUsuarioBiblioteca: e.target.value});
   }

   const handleChangeL = (e:any) => {
     setLoans({ ...loan, idLibro: e.target.value});
  }

  const handleBack = (e:any) => {
    e.preventDefault();
    navigate('/loans')
}


   const handleSubmit = (e:any) => {
      e.preventDefault();
      try {
        if(loan.idUsuarioBiblioteca != 0 && loan.idLibro != 0){
            dispatch(addLoansT(loan))
            navigate('/loans')
        }else{
            console.log("Hay 0 en la eleccion");
        }
        
      } catch (error) {
        console.log("error desde catch:", error)
      }
     }

  return (
    <div className="form-container">
    <div>
        <h2>Agregar Prestamo de libros</h2>
      </div>
    <div>
        <form  onSubmit={handleSubmit}>
            <div>
                <label >Usuario : </label>
                <select name="idUsuarioBiblioteca" onChange={handleChange}>
                <option value="0" selected> Seleccione ...</option>
                {
                    prestamos.oUsuarios.map( usua => (
                        <option key={usua.Id} value={usua.Id}>
                           {usua.Nombres} {usua.Apellidos} 
                        </option>
                    ))
                }
            </select>
            </div>
            <div>
                <label>Libro : </label>
                <select name="idLibro" onChange={handleChangeL}>
                <option value="0" selected> Seleccione ...</option>
                {
                    libros.bookslist.map( book => (
                        <option key={book.idLibro} value={book.idLibro}>
                            {book.titulo}
                        </option>
                    ))
                }
                </select>
            </div>
            <div id="divButton">
            <input type="button" onClick={handleBack} value="Regresar" />
            <button type="submit">Agregar Prestamo</button>
        </div>
        </form>
    </div>
    </div>
  )
}

export default LoanForm
