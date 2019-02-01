import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { Router, RouterModule} from '@angular/router';
import { RegisterformService } from '../../service/registerform.service';
import { checkAndUpdateBinding, element } from '@angular/core/src/render3/instructions';
import { UserService } from '../../service/user.service';
import { Child } from '../../model/child';
import { Parent } from 'src/app/model/parent';
import { Area } from 'src/app/model/area';
import { Address } from 'src/app/model/address';
import { Guardian } from 'src/app/model/guardian';
import { AddInfo } from 'src/app/model/additionalInfo';

@Component({
  selector: 'app-nurse-role',
  templateUrl: './nurse-role.component.html',
  styleUrls: ['./nurse-role.component.css']
})
export class NurseRoleComponent implements OnInit {

  child:Child=new Child();
  regchild:Child=new Child();
parent:Parent=new Parent();
area:Area=new Area();
address:Address=new Address();
guardian:Guardian=new Guardian();
additional:AddInfo=new AddInfo();
childdetails:Child[];

  constructor(private router: Router, private registerService:RegisterformService,
    private userService:UserService) { }

    //submitRegistration(){}

    viewData(){
      this.registerService.viewChild(this.child.registrationId).subscribe(
       data=>{
         alert("Birth Registration Number entered for viewing data.");
       });
     }

    getByRegitrationId(regid: any){
      this.childdetails.forEach(element => {
        if(element.registrationId==regid){
                  this.child=element;
                  console.log(element);}});
                 
     } 

  updateForm(){
    this.router.navigate(["/update"]);
    console.log("button click");
  }
  
  ngOnInit() {
    this.registerService.getdata().subscribe(
      data=>{
        console.log(data)
        this.childdetails=data;
      }
    )

  }

}
