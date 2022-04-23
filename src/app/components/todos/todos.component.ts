import { Todos } from './../../interfaces/todos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  title = "Todo title";
  inputTodo:string = "";
  todos:Array<Todos> = [];
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {content : "Task one" ,completed: true},
      {content : "Task two" ,completed: false},
    ]
  }
  deleteTask(id:any)
  {
    this.todos = this.todos.filter((element,i)=> i !==id )
  }
  toggleDone(id:number)
  {
    this.todos.map((element , i) =>
    {
      if(i == id) element.completed = !element.completed
      return element
    })
  }
  addNew()
  {
    this.todos.push({
      content : this.inputTodo,
      completed : false
    })
    this.inputTodo = ""
  }
}
