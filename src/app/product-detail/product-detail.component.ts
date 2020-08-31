import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../_services/product.service';

@Component({
	selector: 'pm-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: [ './product-detail.component.css' ]
})
export class ProductDetailComponent implements OnInit {
	pageTitle: string = 'პროდუქტის დეტალები';
	product: IProduct;

	constructor(private _route: ActivatedRoute, private _productService: ProductService, private _router: Router) {}

	ngOnInit(): void {
		let id = +this._route.snapshot.paramMap.get('id');
		this.pageTitle += `:${id}`;
		this.product = {
			productId: 1,
			productName: 'Leaf Rake',
			productCode: 'GDN-0011',
			releaseDate: 'March 19, 2019',
			description: 'Leaf rake with 48-inch wooden handle.',
			price: 19.95,
			starRating: 3.2,
			imageUrl: 'assets/images/leaf_rake.png'
		};
	}

	onBack(): void {
		this._router.navigate([ '/products' ]);
	}
}
