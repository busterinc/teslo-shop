import { Controller, Get, Post, Param, UploadedFile, UseInterceptors, BadRequestException, Res } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
// import { fileFilter } from './helpers/fileFilter.helper';
// import { fileNamer } from './helpers/fileNamer.helper';
import { fileNamer, fileFilter } from './helpers';
import { diskStorage } from 'multer';
import type { Response } from 'express'
import { ConfigService } from '@nestjs/config';

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly configService: ConfigService
  ) {}

  @Get('product/:imageName')
  fineProductImage(
    @Res() res: Response,
    @Param('imageName') imageName: string
  ) {
    const path = this.filesService.getStaticProductImage(imageName)
    res.sendFile(path)

    return path
  }

  @Post('product')
  @UseInterceptors(FileInterceptor('file', {
    fileFilter: fileFilter,
    // limits: { fileSize: 1000 }
    storage: diskStorage({
      destination: './static/products',
      filename: fileNamer
    }),
  }))
  uploadProductImage(
    @UploadedFile() file: Express.Multer.File,
  ){
    if (!file) throw new BadRequestException('Make sure that file is an image')

    console.log({ fileInController: file })
    console.log(file)

    // const secureUrl = `${file.filename}`
    const secureUrl = `${this.configService.get('HOST_API')}/files/product/${file.filename}`

    return {
      // fileName: file.originalname,
      secureUrl
    }
  }
}
