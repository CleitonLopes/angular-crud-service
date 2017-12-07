import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: any = [];

  // construto para tratar com instancias de classes, variaveis
  constructor(private postService:PostService) {

  }

  // inicialização de componentes
  ngOnInit() {

    this.postService.getAll()
        .subscribe(data => this.posts = data)
  }

}
