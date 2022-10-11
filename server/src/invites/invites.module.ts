import { Module } from '@nestjs/common';
import { InvitesService } from './invites.service';
import { InvitesController } from './invites.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [InvitesController],
  providers: [InvitesService],
  imports: [PrismaModule],
})
export class InvitesModule {}
