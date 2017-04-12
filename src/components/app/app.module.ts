import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import { routing, appRoutingProviders } from '../app/app.routing';
import { ModalModule } from './containers/my-modal/modal.module';
import { AccordionModule, ProgressbarModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ConferencesComponent } from './containers/conferences/conferences.component';
import { JsConferenceComponent } from './containers/jsConference/jsConference.component';
import { JavaConferenceComponent } from './containers/javaConference/javaConference.component';
import { RubyConferenceComponent } from './containers/rubyConference/rubyConference.component';
import { CapitalizePipe } from './containers/customPipes/capitalize.pipe';
import { ContactUsComponent } from './containers/contactUs/contactUs.component';
import { HighlightDirective } from './containers/customDirectives/myHighlight.directive';
import { UnlessDirective } from './containers/customDirectives/myUnless.directive';


// import '../../styles/blue.scss';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        AccordionModule,
        DropdownModule,
        ProgressbarModule,
        routing,
        ModalModule,
        FileUploadModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NavbarComponent,
        ConferencesComponent,
        JsConferenceComponent,
        JavaConferenceComponent,
        RubyConferenceComponent,
        CapitalizePipe,
        ContactUsComponent,
        HighlightDirective,
        UnlessDirective

    ],
    bootstrap: [ AppComponent ],
    providers: [
        appRoutingProviders,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ]
})

export class AppModule {
}

