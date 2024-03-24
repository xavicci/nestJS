import { Controller, Get, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProduct(
    @Query('offset') offset: number = 100,
    @Query('limit') limit: number = 0,
    @Query('brand') brand: string,
  ) {
    return `product ${offset} ${limit} ${brand}`;
  }
}
