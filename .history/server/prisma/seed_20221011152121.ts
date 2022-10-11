// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create dummy invite
  const invite1 = await prisma.invite.upsert({
    where: { em },
    update: {},
    create: {
      name: 'Prisma Adds Support for MongoDB',
      email: 'jhon@email.com',
      message:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
    },
  });

  console.log({ invite1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });