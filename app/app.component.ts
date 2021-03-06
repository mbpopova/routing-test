import {Component} from 'angular2/core';
import {TeachersComponent} from './teachers/teachers.component';
import {StudentsComponent} from './students/students.component';
import{RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginComponent} from './login.component';
@RouteConfig (
[
    {
        path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true
    }
    ,
    {
        path: '/students/...', name: 'Students', component: StudentsComponent
    }
,
   {
        path: '/teachers/...', name: 'Teachers', component: TeachersComponent
    }
 
])

@Component({
    selector: 'my-app',
    template: 
    ` <router-outlet></router-outlet>`
       ,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }


