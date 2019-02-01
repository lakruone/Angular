import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navfive',
  templateUrl: './navfive.component.html',
  styleUrls: ['./navfive.component.css']
})
export class NavfiveComponent implements OnInit {
  name_="Dr.jayarathne perera vvvvvvvv";
  constructor(private router: Router,private userService:UserService) { }


  vacFunc(){
    this.router.navigate(["/vaccine"]);
    console.log("button click");
  } 
  ngOnInit() {
    this.userService.cast.subscribe(name=>{
      if(name !="null")
        this.name_=name;
      
  }); 

  }

}
