import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';
import { routes } from 'src/app/app-routing.module';
import {
    editProductMock,
    invalidId,
    productMock,
} from 'src/app/mocks/product.mock';
import { ProductServiceStub } from 'src/app/mocks/product.service.mock';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CreateProductComponent } from './create-product.component';

describe('CreateProductComponent', () => {
    let component: CreateProductComponent;
    let fixture: ComponentFixture<CreateProductComponent>;
    let productService: ProductService;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CreateProductComponent],
            imports: [
                HttpClientTestingModule,
                ToastrModule.forRoot(),
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule.withRoutes(routes),
                NoopAnimationsModule,
            ],
            providers: [
                { provide: ProductService, useClass: ProductServiceStub },
            ],
        });
        productService = TestBed.inject(ProductService);
        fixture = TestBed.createComponent(CreateProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        router = TestBed.get(Router);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.productForm.valid).toBeFalsy();
    });

    it('submitting a form with new product trigger save product API', () => {
        const navigateSpy = jest.spyOn(router, 'navigate');
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

        jest.spyOn(productService, 'createProduct').mockReturnValue(
            of(productMock)
        );
        jest.spyOn(router, 'navigate');
        // Trigger the addProduct function
        component.addProduct();

        expect(navigateSpy).toHaveBeenCalledWith(['/']);
        expect(productService.createProduct).toHaveBeenCalledWith(product);
    });

    it('submitting a form with edit product trigger update product API', async () => {
        const navigateSpy = jest.spyOn(router, 'navigate');
        component.id = productMock._id;

        jest.spyOn(productService, 'getProduct').mockReturnValue(
            of(productMock)
        );
        jest.spyOn(productService, 'editProduct').mockReturnValue(
            of(productMock)
        );
        jest.spyOn(router, 'navigate');

        await component.isEdit();
        component.addProduct();

        expect(component.productForm.valid).toBeTruthy();
        expect(productService.getProduct).toHaveBeenCalledWith(component.id);
        expect(productService.editProduct).toHaveBeenCalledWith(
            component.id,
            editProductMock
        );
        expect(navigateSpy).toHaveBeenCalledWith(['/']);
    });

    it('submitting a form with edit product with invalid ID', () => {
        component.id = '123invalidID';
        expect(() => {
            component.isEdit();
        }).toThrow(invalidId.msg);
        expect(component.productForm.pristine).toBeTruthy();
    });
});
