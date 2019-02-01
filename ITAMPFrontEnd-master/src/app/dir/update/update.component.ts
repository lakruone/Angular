import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormsModule} from '@angular/forms';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

import { Child } from '../../model/child';
import { RegisterformService } from '../../service/registerform.service';
import { UserService } from '../../service/user.service';
import { Gn } from 'src/app/model/gn';
import { Phm } from 'src/app/model/phm';
import { Moh } from 'src/app/model/moh';
import { Ds } from 'src/app/model/ds';
import { Rdhs } from 'src/app/model/rdhs';
import { Area } from 'src/app/model/area';
import { Address } from 'src/app/model/address';
import { Parent } from 'src/app/model/parent';
import { Guardian } from 'src/app/model/guardian';
import { AddInfo } from 'src/app/model/additionalInfo';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public updateForm: FormGroup;
  id_=0;

  n1=['',1,2,3,4,5,6,7,8,9,10,11,12];
  n2=['',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
      26,27,28,29,30,31,32,33,34,35,36,37,38,39,41,45,46,47,48,49,50,51,52,53,
      54,55,56,57,58,59];
  ap=['','am','pm'];
  gender=['','Male','Female','Other'];
  addrestype=['Own','Home','Other'];
  delivary=['','normal','vvvv','vvvvnn'];
  status=['Live','Dead'];
  child:Child=new Child();
  parent:Parent=new Parent();
  area:Area=new Area();
  address:Address=new Address();
  guardian:Guardian=new Guardian();
  addinfo:AddInfo=new AddInfo();
  //additional:AddInfo=new AddInfo();
  
   gn:Gn[];
   phm:Phm[];
   moh:Moh[];
   ds:Ds[];
   rdhs:Rdhs[];
     /*parent:Parent={
     parentId:0,
    nic:'121133v',
     motherMaidenName:'sumnaa',
     registrationNo:'1234w',
     fatherName:'nimal',
     fatherNic:'1233435v',
     contactNo:'0712232323',
     multipleBirth:false,
     crs:false,
     additional: {
         infoId: 0,
         motherBhtNo:'',
         ward:'',
         birthCertificateNo:'',
         detailsOfDelivary:'',
         complicationOfDelivary:'',
         remarks:'',
         intantstatus:''
     },
     nnt: false
 }*/


  constructor(private router: Router, private registerService:RegisterformService,
    private userService:UserService) { }

    updateRegistration(){
      this.registerService.updateParent(this.parent).subscribe(
        data=>{
          alert("parent data updated");
        });
  
        this.registerService.updateChild(this.child).subscribe(
          data=>{
            alert("child data updated");
          });
  
          this.registerService.updateArea(this.area).subscribe(
            data=>{
              alert("child's area data updated");
            });
  
            this.registerService.updateGuardian(this.guardian).subscribe(
              data=>{
                alert("guardian's data updated");
              });
               
              this.registerService.updateAddress(this.address).subscribe(
                data=>{
                  alert("child's address data updated");
                });
  
                this.registerService.updateAddinfo(this.addinfo).subscribe(
                  data=>{
                    alert("Additional Information updated");
                  });


    }

  viewForm(){
    this.router.navigate(["/nurserole"]);
    console.log("button click");
  }

  selectOption_1( rdhsname){
    console.log(rdhsname);
     this.registerService.dsAreasByRdhs(rdhsname.substring(rdhsname.indexOf(' ')+1)).
     subscribe(data=>{
      console.log(data);
      this.ds=data;
     })
   }

   selectOption_2(dsname){
    this.registerService.mohAreasByDs(dsname.substring(dsname.indexOf(' ')+1)).
    subscribe(data=>{
     console.log(data);
     this.moh=data;
    })
  }

  selectOption_3(mohname){
    this.registerService.phmAreasByMoh(mohname.substring(mohname.indexOf(' ')+1)).
    subscribe(data=>{
    // console.log(data);
     this.phm=data;
    })
  }

  selectOption_4(phmname){
    this.registerService.gnAreasByPhm(phmname.substring(phmname.indexOf(' ')+1)).
    subscribe(data=>{
    // console.log(data);
     this.gn=data;
    })  
  }


  ngOnInit() {

    /*this.updateForm=new FormGroup({
      regid:new FormControl(''),
     
    })
  }

  public createVaccine(value){
    let formData=new FormData();
    formData.append('RegID',value.regid)
    

console.log('ID------>'+value.regid)

}*/

this.registerService.getGn()
    .subscribe(data=>{
    // this.gn=data;
     // console.log(data);
    });

    this.registerService.getPhm()
    .subscribe(data=>{
     // this.phm=data;
     // console.log(data);
    }); 
    
    this.registerService.getMoh()
    .subscribe(data=>{
     // this.moh=data;
     // console.log(data);
    });


    this.registerService.getDs()
    .subscribe(data=>{
     // this.ds=data;
      //console.log(data);
    });

    this.registerService.getRdhs()
    .subscribe(data=>{
      this.rdhs=data;
      ;
      // console.log(data);
    
    });

    //get data releted to one rdhs ,ds,moh,phm 
    this.registerService.getparent().subscribe(
      res=>{
        console.log(res);});

  }


}

