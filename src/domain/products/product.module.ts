import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { DatabaseModule } from 'src/infra/modules/database.module';
import { productsProviders } from 'src/infra/data/client/mongoose/providers/products.provider';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [
    DatabaseModule,
    ClientsModule.register([
      {
        name: 'PRODUCTS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBIT_MQ],
          queue: 'products',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  providers: [ProductsResolver, ProductsService, ...productsProviders],
})
export class ProductsModule {}
