//
import {schema, normalize} from 'normalizr';


const riderSchema = new schema.Entity('rider');
const locationSchema = new schema.Entity('location');
const driverSchema = new schema.Entity('driver');
const addressSchema = new schema.Entity('address', {
    location: {data:[locationSchema]}
})
const vehicleSchema = new schema.Entity('vehicle',{
    driver: {data:[driverSchema]}});
const pickupStopSchema = new schema.Entity('pickupStop', {
    address: {data: [addressSchema]}
});
const dropoffStopSchema = new schema.Entity('dropoffStop', {
    address: {data: [addressSchema]}
});


const tripSchema = new schema.Entity('trips', {dropoffStop : {data:[dropoffStopSchema]},
                                                rider : {data:[riderSchema]},
                                                vehicle: {data : [vehicleSchema]},
                                                pickupStop : {data:[pickupStopSchema],
                                             }});
const tripListSchema = [tripSchema];

const tripNormalizr = tripResult => normalize(tripResult, tripListSchema);

export default tripNormalizr;
