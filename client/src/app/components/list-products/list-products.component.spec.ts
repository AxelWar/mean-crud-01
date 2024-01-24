import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsComponent } from './list-products.component';
import { ProductService } from 'src/app/services/product.service';
import { ToastrModule } from 'ngx-toastr';
import { ProductServiceStub } from 'src/app/mocks/product.service.mock';
import { of } from 'rxjs';
import {
    deleteMsg,
    productMock,
    productsMock,
} from 'src/app/mocks/product.mock';

describe('ListProductsComponent', () => {
    let component: ListProductsComponent;
    let fixture: ComponentFixture<ListProductsComponent>;
    let productService: ProductService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ListProductsComponent],
            imports: [HttpClientTestingModule, ToastrModule.forRoot()],
            providers: [
                { provide: ProductService, useClass: ProductServiceStub },
            ],
        });
        productService = TestBed.inject(ProductService);
        fixture = TestBed.createComponent(ListProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get products on init', () => {
        jest.spyOn(productService, 'getProducts').mockReturnValue(
            of(productsMock)
        );

        component.ngOnInit();

        expect(productService.getProducts).toHaveBeenCalled();
    });

    it('should call delete', () => {
        jest.spyOn(productService, 'deleteProduct').mockReturnValue(
            of(deleteMsg)
        );

        component.deleteProduct(productMock._id);

        expect(productService.deleteProduct).toHaveBeenCalledWith(
            productMock._id
        );
    });
});
