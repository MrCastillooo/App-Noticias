import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { email: 'lean@gmail.com', password: 'root' },
    
  ];

  login(email: string, password: string): boolean {
    const user = this.users.find((u) => u.email === email && u.password === password);
    return !!user; // Devuelve true si el usuario es encontrado, false si no.
  }
}