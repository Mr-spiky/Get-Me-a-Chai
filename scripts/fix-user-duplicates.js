// Script to fix duplicate user accounts
// Run with: node scripts/fix-user-duplicates.js

import mongoose from 'mongoose';
import User from '../models/User.js';

async function fixDuplicates() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/chai');
        console.log('✅ Connected to MongoDB');

        const email = 'shivsim2005@gmail.com';
        
        // Find all users with this email
        const users = await User.find({ email: email });
        console.log(`\n📊 Found ${users.length} user(s) with email: ${email}`);
        
        users.forEach((user, index) => {
            console.log(`\n👤 User ${index + 1}:`);
            console.log('   _id:', user._id);
            console.log('   username:', user.username);
            console.log('   name:', user.name);
            console.log('   profilePic:', user.profilePic ? 'Set' : 'Not set');
            console.log('   coverPic:', user.coverPic ? 'Set' : 'Not set');
            console.log('   razorpayId:', user.razorpayId ? 'Set' : 'Not set');
            console.log('   bio:', user.bio ? 'Set' : 'Not set');
            console.log('   createdAt:', user.createdAt);
        });

        if (users.length > 1) {
            console.log('\n⚠️  You have duplicate user accounts!');
            console.log('🔧 Options to fix:');
            console.log('   1. Keep the user with the most complete data');
            console.log('   2. Delete all except one and update it with your latest data');
            
            // Find the user with the most data
            const userWithMostData = users.reduce((prev, current) => {
                const prevScore = [prev.profilePic, prev.coverPic, prev.razorpayId, prev.bio].filter(Boolean).length;
                const currScore = [current.profilePic, current.coverPic, current.razorpayId, current.bio].filter(Boolean).length;
                return currScore > prevScore ? current : prev;
            });
            
            console.log('\n✨ Recommended: Keep user with username:', userWithMostData.username);
            console.log('   This user has the most complete profile data.');
        }

        await mongoose.connection.close();
        console.log('\n✅ Database connection closed');
        
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

fixDuplicates();
