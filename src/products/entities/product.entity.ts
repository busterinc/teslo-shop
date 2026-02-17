import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductImage } from "./product-image.entity";
import { User } from "src/auth/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'products'})
export class Product {
    @ApiProperty({
        example: 'fdc41302-8782-4787-92a2-43b46f826e4f',
        description: 'Product ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        example: 'T-shirt Teslo',
        description: 'Product Title',
        uniqueItems: true
    })
    @Column('text', { unique: true })
    title: string;

    @ApiProperty({
        example: 0,
        description: 'Product Price'
    })
    @Column('float', { default: 0 })
    price: number;

    @ApiProperty({
        example: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description: 'Product Description',
        default: null,
    })
    @Column({ type: 'text', nullable: true })
    description: string;

    @ApiProperty({
        example: 't_shirt_teslo',
        description: 'Product Slug - For SEO',
        uniqueItems: true
    })
    @Column('text', { unique: true })
    slug: string;

    @ApiProperty({
        example: 10,
        description: 'Product Stock',
        default: 0
    })
    @Column('int', { default: 0 })
    stock: number;

    @ApiProperty({
        example: ['XS','S','M','L','XL','XXL'],
        description: 'Product Slug - For SEO',
    })
    @Column('text', { array: true })
    sizes: string[];

    @ApiProperty({
        example: 'women',
        description: 'Product Gender'
    })
    @Column('text')
    gender: string;

    // tags
    @ApiProperty({
        example: ['sweatshirt','shirt','hoodie','hats'],
        description: 'Product Tags',
    })
    @Column('text', { array: true, default: [] })
    tags: string[];

    // images
    @ApiProperty({
        example: ['7652426-00-A_0_2000.jpg'],
        description: 'Product Image',
    })
    @OneToMany(() => ProductImage, (productImage) => productImage.product, { cascade: true, eager: true })
    images?: ProductImage[];

    @ManyToOne(() => User, (user) => user.product, { eager: true })
    user: User


    @BeforeInsert()
    checkSlugInsert() {
        if (!this.slug) this.slug = this.title

        this.slug = this.slug
            .toLowerCase()
            .replaceAll(/ /g, '_')
            .replaceAll(/'/g, '');
            
    }

    @BeforeUpdate()
    checkSlugUpdate() {
        this.slug = this.slug
            .toLowerCase()
            .replaceAll(/ /g, '_')
            .replaceAll(/'/g, '');
    }
}