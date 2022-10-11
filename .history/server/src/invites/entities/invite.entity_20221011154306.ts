
import { Invite } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';


export class InviteEntity  implements Invite {

    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    message: number;
}
