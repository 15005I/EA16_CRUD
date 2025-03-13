import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonButton, IonCheckbox, IonInput } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, IonItem, IonLabel, IonButton, IonCheckbox, IonInput, CommonModule],
})

export class HomePage implements OnInit {

  tasks$!: Observable<Task[]>;
  description: string = '';
  name: string = '';

  constructor(private taskService: TaskService){}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasks$ = this.taskService.getTasks();
  }

  addTask(description: string) {
    if (description) {
      const newTask: Task = {name: this.name, description, completed: false };
      this.taskService.addTask(newTask).then(() => {
        this.getTasks(); 
        this.name = '';
        this.description = ''; 
      });
    }
  }

  updateTask(id: string | undefined, completed: boolean) {
    if (id) {
      this.taskService.updateTask(id, { completed }).then(() => {
        this.getTasks();
      });
    }
  }

  deleteTask(id: string | undefined) {
    if (id) {
      this.taskService.deleteTask(id).then(() => {
        this.getTasks();
      });
    }
  }

}