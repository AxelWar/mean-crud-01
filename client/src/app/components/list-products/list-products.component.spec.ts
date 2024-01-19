import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsComponent } from './list-products.component';
import { ProductService } from 'src/app/services/product.service';
import { ToastrModule } from 'ngx-toastr';

describe('ListProductsComponent', () => {
    let component: ListProductsComponent;
    let fixture: ComponentFixture<ListProductsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ListProductsComponent],
            imports: [HttpClientTestingModule, ToastrModule.forRoot()],
            providers: [ProductService],
        });
        fixture = TestBed.createComponent(ListProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
