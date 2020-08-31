import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from '../app/shared/convert-to-spaces.pipe';
import { StarComponent } from '../app/shared/star.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './nav/nav.component';

import { ProductDetailGuard } from '../app/_guards/product-detail.guard';
import { ProductModule } from './product/product.module';

@NgModule({
	declarations: [
		AppComponent,
		ProductListComponent,
		WelcomeComponent,
		NavComponent,
		ProductDetailComponent,
		ConvertToSpacesPipe,
		StarComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot([
			{ path: 'products', component: ProductListComponent },
			{ path: 'products/:id', canActivate: [ ProductDetailGuard ], component: ProductDetailComponent },
			{ path: 'welcome', component: WelcomeComponent },
			{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
			{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }
		]),
		ProductModule
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
