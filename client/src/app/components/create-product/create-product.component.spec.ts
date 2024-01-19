import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CreateProductComponent } from './create-product.component';
import { ProductService } from 'src/app/services/product.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateProductComponent', () => {
    let component: CreateProductComponent;
    let fixture: ComponentFixture<CreateProductComponent>;

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
            providers: [ProductService],
        });
        fixture = TestBed.createComponent(CreateProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
