import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() public name: string | null = null;
  @Input() public date: string | null = null;
  @Input() public message: string | null = null;
  constructor() {
  }

  ngOnInit(): void {
  }

}
