import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navthree',
  templateUrl: './navthree.component.html',
  styleUrls: ['./navthree.component.css']
})
export class NavthreeComponent implements OnInit {
  name_="Dr.jayarathne perera vvvvvvvv";
  constructor(private router: Router, private userService:UserService) { }

  vacFunc(){
    this.router.navigate(["/vaccine"]);
    console.log("button click");
  }

  adFunc(){
    this.router.navigate(["/admin"]);
    console.log("button click");
  }

  regFunc(){
    this.router.navigate(["/home"]);
    console.log("button click");
  }

  ngOnInit() {

    this.userService.cast.subscribe(name=>{
      if(name !="null")
        this.name_=name;
      
     /*  else{
     this.router.navigate(["/login"])
     alert("first login");}*/
    });
  }

}
