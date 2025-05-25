// prisma/seed.ts
import { PrismaClient, AuthType, AuthProvider } from '../src/generated/prisma';
import bcrypt from 'bcryptjs';

// Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  console.log('--- Starting Simplified User & Profile Seed Script ---');

  // --- 2. Create Three Sample Users with Email/Password Auth & Profiles ---
  console.log('👤 Creating three sample users with profiles and email/password authentication...');

  // User 1: Alice
  const hashedPasswordAlice = await bcrypt.hash('passwordAlice1!', 10);
  const alice = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      emailVerified: new Date(),
      image: 'https://i.pravatar.cc/150?img=1', // Different avatar
      authMethods: {
        create: {
          type: AuthType.CREDENTIALS,
          provider: AuthProvider.EMAIL_PASSWORD,
          providerAccountId: 'alice@example.com',
          passwordHash: hashedPasswordAlice,
        },
      },
      profile: {
        create: {
          bio: 'Frontend developer passionate about React and UI/UX.',
          website: 'https://alice.dev',
          location: 'New York, NY',
          birthDate: new Date('1992-03-20'),
        },
      },
    },
    include: {
      authMethods: true,
      profile: true,
    },
  });
  console.log(`Created user: ${alice.email}`);

  // User 2: Bob
  const hashedPasswordBob = await bcrypt.hash('passwordBob2!', 10);
  const bob = await prisma.user.create({
    data: {
      email: 'bob@example.com',
      emailVerified: new Date(),
      image: 'https://i.pravatar.cc/150?img=2', // Different avatar
      authMethods: {
        create: {
          type: AuthType.CREDENTIALS,
          provider: AuthProvider.EMAIL_PASSWORD,
          providerAccountId: 'bob@example.com',
          passwordHash: hashedPasswordBob,
        },
      },
      profile: {
        create: {
          bio: 'Backend engineer focused on Node.js and database design.',
          website: 'https://bob-code.net',
          location: 'San Francisco, CA',
          birthDate: new Date('1988-11-05'),
        },
      },
    },
    include: {
      authMethods: true,
      profile: true,
    },
  });
  console.log(`Created user: ${bob.email}`);

  // User 3: Charlie
  const hashedPasswordCharlie = await bcrypt.hash('passwordCharlie3!', 10);
  const charlie = await prisma.user.create({
    data: {
      email: 'charlie@example.com',
      emailVerified: new Date(),
      image: 'https://i.pravatar.cc/150?img=3', // Different avatar
      authMethods: {
        create: {
          type: AuthType.CREDENTIALS,
          provider: AuthProvider.EMAIL_PASSWORD,
          providerAccountId: 'charlie@example.com',
          passwordHash: hashedPasswordCharlie,
        },
      },
      profile: {
        create: {
          bio: 'DevOps specialist ensuring smooth deployments.',
          website: 'https://charlie-ops.io',
          location: 'Austin, TX',
          birthDate: new Date('1995-01-25'),
        },
      },
    },
    include: {
      authMethods: true,
      profile: true,
    },
  });
  console.log(`Created user: ${charlie.email}`);

  console.log('✨ Seeding complete!');
}

// Ensure the Prisma Client disconnects gracefully after seeding
main()
  .catch(async (e) => {
    console.error('❌ Error during seed execution:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('🔌 Prisma client disconnected.');
  });