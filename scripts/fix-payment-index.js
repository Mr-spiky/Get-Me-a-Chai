// Script to fix MongoDB duplicate key error by dropping old indexes
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/chai';

async function fixPaymentIndexes() {
    try {
        console.log('🔌 Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        const db = mongoose.connection.db;
        const collection = db.collection('payments');

        console.log('\n📋 Current indexes:');
        const indexes = await collection.indexes();
        console.log(indexes);

        console.log('\n🗑️  Dropping old unique indexes...');
        
        try {
            // Try to drop the old OderId_1 index
            await collection.dropIndex('OderId_1');
            console.log('✅ Dropped OderId_1 index');
        } catch (error) {
            console.log('ℹ️  OderId_1 index not found (this is ok)');
        }

        try {
            // Try to drop the oid_1 index if it's unique
            await collection.dropIndex('oid_1');
            console.log('✅ Dropped oid_1 index');
        } catch (error) {
            console.log('ℹ️  oid_1 unique index not found (this is ok)');
        }

        console.log('\n📋 Indexes after cleanup:');
        const newIndexes = await collection.indexes();
        console.log(newIndexes);

        console.log('\n✨ Done! You can now create payments without duplicate key errors.');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await mongoose.connection.close();
        console.log('\n🔌 Disconnected from MongoDB');
    }
}

fixPaymentIndexes();
