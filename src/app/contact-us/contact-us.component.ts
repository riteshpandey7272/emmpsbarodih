import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{
  names='Contact-Us'

  contacts!:  FormGroup;
  isSubmit=true;
  submitMessage='';

  private myForm!: AngularFirestoreCollection<any>;

  constructor(private formBuilder: FormBuilder, private firestore: AngularFirestore){

  }

  ngOnInit(){

    this.myForm=this.firestore.collection('enquiry');


    this.contacts = this.formBuilder.group({
      name:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      phone_number:[null,[Validators.required]],
      message:[null,Validators.required],
      subject:[null,Validators.required]
    })
  }

  submitData(value: any){
    // console.log(value);
    this.myForm.add(value).then(res=>{
      this.submitMessage='Submitted Successfully!';
    })
    .catch(err=>{
      console.log(err);
    })


    this.isSubmit=true;
    // this.submitMessage='Submitted Successfully!';
    setTimeout(()=>{
      this.isSubmit=false;
    },8000);
  }
}
