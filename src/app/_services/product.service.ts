import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private productUrl = 'api/products/products.json';

	constructor(private _http: HttpClient) {}

	getProducts(): Observable<IProduct[]> {
		return this._http
			.get<IProduct[]>(this.productUrl)
			.pipe(tap((data) => console.log('all: ' + JSON.stringify(data))));
	}
}
