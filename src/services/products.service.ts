import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla bla',
      price: 123,
      image: '',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((item: Product) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      payload,
    };
    // @ts-ignore
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, payload) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }
}
