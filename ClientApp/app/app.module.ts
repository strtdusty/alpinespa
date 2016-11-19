import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { SurgeryComponent } from './components/surgery/surgery.component';
import { VetCareComponent } from './components/vetcare/vetcare.component';
import { VetsComponent } from './components/vets/vets.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        VetCareComponent,
        SurgeryComponent,
        VetsComponent,
        HomeComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'vetcare', component: VetCareComponent },
            { path: 'surgery', component: SurgeryComponent },
            { path: 'vets', component: VetsComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
