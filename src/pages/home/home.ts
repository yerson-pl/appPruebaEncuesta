import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TodosProvider } from './../../providers/todos/todos';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  todos: any;

  constructor(public navCtrl: NavController, public todoService: TodosProvider, public alertCtrl: AlertController) {

  }

  ionViewDidLoad(){

    this.todoService.getTodos().then((data) => {
      this.todos = data;
    });

  }

  createTodo(){

    let prompt = this.alertCtrl.create({
      title: 'Agregar',
      message: 'Que necesitas hacer?',
      inputs: [
        {
          name: 'tituloar'
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Guardar',
          handler: data => {
            this.todoService.createTodo({title: data.title});
          }
        }
      ]
    });

    prompt.present();

  }

  updateTodo(todo){

    let prompt = this.alertCtrl.create({
      title: 'Editar',
      message: 'Cambiar?',
      inputs: [
        {
          name: 'tituto'
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Guardar',
          handler: data => {
            this.todoService.updateTodo({
              _id: todo._id,
              _rev: todo._rev,
              title: data.title
            });
          }
        }
      ]
    });

    prompt.present();
  }

  deleteTodo(todo){
    this.todoService.deleteTodo(todo);
  }

}
