// login.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/login.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  login() {
    if (this.loginForm.invalid) {
      this.presentAlert('Por favor, completa todos los campos correctamente.');
      return;
    }

    const { email, password } = this.loginForm.value;

    const isAuthenticated = this.authService.login(email, password);

    if (isAuthenticated) {
      this.presentAlert('Inicio de sesión exitoso.');
      this.router.navigate(['/home']);
    } else {
      this.presentAlert('Correo electrónico o contraseña incorrectos.');
    }
  }
}
