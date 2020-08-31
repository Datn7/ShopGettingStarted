import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ProductService } from '../_services/product.service';

@Component({
	selector: 'pm-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: [ './product-list.component.css' ]
})
export class ProductListComponent implements OnInit {
	pageTitle: string = 'პროდუქციის სია';
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = true;
	errorMessage: string;

	_listFilter: string;
	get listFilter(): string {
		return this._listFilter;
	}
	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
	}

	filteredProducts: IProduct[];
	products: IProduct[] = [];

	constructor(private _productService: ProductService) {
		this.listFilter = '';
	}

	ngOnInit(): void {
		this._productService.getProducts().subscribe({
			next: (products) => {
				this.products = products;
				this.filteredProducts = this.products;
			}
		});
		this.filteredProducts = this.products;
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}

	performFilter(filterBy: string): IProduct[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.products.filter(
			(product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
		);
	}

	onRatingClicked(message: string): void {
		this.pageTitle = this.pageTitle + message;
	}
}
