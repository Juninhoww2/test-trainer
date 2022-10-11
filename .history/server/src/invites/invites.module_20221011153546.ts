import { Module } from '@nestjs/common';
import { InvitesService } from './invites.service';
import { InvitesController } from './invites.controller';

@Module({
  controllers: [InviteController],
  providers: [InviteService],
  imports: [PrismaModule],
})
export class InvitesModule {}
