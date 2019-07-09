import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'product-editor.component.html'
})
export class ProductEditorComponent {
  editing: boolean = false;
  product: Product = new Product();
  constructor(private repository: ProductRepository,
    private router: Router,
    activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      Object.assign(this.product,
        repository.getProduct(Number.parseInt(activeRoute.snapshot.params['id'], 10)));
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
