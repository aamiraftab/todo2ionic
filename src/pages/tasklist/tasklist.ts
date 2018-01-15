import { Component } from '@angular/core';
import { ItemSliding, NavController } from 'ionic-angular';
import { Task } from './task';
import { Dialogs } from '@ionic-native/dialogs';

@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})
export class TaskListPage {
  tasks: Array<Task> = [];

  constructor(public navCtrl: NavController, public dialogs: Dialogs) {
    this.tasks = [
      {title:'Milk', status: 'open'},
      {title:'Eggs', status: 'open'},
      {title:'Syrup', status: 'open'},
      {title:'Pancake Mix', status: 'open'},
    ];
  }

  addItem(){
    this.dialogs.prompt('Add a task', 'todo2Ionic', ['Ok', 'Cancel'], '')
    .then(theResult => {
      if((theResult.buttonIndex == 1) && (theResult.input1 !== '')){
        this.tasks.push({ title: theResult.input1, status: 'open' });
      }
    })
    let theNewTask: string = prompt("New Task");
    if(theNewTask !== ''){
      this.tasks.push({title: theNewTask, status:'open'})
    }
  }

  markAsDone(slidingItem: ItemSliding, task: Task){
    task.status = "done";
    slidingItem.close();
  }

  removeTask(slidingItem: ItemSliding, task: Task){
    let index = this.tasks.indexOf(task);
    if(index > -1){
      this.tasks.splice(index,1);
      slidingItem.close();
    }
  }

}
