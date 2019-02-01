import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navone',
  templateUrl: './navone.component.html',
  styleUrls: ['./navone.component.css']
})
export class NavoneComponent implements OnInit {
  name_="Dr.jayarathne perera vvvvvvvv";
  constructor(private router: Router, private userService:UserService) { }

  /*vacFunc(){
    this.router.navigate(["/vaccine"]);
    console.log("button click");
  }*/
  docFunc(){
    this.router.navigate(["/doctor"]);
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
