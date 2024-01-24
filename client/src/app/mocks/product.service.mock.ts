import { of } from 'rxjs';
import {
    deleteMsg,
    invalidId,
    productMock,
    productsMock,
} from './product.mock';

export class ProductServiceStub {
    getProducts() {
        return of(productsMock);
    }

    deleteProduct() {
        return of(deleteMsg);
    }

    createProduct() {
        return of(productMock);
    }

    getProduct(id: string) {
        if (id === productMock._id) {
            return of(productMock);
        } else {
            throw new Error(invalidId.msg);
        }
    }

    editProduct() {
        return of(productMock);
    }
}
