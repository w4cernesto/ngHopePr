import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getData(apiUrl : string): Observable<any> {
    return this.http.get(apiUrl)
      .pipe(
        catchError(this.manageError)
      );
  }

  postData(apiUrl : string,newData:any): Observable<any> {
    return this.http.post(apiUrl, newData, this.httpOptions)
      .pipe(
        catchError(this.manageError)
      );
  }

  updateData(apiUrl : string,id: number, updatedData: any): Observable<any> {
    return this.http.put(apiUrl + `/${id}`, updatedData, this.httpOptions)
      .pipe(
        catchError(this.manageError)
      );
  }

  deleteData(apiUrl : string,id: number): Observable<any> {
    return this.http.delete(apiUrl + `/${id}`)
      .pipe(
        catchError(this.manageError)
      );
  }

  private manageError(error: HttpErrorResponse) {
    try{
      console.log(error);
      if (error.error instanceof ErrorEvent) {
        // Error del lado del cliente
        console.error('Error del lado del cliente:', error.error.message);
      } else {
        // Error del lado del servidor
        console.error(`Código de error: ${error.status}, ` + `Mensaje: ${error.error.header?.descripcionRespuesta == undefined ?'Error 50X':error.error.header?.descripcionRespuesta} '}`);
      }
      return of({status: false, data: error, message: error.error.header?.descripcionRespuesta == undefined ?error.message:error.error.header?.descripcionRespuesta});
    }catch(e){
      return of({status: false, data: error, message: error.error.header?.descripcionRespuesta == undefined ?'Error 50X':error.error.header?.descripcionRespuesta} );
    }
  }
}