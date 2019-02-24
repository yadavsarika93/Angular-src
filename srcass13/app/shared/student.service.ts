import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class StudentService 
{
  constructor(private firebase: AngularFireDatabase) { }
 
  public studentList: AngularFireList<any>;
  

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    lfullName: new FormControl('',Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    location: new FormControl(''),
    city: new FormControl(''),
    state2: new FormControl(''),
    code: new FormControl(''),
    report: new FormControl(''),
    resolved: new FormControl('')


  });


  getStudents() 
  {
    this.studentList = this.firebase.list('students');
    return this.studentList.snapshotChanges();
  }

  insertStudent(student) 
  {

    console.log("in console");
    this.studentList.push({
      fullName: student.fullName,
      lfullName: student.lfullName,
      email: student.email,
      mobile: student.mobile,
      location: student.location,
      city: student.city,
      state2:student.state2,
      code: student.code,
      report: student.report,
      resolved: student.resolved

    });
  }

  populateForm(student) 
  {
    this.form.setValue(student);
  }

  updateStudent(student) 
  {
    this.studentList.update(student.$key,
      {
        fullName: student.fullName,
      lfullName: student.lfullName,
      email: student.email,
      mobile: student.mobile,
      location: student.location,
      city: student.city,
      state2:student.state2,
      code: student.code,
      report: student.report,
      resolved: student.resolved
      });
  }

  deleteStudent($key: string) 
  {
    this.studentList.remove($key);
  }
}
