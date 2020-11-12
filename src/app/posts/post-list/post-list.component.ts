import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
  // posts = [
  //   {title: "First Title", content: "This is the first content"},
  //   {title: "Second Title", content: "This is the Second content"},
  //   {title: "Third Title", content: "This is the Third content"}
  // ]
  @Input() posts = [];
}
