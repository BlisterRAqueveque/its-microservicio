import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { productProviders } from './product.provider';
import { DatabaseModule } from 'src/database/database.module';
import { FacturaModule } from 'src/factura/factura.module';

@Module({
  imports: [DatabaseModule, FacturaModule],
  controllers: [ProductController],
  providers: [ProductService, ...productProviders],
})
export class ProductModule {}
