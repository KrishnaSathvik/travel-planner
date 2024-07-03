const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  contactMethod: { type: String, required: true },
  travelers: { type: Number, required: true },
  travelerTypes: [String],
  travelDates: {
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
  },
  destination: { type: String, required: true },
  travelType: [String],
  travelStyle: [String],
  accommodation: [String],
  flightPreferences: [String],
  carRental: { type: String, required: true },
  specialRequests: String,
  interests: [String],
  mustSee: String,
  preferredActivities: String,
  dietaryRestrictions: String,
  totalBudget: { type: Number, required: true },
  budgetAllocation: [String],
  package: { type: String, required: true },
  previousExperience: String,
  comments: String
});

module.exports = mongoose.model('User', UserSchema);

