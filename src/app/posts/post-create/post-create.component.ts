
import { style } from '@angular/animations';
import { Component } from '@angular/core';

// Decorator for angular to understand
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
  enteredValue = '';
  newPost = 'NO CONTENT';

  onAddPost(){
    this.newPost = this.enteredValue;
    console.log(this.enteredValue)
  }
}
