import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InvitesService } from './invites.service';
import { CreateInviteDto } from './dto/create-invite.dto';
import { UpdateInviteDto } from './dto/update-invite.dto';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception.filter';
import { ArticleEntity } from './entities/article.entity';

import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';



@Controller('invites')
@ApiTags('invites')
@UseFilters(PrismaClientExceptionFilter)
export class InvitesController {
  constructor(private readonly invitesService: InvitesService) {}

  @Post()
  @ApiCreatedResponse({ type: InviteEntity })
  create(@Body() createInviteDto: CreateInviteDto) {
    return this.invitesService.create(createInviteDto);
  }

  @Get()
  findAll() {
    return this.invitesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invitesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInviteDto: UpdateInviteDto) {
    return this.invitesService.update(+id, updateInviteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invitesService.remove(+id);
  }
}
