import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  bannerData:any;
  whoWeAreData:any;
  gameChangeData:any;
  dreamTeamData:any;
  videoData:any;
  investJourneyData:any;
  ourValuesData:any;
  investorsData:any;
  footerData:any;
  id:any=1;
  path:any ="http://localhost:3000/uploads/";

  constructor(private dataService: DataService,private sanitizer:DomSanitizer){}

  ngOnInit(): void {
    this.getAbtBanner();
    this.getAbtWhoWeAre();
    this.getAbtGameChange();
    this.getDreamTeam();
    this.getVideo();
    this.getInvestJourney();
    this.getOurValuesData();
    this.getInvestors();
    this.getFooter();
  }

  // dreamTeamData =[
  //   {name:"Dilsher Malhi",post:"Founder & CEO",description:"A staunch believer of the revered 70’s bollywood movie dialogue, “zindagi lambi nahi, badi honi chahiye”, Dilsher founded Zupee with the agenda of creating a product that sparks joy and betters one’s quality of life. Gamer, avid reader and human-behavior psychology nerd, Dilsher is a big fan of the NBA and wishes to watch a game at Madison Square soon.",image:"/assets/images/dreamTeam-1.webp"},
  //   {name:"Siddhant Saurabh",post:"Co-Founder",description:"The Co-Founder at Zupee, Siddhant is the reason behind the sleek app that is today Zupee. A tech stack architecture so elegant yet robust that it seamlessly serves the ever-growing user base is what our in-house tech-guru, Siddhant has achieved for Zupee. Siddhant is a big music lover and can often be spotted at work with a pair of headphones on!",image:"/assets/images/dreamTeam-2.webp"},
  //   {name:"Akanksha Dhamija",post:"Chief Operating Officer",description:"Akansha Dhamija also lovingly known as AD, is the pillar Zupee relies on when it comes to launching new games, creating best-in-class platform and gaming experiences for all Zupee users. An avid reader, our Chief Operating Officer comes with more than a decade of experience in the tech industry and is also someone who believes and actively works to close the gender gap in the tech space.",image:"/assets/images/dreamTeam-3.webp"},
  //   {name:"Jyoti Gupta",post:"Vice President - Engineering",description:"Jyoti leads one of the most important verticals in the organization – Engineering. Be it a bug or a large tech intervention, Jyoti is the person Zupee relies on. Jyoti has grown a team of 10 to a team of 110 today. An ex-founder herself, Jyoti is always building something cool at work and when she is not, she’s humming a song or two in her melodious voice!",image:"/assets/images/dreamTeam-4.webp"},
  //   {name:"Shwetank Anand",post:"Head – Data Science & Analytics",description:"Our lead of Head - Data Science & Analytics, Shwetank, will convince you there is nothing that can’t be solved using data. His team works to make sure Zupee makes games that are a hit. How do they do this? By mining terabytes of data to identify factors that make a game successful. Swetank is a big gamer himself which has only made joining and leading Zupee a child’s play!",image:"/assets/images/dreamTeam-5.webp"},
  //   {name:"Sairam Mushyam",post:"Vice President – Data Science & Analytics",description:"Our Vice President - Data Science & Analytics, Sai, can pretty much walk the talk when it comes to data. He helps Zupee utilize data to build personalized experiences, improve processes and optimize business operations. Apart from delivering data driven solutions to shape Zupee’s strategy, Sai loves geeking out on Football and is a big FC Barcelona fan!",image:"/assets/images/dreamTeam-6.webp"},
  //   {name:"Govind Mittal",post:"Chief of Staff",description:"Govind is that one person at Zupee who’s been there, done that. One of the first employees of Zupee, Govind has built the Finance team from ground up, setting up teams for Tax, Accounts & Audit, Business Finance, Fundraise and Due Diligence. Our Finance Controller and food enthusiast, now works with the CFO and CEO getting Zupee ready for the next phase of growth.",image:"/assets/images/dreamTeam-7.webp"},
  //   {name:"Ashwani Rana",post:"Chief Public Policy Officer",description:"Our Chief of Public Policy - Ashwani Rana, not just steers Zupee through the choppy waters but is also playing an important role in promoting industry cause at various policy forums. With an alma mater as strong as his, Ashwani is all set to keep Zupee ahead of the curve. When not in knee - deep work, you will find Ashwani indulging in literature of all sorts. He is always eager to learn and collaborate not just with his team, colleagues, but industry, civil society and government to promote innovation enabling policy framework.",image:"/assets/images/dreamTeam-8.webp"},
  //   {name:"Surabhi Sanchita",post:"Vice President - Human Resources",description:"A company is its people and Surabhi ensures it stays that way. Be it starting interest groups or announcing the much-needed period policy, Surabhi is not just building a people strategy to support overall business growth but she is also creating a great workplace culture that in return strengthens Zupee’s brand. When she is not using her 16 years of experience to be the HR superstar at Zupee, you can find her exploring the world or singing her favorite songs.",image:"/assets/images/dreamTeam-9.webp"},
  // ]


  getAbtBanner(){
    this.dataService.getAbtBannerData(this.id).subscribe((res)=>{
      this.bannerData = res
      console.log(this.bannerData)
    })
  }

  getAbtWhoWeAre(){
    this.dataService.getAbtWhoWeAreData(this.id).subscribe(res=>{
      this.whoWeAreData = res
      console.log(this.whoWeAreData)
    })
  }

  getAbtGameChange(){
    this.dataService.getAbtGameCahangeData(this.id).subscribe(res=>{
      this.gameChangeData = res
      console.log(this.gameChangeData)
    })
  }

  getDreamTeam(){
    this.dataService.getAbtDreamTeamData().subscribe(res=>{
      this.dreamTeamData = res
      console.log(this.dreamTeamData)
    })
  }


  sanitizeVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  
  getVideo(){
    this.dataService.getAbtVideoData().subscribe(res=>{
      this.videoData = res
      console.log(this.videoData)
    })
  }

  getInvestJourney(){
    this.dataService.getAbtInvestJourneyData(this.id).subscribe(res=>{
      this.investJourneyData = res
      console.log(this.investJourneyData)
    }) 
  }

  getOurValuesData(){
    this.dataService.getAbtOurValuesData(this.id).subscribe(res=>{
      this.ourValuesData = res
      console.log(this.ourValuesData)
    }) 
  }

  getInvestors(){
    this.dataService.getAbtInvestorsData(this.id).subscribe(res=>{
      this.investorsData = res
      console.log(this.investorsData)
    })  
  }

  getFooter(){
    this.dataService.getFooterCustomData(this.id).subscribe(res=>{
      this.footerData = res
      console.log(this.footerData)
    })  
  }

}
