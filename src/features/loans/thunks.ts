
import { apiData } from "../../api/apiData";
import { Dispatch } from "@reduxjs/toolkit";
import { addLoans, deleteLoans, setLoans } from "./loansSlice";
import { ILoan } from "../../interfaces/loan";

export const setLoansT = () => {
    return async (dispatch:Dispatch, getState: () => any) => {

       const resp = await apiData.get('/Loan/Lista');

       dispatch( setLoans( resp.data ))
    }
}

export const addLoansT = (loan:ILoan) => {
    return async (dispatch:Dispatch, getState: () => any) => {
        
            const resp = await apiData.post('/Loan/Guardar', loan)
            dispatch( addLoans({ idPrestamo: resp.data}, loan))
        
           
    }
}

export const deleteLoansT = (id:number) => {
    return async (dispatch:Dispatch, getState: () => any) => {

       const result = await apiData.put(`/Loan/Devolver/${id}`);

       dispatch( deleteLoans(id))
    }
}