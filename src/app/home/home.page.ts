import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonButton, IonCheckbox, IonInput } from '@ionic/angular/standalone';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ReactiveFormsModule, IonItem, IonLabel, IonButton, IonCheckbox, IonInput, CommonModule],
})
export class HomePage {
  tareas: { nombre: string | null; fecha: string | null; descripcion: string | null; completada: boolean }[] = [];

  tarea = new FormGroup({
    nombre: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    descripcion: new FormControl('')
  });

  nTarea() {
    if (this.tarea.valid) {
      const nuevaTarea = {
        nombre: this.tarea.value.nombre!,
        fecha: this.tarea.value.fecha!,
        descripcion: this.tarea.value.descripcion!,
        completada: false
      };
      this.tareas.push(nuevaTarea);

      this.tarea.reset();
    }
  }
  constructor() {}
}
