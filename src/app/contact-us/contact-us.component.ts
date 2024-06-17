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
  contactsData:any={
    name:'',
    phoneNo:'',
    email:'',
    subject:'',
    query:''
  }

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

   addContact(){
    let formData = new FormData();
      formData.append('name',this.contactsData.name)
      formData.append('phoneNo',this.contactsData.phoneNo)
      formData.append('email',this.contactsData.email)
      formData.append('subject',this.contactsData.subject)
      formData.append('query',this.contactsData.query)

      this.dataService.insertContactsData(formData).subscribe((res)=>{
        console.log(res)
      })
  }
}
