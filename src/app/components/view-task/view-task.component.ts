import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../task.service';
import {Task} from '../../Task';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  public tasks: Task[];
  constructor(private _taskService : TaskService ,private _router : Router) { }

  ngOnInit() {
    this._taskService.getAllTask().subscribe((tsks) => {
      this.tasks=tsks;
      console.log(this.tasks)
    },(error) => {
      console.log(error);
    })

  }

  editTask(task){
    console.log(task);
    this._taskService.setTask(task);
    this._router.navigate(['addTask'])
  }

 endTask (task){
    
    
  }

}
