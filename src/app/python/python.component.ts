import { Component } from '@angular/core';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent {
dateval:any="";
seconds:any="";
minutes:any="";
hours:any="";
days:any="";
weeks:any="";
months:any="";
years:any="";
cal(){
  if(this.dateval==""){
    alert("Selet Birth Date and Time ");
  }else{
  var nowtime=new Date();
  let now=nowtime.getTime();
  var oldtime=new Date(this.dateval);
  let before=oldtime.getTime();
  let value=now-before;
  var sec=Math.floor(value/1000);
  var min=Math.floor(value/(1000*60));
  var hour=Math.floor(value/(1000*60*60));
  var day=Math.floor(value/(1000*60*60*24));
  var week=Math.floor(value/(1000*60*60*24*7));
  var month=Math.floor(value/(1000*60*60*24*30.4375));
  var year=Math.floor(value/(1000*60*60*24*365.25)); 
  this.seconds=sec;
  this.minutes=min;
  this.hours=hour;
  this.days=day;
  this.weeks=week;
  this.months=month;
  this.years=year;
  setInterval(()=>{this.cal()},1000);
  
}       
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

}
