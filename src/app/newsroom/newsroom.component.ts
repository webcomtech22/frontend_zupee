import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NewsInfo } from '../data.model'


@Component({
  selector: 'app-newsroom',
  templateUrl: './newsroom.component.html',
  styleUrls: ['./newsroom.component.css']
})
export class NewsroomComponent implements OnInit{
  path:any = "http://localhost:3000/uploads/";
  // newsInfoData:any;
  newsBannerData:any;
  footerCustomData:any;
  id:any=1
  newsInfoData: NewsInfo[] = []; // Initialize as an empty array of the specified type
  filteredNewsData:NewsInfo[] = []; // Initialize filtered data as empty initially


constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.getFooterCustom();
    this.getNewsBanner();
    this.getNewsInfo();
  }
  // filterNewsData:any[] = this.newsInfoData;

  // newsData = [
  //   {image:"/assets/images/newsRoom1.png",heading:"Dilsher at G20-DIA Summit, Bangalore",date:"Aug 19, 2023",news:"Latest News",post:"APN News"},
  //   {image:"/assets/images/newsRoom2.png",heading:"Zupee celebrates ‘Ajab Gajab Rang of India’ ahead of Independence Day",date:"Aug 15, 2023",news:"Latest News",post:"Afaqs"},
  //   {image:"/assets/images/newsRoom3.png",heading:"Zupee elevates Akanksha Dhamija as Chief Operating Officer",date:"Jul 10, 2023",news:"",post:"FE"},
  //   {image:"/assets/images/newsRoom4.jpg",heading:"Online gaming platform Zupee announces Kapil Sharma as Brand Ambassador",date:"Jul 7, 2023",news:"",post:"BS"},
  //   {image:"/assets/images/newsRoom5.png",heading:"Zupee Redefines the online gaming Landscape with Tech, Innovation, Consumer Insights, and Neuroscience Synergy",date:"Jul 2, 2023",news:"",post:"MI"},
  //   {image:"/assets/images/newsRoom6.png",heading:"Zupee adds Kapil Sharma as brand ambassador, announces new campaign ‘India Ka Apna Game’",date:"Jun 30, 2023",news:"View Press Release",post:"Mint"},
  //   {image:"/assets/images/newsRoom7.png",heading:"Best Money Earning Games 2023",date:"Jun 9, 2023",news:"",post:""},
  //   {image:"/assets/images/newsRoom8.png",heading:"National Technology Day: Why one should build a career in technology domain",date:"May 11, 2023",news:"",post:"TOI"},
  //   {image:"/assets/images/newsRoom9.png",heading:"Zupee becomes the first skill based online gaming platform in the RMG space to introduce a ‘Period Leave Policy’",date:"Mar 13, 2023",news:"View Press Release",post:"YOI"},
  //   {image:"/assets/images/newsRoom10.png",heading:"International women’s day – In conversation with Ms. Jyoti Gupta",date:"Mar 9, 2023",news:"",post:"Times New"},
  //   {image:"/assets/images/newsRoom11.png",heading:"Zupee ropes in Salman Khan as its brand ambassador : Announces Brand Campaign ’10 minute mein game ho jayega’",date:"Feb 17, 2023",news:"View Press Release",post:"ET"},
  //   {image:"/assets/images/newsRoom9.png",heading:"The online gaming industry is creating a unique union between Entertainment and Skill",date:"Nov 9, 2022",news:"",post:"TOI"},
  //   {image:"/assets/images/newsRoom12.jpg",heading:"Zupee rolls out new campaign ‘Saara India Khelega’",date:"May 22, 2022",news:"View Press Release",post:"FE"},
  //   {image:"/assets/images/newsRoom4.jpg",heading:"Zupee incs content deal with Jio, raises $72Mn in latest funding round",date:"Jan 5, 2022",news:"",post:"ET"},
  //   {image:"/assets/images/newsRoom13.png",heading:"Zupee and Reliance Jio announce strategic partnership",date:"Jan 5, 2022",news:"View Press Release",post:"Business Insider"},
  // ]

  getNewsBanner(){
    this.dataService.getNewsBannerData(this.id).subscribe(res=>{
      this.newsBannerData = res;

    })
  }

  getNewsInfo(){
    this.dataService.getNewsInfoData().subscribe((res)=>{
      this.newsInfoData = res as NewsInfo[];
      this.filteredNewsData = this.newsInfoData
    })
  }

  getFooterCustom(){
    this.dataService.getFooterCustomData(this.id).subscribe((res)=>{
      this.footerCustomData = res;
      console.log(this.footerCustomData)
    })
   }

   showPressRelease(){
    this.filteredNewsData = this.newsInfoData.filter(obj => obj.news === 'View Press Release')
   }
   showZupeeNews() {
    this.filteredNewsData = this.newsInfoData.filter(obj=> obj.news !== 'View Press Release')
  }
    showAllData(){
      this.filteredNewsData = this.newsInfoData
    }
  //  viewRelease(){
  //   if(this.newsInfoData.news === "View Press Release")
  //   this.dataService.getNewsInfoData().subscribe(res=>{
  //     this.newsInfoData = res
  //   })
  //  }
}
