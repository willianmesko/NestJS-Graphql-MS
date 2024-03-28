import { Inject, Injectable } from '@nestjs/common';

import { CreateProductInput } from './dto/create-product-input.dto';
import { Model } from 'mongoose';
import { Product } from 'src/infra/data/client/mongoose/interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor(@Inject('PRODUCT_MODEL') private productModel: Model<Product>) {}

  async create(productInput: CreateProductInput): Promise<Product> {
    const createdProduct = new this.productModel(productInput);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
