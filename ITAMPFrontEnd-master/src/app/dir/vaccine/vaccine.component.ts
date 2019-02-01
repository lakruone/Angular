import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {FormControl,FormGroup, FormBuilder, Validators} from '@angular/forms';
import { RegisterformService } from '../../service/registerform.service';
import { Router,RouterModule} from '@angular/router';
import { UserService } from '../../service/user.service';
import { Vaccine } from 'src/app/model/vaccine';



@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {
public vaccineForm: FormGroup;

vaccine:Vaccine=new Vaccine();

  constructor(private router: Router , private registerService:RegisterformService,
    private userService:UserService) { }

newVaccine(){
  this.registerService.enterVaccine(this.vaccine).subscribe(
    data=>{
      alert("New Vaccine Data added");
    });
}

deleteVaccine(){

  this.registerService.delete(this.vaccine.vaccineName).subscribe(
    data=>{
      alert("Vaccine Deleted");
    });

}

  ngOnInit() {
this.vaccineForm=new FormGroup({
  vaccineName:new FormControl(''),
  vaccineAge:new FormControl(''),
  rol:new FormControl(''),
  qty:new FormControl(''),
  des:new FormControl(''),
})
  }


  public createVaccine(value){
        let formData=new FormData();
        formData.append('Name',value.vaccineName)
        formData.append('Age',value.vaccineAge)
        formData.append('Reorder',value.rol)
        formData.append('Quantity',value.qty)
        formData.append('Description',value.des)

  console.log('name------>'+value.vaccineName)
  console.log('v-age------>'+value.vaccineAge)
  console.log('rol------>'+value.rol)
  console.log('qty------>'+value.qty)
  console.log('Desc------>'+value.des)
  }
}
