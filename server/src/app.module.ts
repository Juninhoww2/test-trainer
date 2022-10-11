import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { InvitesModule } from './invites/invites.module';

@Module({
  imports: [PrismaModule, InvitesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
