import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RegisterformService } from 'src/app/service/registerform.service';
import { UserService } from '../../service/user.service';
import { checkAndUpdateBinding, element } from '@angular/core/src/render3/instructions';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/user'; 


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user:User=new User();
  userdetails:User[]
  constructor(private router: Router, private registerFormService:RegisterformService, private userService:UserService) { }
 
  
  getByUserId(regid: any){
    this.userdetails.forEach(element => {
      if(element.id==regid){
                this.user=element;
                console.log(element);}});
               
   } 

  addvacForm(){
    this.router.navigate(["/vaccine"]);
    console.log("button click");

  }
  ngOnInit() {
  }

}
