import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { DatabaseModule } from 'src/infra/modules/database.module';
import { productsProviders } from 'src/infra/data/client/mongoose/providers/products.provider';

@Module({
  imports: [DatabaseModule],
  providers: [ProductsResolver, ProductsService, ...productsProviders],
})
export class ProductsModule {}
