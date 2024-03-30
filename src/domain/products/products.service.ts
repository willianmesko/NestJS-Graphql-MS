import { Inject, Injectable } from '@nestjs/common';

import { CreateProductInput } from './dto/create-product-input.dto';
import { Model } from 'mongoose';
import { Product } from 'src/infra/data/client/mongoose/interfaces/product.interface';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_MODEL') private productModel: Model<Product>,
    @Inject('PRODUCTS_SERVICE') private client: ClientProxy,
  ) {}

  async create(productInput: CreateProductInput): Promise<Product> {
    const createdProduct = new this.productModel(productInput);

    this.client.emit('products', {
      id: `Miau-${Math.random() * 100}}`,
      data: {
        productInput,
      },
    });
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
