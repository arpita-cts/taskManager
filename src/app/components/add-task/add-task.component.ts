import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task'
import {ParentTask} from '../../ParentTask'
import {TaskService} from '../../task.service';
import {FormGroup} from '@angular/forms'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task : Task;
  parentTasks:ParentTask[];
  taskForm: FormGroup;
  constructor(private _taskService : TaskService) { }

  ngOnInit() {

    this.task= this._taskService.getTask();
    console.log(this.parentTasks);
    this._taskService.getAllParentTask().subscribe((res) => {
      console.log(res);
      this.parentTasks=res;
    },(error) => {
      console.log(error);
    })
  }

  addTask(){
    console.log(this.task);

    this._taskService.addTask(this.task).subscribe((res) => {
      console.log(res);
    },(error) => {
      console.log(error);
    })

  }
  resetData(){
    this.taskForm.reset();
  }
}
