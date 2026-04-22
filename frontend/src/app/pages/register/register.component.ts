import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
 // encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  fullName = "";
  username = "";
  email = "";
  password = "";
  role = "";

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    // Validation checks
    if (!this.fullName) {
      alert("Veuillez entrer votre nom complet !");
      return;
    }
    
    if (!this.username) {
      alert("Veuillez entrer un nom d'utilisateur !");
      return;
    }
    
    if (!this.email) {
      alert("Veuillez entrer votre email !");
      return;
    }
    
    if (!this.password) {
      alert("Veuillez entrer un mot de passe !");
      return;
    }
    
    if (!this.role) {
      alert("Veuillez choisir un rôle !");
      return;
    }

    // Data to send to backend
    const data = {
  username: this.username,
  password: this.password,
  role: this.role
    };

    // Send registration request
    this.http.post("http://localhost:8081/auth/register", data)
      .subscribe({
        next: (res) => {
          console.log("Registration success:", res);
          alert("Registered successfully!");
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error("Registration failed:", err);
          let errorMessage = "Registration failed!";
          if (err.error && err.error.message) {
            errorMessage = err.error.message;
          }
          alert(errorMessage);
        }
      });
  }
}