import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 120, nullable: false })
  name: string;

  @Column({ type: 'double', default: 0 })
  price: number;

  @CreateDateColumn()
  createdAt: Date = new Date();

  @DeleteDateColumn()
  deleteAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date = new Date();

}
