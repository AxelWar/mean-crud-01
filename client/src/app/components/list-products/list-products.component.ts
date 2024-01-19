import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-list-products',
    templateUrl: './list-products.component.html',
    styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
    listProducts: Product[] = [];

    constructor(
        private productService: ProductService,
        private toastr: ToastrService
    ) {}

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts() {
        this.productService.getProducts().subscribe({
            next: (data: Product[]) => {
                this.listProducts = data;
            },
            error: (error: any) => {
                console.log(error);
            },
        });
    }

    deleteProduct(id: any) {
        this.productService.deleteProduct(id).subscribe({
            next: (data: any) => {
                this.toastr.error(
                    'Product Deleted Successfully',
                    'Product Deleted'
                );
                this.getProducts();
            },
            error: (error: any) => {
                console.log(error);
            },
        });
    }
}
