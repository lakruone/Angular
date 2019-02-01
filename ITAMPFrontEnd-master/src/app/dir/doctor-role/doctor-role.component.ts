import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/model/child';
import { RegisterformService } from 'src/app/service/registerform.service';
import { UserService } from '../../service/user.service';
import { checkAndUpdateBinding, element } from '@angular/core/src/render3/instructions';
import { Parent } from 'src/app/model/parent';
import { Area } from 'src/app/model/area';
import { Address } from 'src/app/model/address';
import { Guardian } from 'src/app/model/guardian';
import { AddInfo } from 'src/app/model/additionalInfo';

import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms'; 
import { Router,RouterModule} from '@angular/router';


@Component({
  selector: 'app-doctor-role',
  templateUrl: './doctor-role.component.html',
  styleUrls: ['./doctor-role.component.css']
})
export class DoctorRoleComponent implements OnInit {

child:Child=new Child();
regchild:Child=new Child();
parent:Parent=new Parent();
area:Area=new Area();
address:Address=new Address();
guardian:Guardian=new Guardian();
additional:AddInfo=new AddInfo();
childdetails:Child[];
 constructor(private router: Router, private registerFormService:RegisterformService, private userService:UserService) { }

 viewData(){
 this.registerFormService.viewChild(this.child.registrationId).subscribe(
  data=>{
    alert("Birth Registration Number entered for viewing data.");
  });
}
  getByRegistrationId(regid: any){
   this.childdetails.forEach(element => {
     if(element.registrationId==regid){
               this.child=element;
               console.log(element);}});
              
  } 
  
  
  /*addvacForm(){
    this.router.navigate(["/vaccine"]);
    console.log("button click");

  }*/
  ngOnInit() {
    this.registerFormService.getdata().subscribe(
      data=>{
        console.log(data)
        this.childdetails=data;
      }
    )
  }



}
