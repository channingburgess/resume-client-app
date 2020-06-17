import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/authentication/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  name: string;
  isAuthenticated: boolean;
  subscription:Subscription;
  text: string = "";

  talkingText1: string = 'Hello!';
  talkingText2: string = 'Welcome to my site';
  talkingText3: string = "I'm a full stack developer";
  talkingText4: string = "I love to code";
  talkingText5: string = 'Feel free to email me!';

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.authNavStatus$.subscribe(status => this.isAuthenticated = status);
    this.name = this.authService.name;
    let talkingTextArray = [this.talkingText1, this.talkingText2, this.talkingText3, this.talkingText4, this.talkingText5]
    talkingTextArray.reduce(
      (p, x) =>
        p.then(_ => this.startTyping(x)),
      Promise.resolve()
    )

  } 

   async signout() {
    await this.authService.signout();     
  }

  startTyping(arr){
    var promise = new Promise((resolve, reject) => {
      let textArray = arr.split(''); 
      this.printLetters(textArray, 0, resolve);
  
    });
    return promise;
  }

  printLetters(arr: string[], i: number, done){
    if (arr.length > i){
      setTimeout (() => {
        this.text = this.text + arr[i];
        this.printLetters(arr, i+1, done);
     }, 100);
    }  
    else{  
      setTimeout (() => {
         this.removeLetters(done);
      }, 3000);
    }
  }

  removeLetters(done){
    if (this.text.length){
      setTimeout (() => {
       this.text = this.text.slice(0, this.text.length-1);
        this.removeLetters(done);
     }, 75);
    }  
    else{  
      done();
    }
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}