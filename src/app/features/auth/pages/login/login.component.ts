import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRutes } from 'src/app/core/routes/auth.routes';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api:ApiService,
    private auth:AuthService
  ) { }

  ngOnInit(): void {}

  routes = new AuthRutes();

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern(/^[A-Za-z\d@$!%*?&#^()_\\-]{6,}$/)]],
  })

  hide: boolean = true;
  hideC: boolean = true;


  noValid(campo: string) {
    return this.loginForm.get(campo)?.invalid
      && this.loginForm.get(campo)?.touched;
  }

  submitForm() {
    this.loginForm.markAllAsTouched();
    if (!this.loginForm.valid) { 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Valida los campos',
      });
      return;
    }
      this.api.postData(this.routes.login,this.loginForm.value).subscribe((data:any)=>{
        console.log(data);
        if(data.status == false){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          });
        }else{
          this.auth.isAuthenticated = true;
          this.router.navigate(['/features/welcome']);
        }
        
      })    
  }

  forceLogin() {
    this.auth.isAuthenticated = true;
    this.router.navigate(['/features/welcome']);
  }

}
