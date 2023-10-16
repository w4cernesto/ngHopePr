import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { DataService } from '../../data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-screen',
  templateUrl: './form-screen.component.html',
  styleUrls: ['./form-screen.component.css']
})
export class FormScreenComponent implements OnInit{
  constructor(private fb : FormBuilder, private dataService : DataService){}

  myForm! : FormGroup;
  titulo : FormControl = new FormControl('');
  titulos : string[] = [];
  estadoCivil : string[] = ['Soltero','Casado','Viudo'];
  ngOnInit(): void {
    this.myForm = this.fb.group({
      nombre : ['',Validators.required, this.blankSpaceValidators],
      apellidos : ['', Validators.required, this.blankSpaceValidators],
      fumas : [false, Validators.required],
      actualmentePracticasLectura : [false, Validators.required],
      librosLeidosUltimosTresMeses : [[]],
      estadoCivil : ['']
    });
    this.myForm.get('librosLeidosUltimosTresMeses')?.disable();
    this.titulo.disable();
  }

  addBook(){
    this.titulos.push(this.titulo.value);
  }
  deleteBook(book : string){
    this.titulos = this.titulos.filter((data : string)=>data!==book);
    this.titulo.setValue('');
  }
  enableBooks(){
    if (!this.myForm.get('actualmentePracticasLectura')?.value) {
      this.myForm.get('librosLeidosUltimosTresMeses')?.enable();
      this.titulo.disable()
    }
    else{
      this.myForm.get('librosLeidosUltimosTresMeses')?.disable();
      this.titulo.enable();
    }
  }
  blankSpaceValidators(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      const expresion = /\s+$/;
      if (expresion.test(control.value)) {
        resolve({ invalid: true });
      } else {
        resolve(null);
      }
    });
  }

  enviar(){
    if (this.myForm.valid) {
      const body = this.myForm.value;
      body["librosLeidosUltimosTresMeses"] = [...this.titulos];
      Swal.fire({
        title : "Datos Correctos",
        icon : 'success',
        showConfirmButton : true,
        confirmButtonText : "OK"
      })
    }
    else{
      Swal.fire({
        title : "Datos Erroneos",
        icon : 'error',
        showConfirmButton : true,
        confirmButtonText : "OK"
      })
    }
  }
}
