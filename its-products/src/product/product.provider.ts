import { DataSource } from 'typeorm';
import { Product } from './entities/product.entity';
import { DATA_SOURCE } from 'src/common/constants/data.source.const';

export const productProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
    inject: [DATA_SOURCE],
  },
];
