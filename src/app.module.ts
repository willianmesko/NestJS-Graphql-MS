import { Module } from '@nestjs/common';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductsModule } from './domain/products/product.module';
import { DatabaseModule } from './infra/modules/database.module';

@Module({
  imports: [
    DatabaseModule,
    ProductsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      csrfPrevention: true,
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
  ],
})
export class AppModule {}
