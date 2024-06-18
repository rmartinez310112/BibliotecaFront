import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/user';
import { ILoan } from '../../interfaces/loan';

interface LoanState {
  loanslist: ILoan[];
  oUsuarios: IUser[];
  mensajeError: string;
}

const initialUser: IUser[] = [
    { Id: 1, Nombres: 'Rodrigo', Apellidos:'Mendez Espinoza' },
    { Id: 2, Nombres: 'Adriana', Apellidos:'Suarez Sanchez' },
    { Id: 3, Nombres: 'Rosa Maria', Apellidos:'Hurtado Flores' },
  ];

const initialState: LoanState = {
  loanslist: [],
  oUsuarios: initialUser, // Assuming 'usuarios' is defined elsewhere
  mensajeError: '',
};

export const loansSlice = createSlice({
  name: 'loans',
  initialState,
  reducers: {
    setLoans: (state, action: PayloadAction<ILoan[]>) => {
      state.loanslist = action.payload;
    },
    addLoans: (state, action: PayloadAction<ILoan>) => {
      state.loanslist.push(action.payload);
    },
    ErrorLoans: (state, action: PayloadAction<string>) => {
      console.log('error slice:', action.payload);
      state.mensajeError = action.payload;
    },
    deleteLoans: (state, action: PayloadAction<number>) => {
      const loanFound = state.loanslist.find((loan) => loan.idPrestamo === action.payload);
      if (loanFound) {
        loanFound.estadoPrestamo = 'Devuelto';
        loanFound.fechaDevolucion = new Date().toISOString().slice(0, 10);
      }
    },
  },
});

export const { setLoans, addLoans, deleteLoans,ErrorLoans} = loansSlice.actions;
export default loansSlice.reducer