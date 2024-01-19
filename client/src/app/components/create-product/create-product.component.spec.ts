import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CreateProductComponent } from './create-product.component';
import { ProductService } from 'src/app/services/product.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProductServiceStub } from 'src/app/mocks/product.service.mock';
import { Product } from 'src/app/models/product';

describe('CreateProductComponent', () => {
    let component: CreateProductComponent;
    let fixture: ComponentFixture<CreateProductComponent>;
    let productService: ProductService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CreateProductComponent],
            imports: [
                HttpClientTestingModule,
                ToastrModule.forRoot(),
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule,
            ],
            providers: [
                { provide: ProductService, useClass: ProductServiceStub },
            ],
        });
        productService = TestBed.inject(ProductService);
        fixture = TestBed.createComponent(CreateProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.productForm.valid).toBeFalsy();
    });

    it('submitting a form emits a user', () => {
        const product: Product = {
            name: 'Lemon',
            category: 'Fruit',
            location: 'Somewhere',
            price: 3,
        };
        expect(component.productForm.valid).toBeFalsy();
        component.productForm.controls['name'].setValue('Lemon');
        component.productForm.controls['category'].setValue('Fruit');
        component.productForm.controls['location'].setValue('Somewhere');
        component.productForm.controls['price'].setValue(3);
        component.id = null;
        expect(component.productForm.valid).toBeTruthy();

        jest.spyOn(productService, 'createProduct').mockReturnValue(of([]));

        // Trigger the addProduct function
        component.addProduct();

        expect(productService.createProduct).toHaveBeenCalledWith(product);
    });
});
