import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { deleteMsg, productMock, productsMock } from '../mocks/product.mock';
import { ErrorMsg } from '../models/error';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

describe('ProductServiceMock', () => {
    let service: ProductService;
    let httpSpy: {
        get: jest.Mock;
        delete: jest.Mock;
        put: jest.Mock;
        post: jest.Mock;
    };

    beforeEach(() => {
        httpSpy = {
            get: jest.fn(),
            delete: jest.fn(),
            put: jest.fn(),
            post: jest.fn(),
        };

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [{ provide: HttpClient, useValue: httpSpy }],
        });

        service = TestBed.inject(ProductService);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('getProducts should...', () => {
        httpSpy.get.mockReturnValue(of(productsMock));

        service.getProducts().subscribe((data: Product[]) => {
            expect(data[0].name).toBe('Coca-Cola');
        });
    });

    it('getProduct should...', () => {
        httpSpy.get.mockReturnValue(of(productMock));

        service.getProduct(productMock._id).subscribe((data: Product) => {
            expect(data.name).toBe('Coca-Cola');
        });
    });

    it('deleteProduct should...', () => {
        httpSpy.delete.mockReturnValue(of(deleteMsg));

        service.deleteProduct(productMock._id).subscribe((data: ErrorMsg) => {
            expect(data.msg).toBe('Product successfully deleted');
        });
    });

    it('createProduct should...', () => {
        httpSpy.post.mockReturnValue(of(productMock));

        service.createProduct(productMock).subscribe((data: Product) => {
            expect(data.name).toBe('Coca-Cola');
        });
    });

    it('editProduct should...', () => {
        httpSpy.put.mockReturnValue(of(productMock));

        service
            .editProduct(productMock._id, productMock)
            .subscribe((data: Product) => {
                expect(data.name).toBe('Coca-Cola');
            });
    });
});
