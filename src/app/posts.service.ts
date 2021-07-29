import { Injectable, OnInit } from '@angular/core';

export interface IPost {
  name: string | null;
  message: string | null;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public posts: IPost[];

  constructor() {
    //fill one post automatically
    let date = new Date();

    this.posts = [
      {
        name: "Tyler Sandoe",
        message: "FIRST POST!",
        date: this.getDateString(new Date())
      }
    ];
  }

  private getDateString(date: Date): string {
    let amOrPm=' AM';
    //At 00 hours we need to show 12 am
    if(date.getHours() >= 12)
    {
      amOrPm=' PM';
    }
    let dateString = new Date().toLocaleString();
    return dateString.substring(0, dateString.length - 6) + amOrPm;
  }

  //For now, done on client side, in future will reach the API and do a post request
  //get rid of date parameter in future and do it on server side
  addPost(message: string | null, name: string | null, date: Date){
    this.posts.push({
      message: message,
      name: name,
      date: this.getDateString(date)
    })
  }
}
