import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FAQsComponent implements OnInit{
  path:any = "http://localhost:3000/uploads/";
  footerCustomData:any;
  id:any=1

  constructor(private dataService : DataService){}

  ngOnInit(): void {
    
  }

 
  faqs = [
    {question:"Login Related",answer:"",opened:false},
    {question:"",answer:"",opened:false},
    {question:"",answer:"",opened:false},
    {question:"",answer:"",opened:false},
    {question:"",answer:"",opened:false}
  ]

  getFooterCustom(){
    this.dataService.getFooterCustomData(this.id).subscribe((res)=>{
      this.footerCustomData = res;
      console.log(this.footerCustomData)
    })
   }
}
