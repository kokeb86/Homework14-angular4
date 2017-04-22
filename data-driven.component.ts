import {Component} from '@angular/core';
import {FormGroup, FormControl,Validators,
    FormBuilder,FormArray} from "@angular/forms";

import {FormserviceService} from './formservice.service';

@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {

 myForm: FormGroup;

constructor(private formBuilder:FormBuilder,
private formService: FormserviceService 
   ){

    this.myForm= formBuilder.group({
        
            'name':['Kokeb',[Validators.required]],

            'email':['',[Validators.required,
            
            Validators.pattern("[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
            
            'post':['',[Validators.required,
            Validators.minLength(10)]]
        });
   
     
    

    this.myForm.statusChanges.subscribe(
        (data:any) =>console.log(data)
    );

}

onSubmit(){
    console.log(this.myForm.value);
}

getmyData(){
    this.formService.getData('https://jsonplaceholder.typicode.com/users/1').subscribe(
        response => {
          var userObject = response.json();
          this.myForm.controls['name'].setValue(userObject.name, {onlySelf: true});
          this.myForm.controls['email'].setValue(userObject.email, {onlySelf: true});
          this.formService.getData('https://jsonplaceholder.typicode.com/posts?userId=1').subscribe(
            innerResponse => {
              var myvalue = innerResponse.json()[0];
              this.myForm.controls['post'].setValue(myvalue.body);
            },
            innerError => console.log(innerError)
          );
      },
      error => console.log(error)
    );

}



}    