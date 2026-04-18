const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function createManager() {
  console.log('👤 Creating Test Manager...');
  
  try {
    const passwordHash = await bcrypt.hash('admin123', 10);
    
    // Get the first cinema
    const cinema = await prisma.cinema.findFirst();
    if (!cinema) {
      console.error('❌ No cinemas found! Run seed-db first.');
      return;
    }

    const manager = await prisma.user.upsert({
      where: { email: 'manager@cima.com' },
      update: {
        managedCinemaId: cinema.id,
        userRole: 'STAFF'
      },
      create: {
        email: 'manager@cima.com',
        passwordHash,
        name: 'Cinema Manager',
        userRole: 'STAFF',
        managedCinemaId: cinema.id
      }
    });

    console.log(`✅ Manager created!`);
    console.log(`Email: manager@cima.com`);
    console.log(`Password: admin123`);
    console.log(`Assigned Cinema: ${cinema.name} (${cinema.id})`);
  } catch (err) {
    console.error('❌ Failed to create manager:', err);
  } finally {
    await prisma.$disconnect();
  }
}

createManager();
