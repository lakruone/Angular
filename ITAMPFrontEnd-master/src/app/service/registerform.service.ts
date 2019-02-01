import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Child } from '../model/child';
import { Gn } from '../model/gn';
import { Phm } from '../model/phm';
import { Moh } from '../model/moh';
import { Ds } from '../model/ds';
import { Rdhs } from '../model/rdhs';
import { Area } from '../model/area';
import { Parent } from '../model/parent';
import { AddInfo } from '../model/additionalInfo';
import { Vaccine } from '../model/vaccine';
import { Guardian } from '../model/guardian';
import { Address } from '../model/address';
import { User } from '../model/user';
  
  
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({ 
  providedIn: 'root'
})
export class RegisterformService {
  child: Child=new Child();
  view:Child=new Child();
  area: Area=new Area();
 parent:Parent=new Parent();
 address:Address=new Address();
 adinfo: AddInfo=new AddInfo();
 guardian: Guardian=new Guardian(); 
 vaccine:Vaccine=new Vaccine();
 user: User=new User();
 

//additional:AddInfo=new AddInfo();
 private url='/api';
 //"http://localhost:8081"
  constructor(private http: HttpClient) { }

 /* registrationAddinfo(additional){
    return this.http.post<AddInfo>
    (this.url+"/addinfo",additional);
  }
  registrationParent(parent:Parent):Observable<Object>{ 
    console.log(parent);
   return this.http.post<Parent>(this.url+"/addparent",parent);

  }*/ 
  
  registrationUser(user){
    console.log(user);
  return  this.http.post<User>(this.url+"/user",user);
}


  registrationParent(parent){
         console.log(parent);
       return  this.http.post<Parent>(this.url+"/api",parent);
  }
 
  registrationChild( child){
    return this.http.post<Child>
    (this.url+"/childadd",child);
  }
  registrationArea(area){
      return this.http.post<Area>
      (this.url+"/addarea",area);
  }
  registrationAddress(address){
    return this.http.post<Address>
    (this.url+"/addressadd",address);
}

registrationAddinfo(addinfo){
  return this.http.post<AddInfo>
  (this.url+"/addinfoadd",addinfo);
}

registrationGuardian(guardian){
  return this.http.post<Guardian>
  (this.url+"/guardianadd",guardian);
}

viewChild(view){
  console.log(view);
return  this.http.post<Child>(this.url+"/api",view);
}

/*viewUser(user){
  console.log(user);
  return  this.http.post<Child>(this.url+"/api",user);
}*/

updateParent(parent){
  console.log(parent);
return  this.http.post<Parent>(this.url+"/api",parent);
}

updateChild( child){
return this.http.post<Child>
(this.url+"/childadd",child);
}
updateArea(area){
return this.http.post<Area>
(this.url+"/addarea",area);
}
updateAddress(address){
return this.http.post<Address>
(this.url+"/addressadd",address);
}

updateAddinfo(addinfo){
return this.http.post<AddInfo>
(this.url+"/addinfoadd",addinfo);
}

updateGuardian(guardian){
return this.http.post<Guardian>
(this.url+"/guardianadd",guardian);
}


  enterVaccine(vaccine){
    console.log(vaccine);
    return this.http.post<Vaccine>
   (this.url+"/vaccineadd",vaccine);

  }

  delete(vaccine){
    return this.http.delete<Vaccine>
    (this.url+"/delete",vaccine);
   }

  
  getGn(){
   return this.http.get<Gn[]>(this.url+"/gn");
  }
  getPhm(){
    return this.http.get<Phm[]>(this.url+"/phm");
  }
  getMoh(){
    return this.http.get<Moh[]>(this.url+"/moh");
  }
  getDs(){
    return this.http.get<Ds[]>(this.url+"/ds");
  }
  getRdhs(){
    return this.http.get<Rdhs[]>(this.url+"/rdhs");
  }
  dsAreasByRdhs(rdhsname) {    
    return this.http.get<any[]>(this.url+"/dsbyrdhs?name="+rdhsname);
  }
  mohAreasByDs(dsname){
    return this.http.get<any[]>(this.url+"/mohbyds?name="+dsname);
  }
  phmAreasByMoh(mohname){
    return this.http.get<any[]>(this.url+"/phmbymoh?name="+mohname);
  }
  gnAreasByPhm(phmname){
    return this.http.get<any[]>(this.url+"/gnbyphm?name="+phmname);
  }
  getdata(){
    return this.http.get<Child[]>(this.url+"/allchild")
  }
  getparent(){
    return this.http.get<Parent[]>(this.url+"/allparents")
  }
}
