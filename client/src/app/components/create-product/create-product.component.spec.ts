import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CreateProductComponent } from './create-product.component';

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
            ],
        });
        fixture = TestBed.createComponent(CreateProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
