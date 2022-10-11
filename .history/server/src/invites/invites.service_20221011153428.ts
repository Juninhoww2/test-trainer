import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInviteDto } from './dto/create-invite.dto';
import { UpdateInviteDto } from './dto/update-invite.dto';

@Injectable()
export class InvitesService {
  constructor(private prisma: PrismaService) {}

  create(createInviteDto: CreateInviteDto) {
    return this.prisma.invite.create({ data: createInviteDto });
  }

  findAll() {
    return `This action returns all invites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invite`;
  }

  update(id: number, updateInviteDto: UpdateInviteDto) {
    return `This action updates a #${id} invite`;
  }

  remove(id: number) {
    return `This action removes a #${id} invite`;
  }
}
