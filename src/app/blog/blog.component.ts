import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BLOGComponent implements OnInit{
  id:any=1;
  blogInfoData:any;
  blogAboutData:any;
  blogRecentPost:any;
  path:any = "http://localhost:3000/uploads/"

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.getBlogInfo(); 
    this.getBlogAbout();
    this.getBlogRecentPost();
  }

//   blogData=[
//     {image:"/assets/images/blog_image1.webp",heading:"How to play Ludo?",dateName:"June 18, 2023 By Vidhya Bharathi",description:"Ludo is a popular strategic board game with straightforward gameplay. Technological advancement lets you play Ludo games online on mobile apps like Zupee. And guess what! You can win up to Rs.10 Lakhs. The best part – the game’s objective remains the same, i.e., to move your tokens clockwise around the board, up the home …"},
//     {image:"/assets/images/blog_image2.webp",heading:"Snakes and Ladders Rules: 10 Must know rules to play",dateName:"June 12, 2023 By Lekhika Dhariyal",description:"Welcome to our comprehensive guide on the rules of Snakes and Ladders! To play Snakes and Ladders, roll the dice and move your token along the numbered squares. Climb ladders to advance and avoid sliding down snakes. Reach the final square to win. Simple yet exciting! In this article, we will walk you through the …"},
//     {image:"/assets/images/blog_image3.webp",heading:"Ludo Winning Tricks and Tips",dateName:"March 18, 2023 By Vidhya Bharathi",description:"Dive into the world of strategic gaming by mastering Ludo tricks and understanding how to win Ludo consistently. Welcome to our comprehensive guide that is primarily designed to enhance your gaming skills through winning techniques and strategies. It’s time to up your game and impress your opponents by conquering the online Ludo field. Here is …"},
//     {image:"/assets/images/blog_image4.webp",heading:"Play & Win Ludo Money Online on Zupee",dateName:"January 20, 2022 By Vidhya Bharathi",description:"With an endless list of online ludo games on the internet, how do you choose which online ludo game to play? Is it possible to play an online Ludo game and earn money simultaneously? Yes, you can play Ludo online with friends and enjoy a lively game night from the comfort of your own home. …"},
//     {image:"/assets/images/blog_image5.webp",heading:"Skill Ludo games on Zupee | Strategies to Win Ludo",dateName:"September 11, 2023 By Mounica Duvva",description:"Ludo, a classic board game with roots in ancient India, has evolved significantly in the digital age. On the Zupee platform, Ludo isn’t a game of chance, it is a game of skill, requiring strategic planning and foresight. As players worldwide compete in this modern rendition, many seek winning strategies to gain an edge. This …"},
//     {image:"/assets/images/blog_image6.webp",heading:"Best Free Online Games",dateName:"September 8, 2023 By Mounica Duvva",description:"In an age where digital entertainment is at our fingertips, free online gaming has emerged as a favorite pastime for millions of people around the world. Whether you’re looking for an adventure, a brain-testing challenge, or a friendly competition, there’s something for everyone in the vast world of online gaming. In this article, we will …"},
//     {image:"/assets/images/blog_image7.webp",heading:"Fast game",dateName:"September 6, 2023 By Mounica Duvva",description:"In our fast-paced world, we often search for quick, enjoyable ways to relax and unwind. One of these ways is indulging in fast games that require strategy and competitiveness. This article will dip your toes into the thrilling world of fast games. Specifically, we’ll be talking about Ludo fast games that involve quick thinking and …"},
//     {image:"/assets/images/blog_image8.webp",heading:"Unlocking Secure Online Ludo Gaming with Zupee",dateName:"September 6, 2023 By Lekhika Dhariyal",description:"In recent years, online gaming has gained immense popularity, with classic games like Ludo finding their virtual counterparts. One question that often arises is whether playing Ludo online is safe. In this article, we’ll discuss the general safety of playing Ludo online, possible security issues, and how to deal with them. We’ll also explore how …"},
//     {image:"/assets/images/blog_image9.webp",heading:"Benefits of Playing Ludo and Why Zupee Takes It Up a Notch",dateName:"September 6, 2023 By Lekhika Dhariyal",description:"Ludo, a board game that traces its origins to ancient India, has firmly cemented its position in our global culture. A game that once demanded physical presence and tangible Ludo board pieces has now transitioned into the online space, reaching more players than ever before. But beyond its fun aspect, playing Ludo offers various benefits, …"},
//     {image:"/assets/images/blog_image10.webp",heading:"Best Ludo Cash Game App",dateName:"September 4, 2023 By Lekhika Dhariyal",description:"Traditional board games like Ludo have found a fresh breath of life in the digital age. While the thrill of rolling dice and racing tokens to their home square dates back centuries, technology has spun this simple pastime into an addictive and accessible online experience. Topping the charts in this transition is none other than …"},
//     {image:"/assets/images/blog_image11.webp",heading:"Best Money Earning Apps for Cash Online (September 2023)",dateName:"September 4, 2023 By Lekhika Dhariyal",description:"Are you looking for the best real money earning apps online in India? We have curated a list of the top 50 earning apps to help you monetize your free time and earn real money. From survey sites and referral programs to teaching and reselling apps, this article will walk you through the top apps …"},
//     {image:"/assets/images/blog_image12.webp",heading:"Ludo Win Cash Online | Play Ludo, Win Money",dateName:"September 4, 2023 By Mounica Duvva",description:"In the ever-evolving landscape of online gaming, Ludo, a captivating and familiar board game, has risen to prominence. As the digital realm continues to redefine leisure activities, you can win Ludo cash online, which emerges as a game-changer, offering not only immersive gameplay but also the tantalizing opportunity to play Ludo and win Ludo real …"},
//     {image:"/assets/images/blog_image13.webp",heading:"Ludo Sign Up Bonus",dateName:"September 4, 2023 By Mounica Duvva",description:"Many online gaming platforms offer a Ludo signup bonus, a captivating entry into digital entertainment. This enticing reward awaits players as they embark on their gaming journey, adding an extra layer of excitement to the classic board game of Ludo. Whether free tokens, bonus cash, or exclusive perks, these sign-up bonuses welcome players with open …"},
//     {image:"/assets/images/blog_image14.webp",heading:"How to earn money from Instagram?",dateName:"September 4, 2023 By Mounica Duvva",description:"In today’s digital age, social media platforms offer unique avenues for individuals to explore various opportunities. Among these platforms, Instagram stands out as a vibrant hub for creativity, connectivity, and commerce. Wondering how to make money on Instagram? This article will provide you with strategies and insights that can empower you to monetize your presence, …"},
//   ]

  getBlogInfo(){
    this.dataService.getBlogInfoData().subscribe((res)=>{
      this.blogInfoData = res
      console.log(this.blogInfoData)
    })
  }

  getBlogAbout(){
    this.dataService.getBlogAboutData(this.id).subscribe((res)=>{
        this.blogAboutData = res
    })
  }
  getBlogRecentPost(){
    this.dataService.getBlogPostsData().subscribe((res)=>{
      this.blogRecentPost = res
      console.log(this.blogRecentPost)
    })
  }

}
