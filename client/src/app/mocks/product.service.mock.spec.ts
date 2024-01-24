import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { deleteMsg, productMock, productsMock } from './product.mock';
import { of } from 'rxjs';
import { ErrorMsg } from '../models/error';
import { ProductServiceStub } from './product.service.mock';

describe('ProductServiceMock', () => {
    let service: ProductService;
    let httpSpy: { get: jest.Mock };

    beforeEach(() => {
        httpSpy = {
            get: jest.fn(),
        };

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                { provide: HttpClient, useValue: httpSpy },
                { provide: ProductService, useClass: ProductServiceStub },
            ],
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

    it('deleteProduct should...', () => {
        httpSpy.get.mockReturnValue(of(deleteMsg));

        service.deleteProduct(productMock._id).subscribe((data: ErrorMsg) => {
            expect(data.msg).toBe('Product successfully deleted');
        });
    });
    it('createProduct should...', () => {
        const product: Product = {
            name: 'Coca-Cola',
            category: 'Fruit',
            location: 'Somewhere',
            price: 3,
        };
        httpSpy.get.mockReturnValue(of(productMock));

        service.createProduct(product).subscribe((data: Product) => {
            expect(data.name).toBe('Coca-Cola');
        });
    });

    it('getProduct should...', () => {
        httpSpy.get.mockReturnValue(of(productMock));

        service.getProduct(productMock._id).subscribe((data: Product) => {
            expect(data.name).toBe('Coca-Cola');
        });
    });

    it('editProduct should...', () => {
        const product: Product = {
            name: 'Coca-Cola',
            category: 'Fruit',
            location: 'Somewhere',
            price: 3,
        };
        httpSpy.get.mockReturnValue(of(productMock));

        service
            .editProduct(productMock._id, product)
            .subscribe((data: Product) => {
                expect(data.name).toBe('Coca-Cola');
            });
    });
});
