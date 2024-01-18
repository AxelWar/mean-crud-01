import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  title = 'Create Product';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private productService: ProductService,
    private aRoute: ActivatedRoute,
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required],
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.isEdit();
  }

  addProduct() {
    const PRODUCT: Product = {
      name: this.productForm.get('name')?.value,
      category: this.productForm.get('category')?.value,
      location: this.productForm.get('location')?.value,
      price: this.productForm.get('price')?.value,
    };

    if (this.id !== null) {
      this.productService.editProduct(this.id, PRODUCT).subscribe({
        next: (value: any) => {
          this.toastr.success(
            'Product Updated Successfully!',
            'Product Saved!',
          );
          this.router.navigate(['/']);
        },
        error: (error: any) => {
          console.log(error);
          this.productForm.reset();
        },
      });
    } else {
      this.productService.createProduct(PRODUCT).subscribe({
        next: (value: any) => {
          this.toastr.success(
            'Product Registered Successfully!',
            'Product Saved!',
          );
          this.router.navigate(['/']);
        },
        error: (error: any) => {
          console.log(error);
          this.productForm.reset();
        },
      });
    }
  }

  isEdit() {
    if (this.id !== null) {
      this.title = 'Edit Product';
      this.productService.getProduct(this.id).subscribe((data) => {
        this.productForm.setValue({
          name: data.name,
          category: data.category,
          location: data.location,
          price: data.price,
        });
      });
    }
  }
}
