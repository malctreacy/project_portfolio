import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project-portfolio';
  constructor() { }

  words:any[]=["Web Developer", "Student", "Software Engineer"];

  word:string="Software Engineer";
  currentIdx:number =0;
  x=5;

  ngOnInit(){

  setInterval(()=>{
    this.rotateWords()
  },this.x*1000)
  }
  rotateWords(){
    if(this.currentIdx>=this.words.length){
      this.currentIdx=0;
    }
    this.word=this.words[this.currentIdx];
    this.currentIdx++
  }
}
