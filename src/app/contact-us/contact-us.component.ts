import { Component,OnInit} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{
  path:any = "http://localhost:3000/uploads/";
  footerCustomData:any;
  id:any=1

  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.getFooterCustom();
  }
  getFooterCustom(){
    this.dataService.getFooterCustomData(this.id).subscribe((res)=>{
      this.footerCustomData = res;
      console.log(this.footerCustomData)
    })
   }
}
