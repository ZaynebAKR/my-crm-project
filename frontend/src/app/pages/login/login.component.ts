import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = "";
  password = "";

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    // Validation checks
    if (!this.username) {
      alert("Veuillez entrer votre nom d'utilisateur !");
      return;
    }
    
    if (!this.password) {
      alert("Veuillez entrer votre mot de passe !");
      return;
    }

    // Data to send to backend
    const data = {
      username: this.username,
      password: this.password
    };

    // Send login request
    this.http.post("http://localhost:8081/auth/login", data)
      .subscribe({
        next: (res: any) => {
          console.log("Login success:", res);

          const role = res.role;

          // 🔥 REDIRECT BASED ON ROLE
          if (role === 'INSOMEA') {
            this.router.navigate(['/insomea-dashboard']);
          }
          else if (role === 'PARTENAIRES_COMMERCIAUX') {
            this.router.navigate(['/partenaires-dashboard']);
          }
          else if (role === 'CLIENT') {
            this.router.navigate(['/client-dashboard']);
          }
          else if (role === 'MICROSOFT') {
            this.router.navigate(['/microsoft-dashboard']);
          }
          else {
            alert("Role not recognized");
          }
        },

        error: (err) => {
          console.log("Login failed:", err);
          let errorMessage = "Invalid credentials";
          if (err.error && err.error.message) {
            errorMessage = err.error.message;
          }
          alert(errorMessage);
        }
      });
  }
}