import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Like, Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly repository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const [products, count] = await this.repository.findAndCount({
      where: { name: Like('nombre') },
    });
  }

  async findAll(paginador: any) {
    const products = await this.repository.find({
      withDeleted: true,
    });
    return `This action returns all product`;
  }

  async recover(id: number) {
    const product = await this.repository.findOne({
      where: { id },
      withDeleted: true,
    });
    if (product) this.repository.recover(product);
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    const product = await this.findOne(id);

    return product ? this.repository.softRemove(product) : 'Nada que borrar';
  }
}
