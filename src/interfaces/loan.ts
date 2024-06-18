export interface ILoan{
    idPrestamo:number;
    idUsuarioBiblioteca:number;
    idLibro:number;
    fechaPrestamo:string;
    fechaDevolucion:string;
    estadoPrestamo:string;
}