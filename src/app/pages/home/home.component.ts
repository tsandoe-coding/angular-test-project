import { Component, OnInit } from '@angular/core';
import { PostsService, IPost } from 'src/app/posts.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts: IPost[];

  constructor(private postsService: PostsService, private modalService: NgbModal) {
    this.posts = [];
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  ngOnInit(): void {
    this.posts = this.postsService.posts;
  }

  addPost(form: NgForm): void {
    this.modalService.dismissAll();
    this.postsService.addPost(form.value.message, form.value.name, new Date());
  }
}
