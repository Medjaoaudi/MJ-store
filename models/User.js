import { model, models, Schema } from "mongoose";

const OrderSchema = new Schema({
   
    name: String,
    email: String,
   
}, {
    timestamps: true,
});

export const Order = models?.Order || model('Order', OrderSchema);