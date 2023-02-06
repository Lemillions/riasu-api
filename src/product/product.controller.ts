import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('api/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAllProducts(): Promise<Product[]> {
    return await this.productService.findAllProducts();
  }

  @Get(':id')
  async findOneProduct(@Param('id') id: string): Promise<Product> {
    return await this.productService.findOneProduct(id);
  }

  @Post()
  async createProduct(@Body() data: CreateProductDto): Promise<Product> {
    return await this.productService.createProduct(data);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() data: UpdateProductDto,
  ): Promise<Product> {
    return await this.productService.updateProduct(id, data);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<Product> {
    return await this.productService.deleteProduct(id);
  }

  @Post(':productId/channel')
  async addChannelToProduct(
    @Param('productId') productId: string,
    @Body() data: string[],
  ): Promise<string> {
    return await this.productService.addChannelsToProduct(
      productId,
      data,
    );
  }

  @Post(':productId/film')
  async addFilmToProduct(
    @Param('productId') productId: string,
    @Body() data: string[],
  ): Promise<string> {
    return await this.productService.addFilmsToProduct(
      productId,
      data,
    );
  }

  @Delete(':productId/channel')
    async removeChannelFromProduct(
        @Param('productId') productId: string,
        @Body('channelIds') channelIds: string[],
    ): Promise<Product> {
        return await this.productService.removeChannelsFromProduct(
            productId,
            channelIds,
        );
    }
}
