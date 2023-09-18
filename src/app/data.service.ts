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
}
