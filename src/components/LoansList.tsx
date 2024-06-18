import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect } from "react";
import { deleteLoansT, setLoansT } from "../features/loans/thunks";
import { Link } from "react-router-dom";


const LoansList = () => {

    const dispatch = useDispatch();
    const {loanslist, oUsuarios} = useSelector((state:RootState) => state.loans);
    const {bookslist} = useSelector((state:RootState) => state.books);
    
     useEffect(() => {
        dispatch(setLoansT())
        console.log(oUsuarios);
    }, []);

    // console.log("loan:", loans);

    const handleDelete = (id:number) =>{
        // console.log(loans);
          dispatch(deleteLoansT(id))
        //  dispatch(setLoansT())
    }

  return (
    <>
    <div>
      <h2>Prestamo de Libros</h2>
    </div>
    <div style={{paddingBottom:"30px"}}>
        <Link to='/create-loan'>Agregar Prestamo</Link>
    </div>
    <div>
      <table>
        <tr>
            <th>Id</th>
            <th>Usuario</th>
            <th>Libro</th>
            <th>Fecha de prestamo</th>
            <th>Fecha devolución</th>
            <th>Estado</th>
            <th>Accion</th>
        </tr>
        {
        loanslist.map(loan => (
        <tr key={ loan.idPrestamo }>
            <td>{ loan.idPrestamo }</td>
            <td>{ loan.idUsuarioBiblioteca }</td>
            <td>{ loan.idLibro }</td>
            <td>{ new Date(loan.fechaPrestamo).toString() }</td>
            <td>{ loan.estadoPrestamo == "Prestado" ? "" : new Date(loan.fechaDevolucion).toString() }</td>
            <td>{ loan.estadoPrestamo }</td>
            <td>
                <button disabled={loan.estadoPrestamo =="Devuelto" ? true : false}   onClick={() => handleDelete(loan.idPrestamo)} >Devolver</button>
            </td>
        </tr>
        ))
        }
    </table>
    </div>
    </>
  )
}

export default LoansList
