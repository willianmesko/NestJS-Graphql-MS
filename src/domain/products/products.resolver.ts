import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';
import { CreateProductInput } from './dto/create-product-input.dto';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  async getProducts() {
    return this.productsService.findAll();
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('createProductPostData') product: CreateProductInput,
  ) {
    return await this.productsService.create(product);
  }
}
