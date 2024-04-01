import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const userCount = await prisma.user.count();
  if (userCount === 0) {
    console.log('No users found, seeding data...');
    
    await prisma.user.createMany({
      data: [
        { email: 'alice@example.com', name: 'Alice', password: 'hashedpassword123' },
        { email: 'bob@example.com', name: 'Bob', password: 'hashedpassword456' },
        // Add more users as needed
      ],
    });

    console.log('Seed data inserted');
  } else {
    console.log('Users already exist in the database, skipping seed...');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
