import { Component } from '@angular/core';
import { GlobalService } from './global.service';
import { APIConfigurations } from './apiconfig.service';


@Component({
    selector: 'app',
    providers: [ APIConfigurations, GlobalService ],
    template: `
		<header></header>
		<section>
		    <div class="container-fluid">
		        <div class="row">
		            <div class="col-md-2 col-lg-2 sidebar">
		                <div class="sideNav">
		                    <left-side-navbar></left-side-navbar>
		                </div>
		            </div>
		            <div class="col-md-10 col-lg-10 main">
		                <router-outlet></router-outlet>
		            </div>
		        </div>
		    </div>
		</section>
		`
})
export class AppComponent {
}
