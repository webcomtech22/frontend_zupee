import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {   }

  getZupeeBannerData(id:any){
    return this.http.get("http://localhost:3000/showZupeeBanner/"+id)
  }

  getOurGamesData(){
    return this.http.get("http://localhost:3000/showOurGames")
  }

  getMoneyGamesData(){
    return this.http.get("http://localhost:3000/showMoneyGames")
  }

  getRatingImageData(id:any){
    return this.http.get("http://localhost:3000/showRatingImage/"+id)
  }

  getReviewsData(){
    return this.http.get("http://localhost:3000/showReviews")
  }

  getZupeeMemberData(){
    return this.http.get("http://localhost:3000/showZupeeMember")
  }

  getVideoData(id:any){
    return this.http.get("http://localhost:3000/showVideo/"+id)
  }
  getQueAnsData(){
    return this.http.get("http://localhost:3000/showQueAns")
  }

  getFooterCustomData(id:any){
    return this.http.get("http://localhost:3000/showFooterCustom/"+id)
  }

  //About Us

  getAbtBannerData(id:any){
    return this.http.get("http://localhost:3000/showAbtBanner/"+id)
  }


  getAbtWhoWeAreData(id:any){
    return this.http.get("http://localhost:3000/showAbtWhoWeAre/"+id)
  }


  getAbtGameCahangeData(id:any){
    return this.http.get("http://localhost:3000/showAbtGameChange/"+id)
  }  


  getAbtDreamTeamData(){
    return this.http.get("http://localhost:3000/showAbtAllDreamTeam")
  }  

  getAbtVideoData(){
    return this.http.get("http://localhost:3000/showAbtAllVideo")
  }  

  getAbtInvestJourneyData(id:any){
    return this.http.get("http://localhost:3000/showAbtInvestJourney/"+id)
  }  

  getAbtOurValuesData(id:any){
    return this.http.get("http://localhost:3000/showAbtOurValues/"+id)
  }  

  getAbtInvestorsData(id:any){
    return this.http.get("http://localhost:3000/showAbtInvestors/"+id)
  }  

//BLOG
  getBlogInfoData(){
    return this.http.get("http://localhost:3000/showBlogAllInfo")
  }
  getBlogAboutData(id:any){
    return this.http.get("http://localhost:3000/showBlogAbout/"+id)
  }  
  getBlogPostsData(){
    return this.http.get("http://localhost:3000/showBlogAllPosts")
  }


  //newsRoom
  
  getNewsBannerData(id:any){
    return this.http.get("http://localhost:3000/showNewsBanner/"+id)
  } 
  getNewsInfoData(){
    return this.http.get("http://localhost:3000/showNewsAllInfo")
  }

  //Ludo
  getLudoBannerData(id:any){
    return this.http.get("http://localhost:3000/showLudoBanner/"+id)
  } 
  getLudoGamesData(){
    return this.http.get("http://localhost:3000/showLudoAllGames")
  }
  getLudoRatingData(id:any){
    return this.http.get("http://localhost:3000/showLudoRating/"+id)
  } 
  
  getLudoGameToPlayData(id:any){
    return this.http.get("http://localhost:3000/showLudoGameToPlay/"+id)
  } 
  getLudoReviewsData(){
    return this.http.get("http://localhost:3000/showLudoAllReviews")
  }
  getLudoStepsData(){
    return this.http.get("http://localhost:3000/showLudoAllSteps")
  }
  getLudoQueAnsData(){
    return this.http.get("http://localhost:3000/showLudoQueAns")
  }

  //contact us

  insertContactsData(data:any){
    return this.http.post("http://localhost:3000/addContact",data)
  }

}
