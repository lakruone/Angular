import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navtwo',
  templateUrl: './navtwo.component.html',
  styleUrls: ['./navtwo.component.css']
})
export class NavtwoComponent implements OnInit {
  name_="Dr.jayarathne perera vvvvvvvv";
  constructor(private router: Router,private userService:UserService) { }

  nurFunc(){
    this.router.navigate(["/nurserole"]);
    console.log("button click");
  }
  upFunc(){
    this.router.navigate(["/update"]);
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
