import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductService } from './product.service';

@Module({
    controllers: [],
    providers: [PrismaService, ProductService],
})

export class ProductModule {}