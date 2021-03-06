import {Component} from 'angular2/core';
import {EnrollmentComponent} from './enrollment.component';
import{RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {StudentlistComponent} from './studentlist.component';

@RouteConfig (
[    
    {
        path: '/', name: 'StudentsList', component: StudentlistComponent, useAsDefault: true
    }
    ,
    {
        path: '/enrollments', name: 'Enrollments', component: EnrollmentComponent
    }
])

@Component({
    selector: "students",
    template: 
    `
    <h1>Student Achievement Manager</h1>

        <a href='/login'>Logout</a><br/>
        <a href = '/teachers'>Teacher Portal</a><br/>
             
    <router-outlet></router-outlet>
      
   `,  
   
   directives: [ROUTER_DIRECTIVES]
  })

export class StudentsComponent {

}