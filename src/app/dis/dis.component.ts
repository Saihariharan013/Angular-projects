import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dis',
  templateUrl: './dis.component.html',
  styleUrls: ['./dis.component.css']
})
export class DisComponent implements OnInit {
 
  mytext :string="";
mytask :string []=["jjjjjj"];
ngOnInit(): void {
  this.mytask=(JSON.parse(localStorage.getItem("value")as string));
}
addlist(){
  if(this.mytext!=""){
      this.mytask.unshift(this.mytext);
      localStorage.setItem("value",JSON.stringify(this.mytask));
      this.mytext ="";
    }
  else{alert("Add task don't leave empty");}
}

deletelist(index:number){
  this.mytask.splice(index,1);
  localStorage.setItem("value",JSON.stringify(this.mytask));
}
}
