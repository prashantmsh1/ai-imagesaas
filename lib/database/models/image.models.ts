import exp from "constants";
import { Document, Schema, model, models } from "mongoose";
import { transform } from "next/dist/build/swc";
import { config } from "process";


export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string;
    transformationUrl: URL;
    width?: number;
    height?: number;
    config?: object;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?: {
        _id: string;
        firstName: string;
        lastName: string;
    }
    createdAt?: Date;
    updatedAt?: Date;
}

const ImageScheme = new Schema({
    title: {
        type: String,
        required: true
    },
    transformationType: {
        type: String,
        required: true
    },
    publicId: {
        type: String,
        required: true
    },
    secureUrl: {
        type: URL,
        required: true
    },
    transformationUrl: {
        type: URL,
        required: true
    },
    width: {
        type: Number,
    },

    height: {
        type: Number,
    },
    config: {
        type: Object,

    },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },



})

const Image = models?.Image || model("Image", ImageScheme)

export default Image