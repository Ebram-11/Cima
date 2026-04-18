const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function createAdmin() {
  const email = process.argv[2] || 'admin@cima.com';
  const password = process.argv[3] || 'admin123';

  console.log(`🚀 Creating Global Admin: ${email}...`);
  
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    
    const admin = await prisma.user.upsert({
      where: { email: email.toLowerCase() },
      update: {
        userRole: 'ADMIN',
        managedCinemaId: null // Global admins manage all cinemas
      },
      create: {
        email: email.toLowerCase(),
        passwordHash,
        name: 'System Admin',
        userRole: 'ADMIN',
      }
    });

    console.log(`✅ Admin created successfully!`);
    console.log(`User: ${email}`);
    console.log(`Role: ADMIN`);
  } catch (err) {
    console.error('❌ Failed to create admin:', err);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
