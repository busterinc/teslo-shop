import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsArray, IsIn, IsNumber, IsOptional, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsString()
    @MinLength(1)
    title: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsNumber()
    @Min(0)
    @IsPositive()
    @IsOptional()
    stock?: number;

    @IsString({ each: true })
    @IsArray()
    size: string[];

    @IsIn(['men', 'women', 'kid', 'unisex'])
    gender: string;

    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    tags?: string[];
}
