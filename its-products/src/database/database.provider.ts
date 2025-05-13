import { DATA_SOURCE } from 'src/common/constants/data.source.const';
import { envs } from 'src/configurations/environments/envs';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: envs.DB_HOST,
        port: envs.DB_PORT,
        username: envs.DB_USER,
        password: envs.DB_PASSWORD,
        database: envs.DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: envs.SYNC,
      });

      return dataSource.initialize();
    },
  },
];
