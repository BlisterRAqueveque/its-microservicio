import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { FacturaModule } from './factura/factura.module';

@Module({
  imports: [DatabaseModule, ProductModule, FacturaModule],
})
export class AppModule {}
