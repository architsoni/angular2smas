import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConferencesComponent } from './containers/conferences/conferences.component';
import { JsConferenceComponent } from './containers/jsConference/jsConference.component';
import { JavaConferenceComponent } from './containers/javaConference/javaConference.component';
import { RubyConferenceComponent } from './containers/rubyConference/rubyConference.component';
import { ContactUsComponent } from './containers/contactUs/contactUs.component';



const appRoutes: Routes = [
    { path: '', redirectTo: 'conferences', pathMatch: 'full' },
    { path: 'conferences', component: ConferencesComponent,
    	children: [
    		{ path: '', redirectTo: 'jsConference', pathMatch: 'full' },
    		{ path: 'jsConference', component: JsConferenceComponent },
    		{ path: 'javaConference', component: JavaConferenceComponent },
    		{ path: 'rubyConference', component: RubyConferenceComponent }
    	] },
    { path: 'contactUs', component: ContactUsComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);