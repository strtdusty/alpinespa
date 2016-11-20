import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { SurgeryComponent } from './components/surgery/surgery.component';
import { VetCareComponent } from './components/vetcare/vetcare.component';
import { VetsComponent } from './components/vets/vets.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        AboutComponent,
        NavMenuComponent,
        VetCareComponent,
        SurgeryComponent,
        VetsComponent,
        HomeComponent,
        FooterComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'vetcare', component: VetCareComponent },
            { path: 'surgery', component: SurgeryComponent },
            { path: 'vets', component: VetsComponent },
            { path: 'footer', component: FooterComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
