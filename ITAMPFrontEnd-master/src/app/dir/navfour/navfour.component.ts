import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navfour',
  templateUrl: './navfour.component.html',
  styleUrls: ['./navfour.component.css']
})
export class NavfourComponent implements OnInit {
  name_="Dr.jayarathne perera vvvvvvvv";
  constructor(private router: Router, private userService:UserService) { }

  reguseFunc(){
    this.router.navigate(["/register"]);
    console.log("button click");
  }

  ngOnInit() {

    this.userService.cast.subscribe(name=>{
      if(name !="null")
        this.name_=name;
      
  });

}
}