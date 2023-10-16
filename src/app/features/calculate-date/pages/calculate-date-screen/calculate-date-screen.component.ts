import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculate-date-screen',
  templateUrl: './calculate-date-screen.component.html',
  styleUrls: ['./calculate-date-screen.component.css']
})
export class CalculateDateScreenComponent   {
  
  fechaSeleccionada: Date = new Date();
  unidadSeleccionada: string = 'dias';
  cantidad: number = 0;
  resultado: Date = new Date();

  sumarFecha() { if (!this.fechaSeleccionada || !this.unidadSeleccionada || !this.cantidad || this.cantidad <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Debes completar todos los campos y la cantidad debe ser mayor a 0',
    });
    return;
  }

  this.resultado = new Date(this.fechaSeleccionada);

  if (this.unidadSeleccionada === 'dias') {
    this.resultado.setDate(this.resultado.getDate() + this.cantidad + 1);
  } else if (this.unidadSeleccionada === 'meses') {
    const año = this.resultado.getFullYear();
    const mes = this.resultado.getMonth() + this.cantidad;
    const dia = this.resultado.getDate();

    this.resultado.setFullYear(año + Math.floor(mes / 12));
    this.resultado.setMonth(mes % 12);

    // Fix date selection
    if (this.resultado.getDate() === dia) {
      this.resultado.setDate(dia + 1);
    }
  } else if (this.unidadSeleccionada === 'años') {
    const dia = this.resultado.getDate();
    this.resultado.setFullYear(this.resultado.getFullYear() + this.cantidad);

    if (this.resultado.getDate() === dia) {
      this.resultado.setDate(dia + 1);
    }
  }
  }
}