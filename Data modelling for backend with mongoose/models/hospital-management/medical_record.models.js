import mongoose from "mongoose";

const medicalRecords = new mongoose.Schema({},{timestamps: true});

export const MedicalRecords = mongoose.model("MedicalRecords", medicalRecords);