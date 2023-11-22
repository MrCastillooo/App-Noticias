import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {
  formulario: FormGroup;
  comentarios: any[] = [];
  imagenPreview: any;
  comentarioActual: any = {};

  constructor(private formBuilder: FormBuilder, private alertCtrl: AlertController) {
    this.formulario = this.formBuilder.group({
      titulo: [''],
      comentario: [''],
      imagen: [null],
    });
  }

  async onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = (fileInput.files && fileInput.files[0]) ? fileInput.files[0] : null;

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenPreview = e.target.result;
        this.mostrarAlertaAgregarComentario();
      };
      reader.readAsDataURL(file);
    }
  }

  async mostrarAlertaAgregarComentario() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar agregar noticia',
      message: '¿Estás seguro de agregar esta noticia?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Agregar',
          handler: () => {
            this.agregarComentario();
          },
        },
      ],
    });

    await alert.present();
  }

  agregarComentario() {
    const tituloControl = this.formulario.get('titulo');
    const comentarioControl = this.formulario.get('comentario');

    if (tituloControl && comentarioControl) {
      const titulo = tituloControl.value || '';
      const comentario = comentarioControl.value || '';

      const nuevoComentario = {
        titulo: titulo,
        comentario: comentario,
        imagen: this.imagenPreview,
      };

      this.comentarios.push(nuevoComentario);

      this.imagenPreview = null;
      this.formulario.reset();
    }
  }

  async mostrarAlertaEliminarComentario(index: number) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de eliminar esta noticia?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.eliminarComentario(index);
          },
        },
      ],
    });

    await alert.present();
  }

  eliminarComentario(index: number) {
    this.comentarios.splice(index, 1);
  }
}
