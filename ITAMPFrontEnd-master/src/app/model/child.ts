import { Time } from "@angular/common";
import { Guardian } from "./guardian";
import { Parent } from "./parent";
import { Area } from "./area";

export class Child {
    registrationId:String;
    registrationDate:String;
    fullName:String;
    hin:String;
    dateOfBirth:Date;
    timeOfBirth:Time;
    gender:String;
    birthWeight:Number;
    placeOfBirth:String;
    city:String;
    guardian:Guardian;
    parent:Parent;
    area:Area;
    vaccineProfile:String;
}
