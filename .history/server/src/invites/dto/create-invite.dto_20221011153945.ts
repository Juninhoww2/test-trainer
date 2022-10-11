import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @ApiProperty()
    title: string;
  
    @IsString()
    @IsOptional()
    @MaxLength(300)
    @ApiProperty({ required: false })
    description?: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    body: string;
  
    @IsBoolean()
    @IsOptional()
    @ApiProperty({ required: false, default: false })
    published?: boolean = false;
  }