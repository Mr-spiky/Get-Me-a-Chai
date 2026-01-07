// Script to clean up any invalid payment records
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/chai';

async function cleanInvalidPayments() {
    try {
        console.log('🔌 Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        const db = mongoose.connection.db;
        const collection = db.collection('payments');

        // Find payments with null or undefined oid
        console.log('\n🔍 Looking for invalid payments...');
        const invalidPayments = await collection.find({ 
            $or: [
                { oid: null },
                { oid: { $exists: false } },
                { oid: "" }
            ]
        }).toArray();

        console.log(`Found ${invalidPayments.length} invalid payment(s)`);

        if (invalidPayments.length > 0) {
            console.log('Invalid payments:', invalidPayments);
            
            // Delete invalid payments
            const result = await collection.deleteMany({ 
                $or: [
                    { oid: null },
                    { oid: { $exists: false } },
                    { oid: "" }
                ]
            });
            
            console.log(`\n🗑️  Deleted ${result.deletedCount} invalid payment(s)`);
        }

        console.log('\n📊 Current valid payments:');
        const validPayments = await collection.find({}).toArray();
        console.log(`Total payments: ${validPayments.length}`);
        validPayments.forEach(p => {
            console.log(`  - ${p.name}: ₹${p.amount} (oid: ${p.oid}, done: ${p.done})`);
        });

        console.log('\n✨ Database is now clean!');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await mongoose.connection.close();
        console.log('\n🔌 Disconnected from MongoDB');
    }
}

cleanInvalidPayments();
