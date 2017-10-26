//
import {createSelector} from 'reselect';

// Select entities from state.
const getItemsMap = (state) => {
    console.log("state.list", state.list);
    if ( state.list.get('items') !== undefined){
        console.log("getItemsMap", state.list.get('items').get('result'));
    }
    return state.list.get('items');
}
const getLoadingMap = (state) => state.list.get('loading');


const getResultMap = (state) => {
    if(state === undefined || state.list === undefined || state.list.get('items') === undefined) {
        return undefined;
    }
    let result = state.list.get('items').get('result');
    console.log('getResultMap', result);
    return result;
}


const getRiderMap = (state) => {
    if(state === undefined || state.list === undefined || state.list.get('items') === undefined) {
        return undefined;
    }
    let rider = state.list.get('items').getIn(['entities', 'rider']);
    console.log('rider', rider);
    return rider;
}

const getLocationMap = (state) => {
    if(state === undefined || state.list === undefined || state.list.get('items') === undefined) {
        return undefined;
    }
    let location = state.list.get('items').getIn(['entities', 'location']);
    console.log('location', location);
    return location;
}

const getDriverMap = (state) => {
    if(state === undefined || state.list === undefined || state.list.get('items') === undefined) {
        return undefined;
    }
    let driver = state.list.get('items').getIn(['entities', 'driver']);
    console.log('driver', driver);
    return driver;
}

const getAddressMap = (state) => {
    if(state === undefined || state.list === undefined || state.list.get('items') === undefined) {
        return undefined;
    }
    let address = state.list.get('items').getIn(['entities', 'address']);
    console.log('address', address);
    return address;
}

const getVehicleMap = (state) => {
    if(state === undefined || state.list === undefined || state.list.get('items') === undefined) {
        return undefined;
    }
    let vehicle = state.list.get('items').getIn(['entities', 'vehicle']);
    console.log('vehicle', vehicle);
    return vehicle;
}


const getPickupStopMap = (state) => {
    if(state === undefined || state.list === undefined || state.list.get('items') === undefined) {
        return undefined;
    }
    let pickupStop = state.list.get('items').getIn(['entities', 'pickupStop']);
    console.log('pickupStop', pickupStop);
    return pickupStop;
}

const getDropoffStopeMap = (state) => {
    if(state === undefined || state.list === undefined || state.list.get('items') === undefined) {
        return undefined;
    }
    let dropoffStop = state.list.get('items').getIn(['entities', 'dropoffStop']);
    console.log('dropoffStop', dropoffStop);
    return dropoffStop;
}

const getTripMap = (state) => {
    if(state === undefined || state.list === undefined || state.list.get('items') === undefined) {
        return undefined;
    }
    let trip = state.list.get('items').getIn(['entities', 'trips']);
    console.log('trips', trip);
    return trip;
}

export const getTrips = createSelector(
    getTripMap,
    (tripMap) => {
        if (tripMap === undefined) {
            return undefined;
        }
        return tripMap.toJS();
    }
);
export const getResult = createSelector(
    getResultMap,
    (resultMap) => {
        if (resultMap === undefined) {
            return undefined
        }
        return resultMap.toJS();
    }
);
export const getPickupStop = createSelector(
    getPickupStopMap,
    (pickupStopMap) => {
        if (pickupStopMap === undefined) {
            return undefined
        }
        return pickupStopMap.toJS();
    }
);


export const getTripsForList = createSelector(
    getResult,
    getTrips,
    getPickupStop,
    (result,trips, pickupStop) => {
        console.log('result', result);
        if (result === undefined) {
            return undefined;
        }
        console.log(result);
        console.log(trips);
        console.log(pickupStop);

        
        let tripListMap = {}
        let data = result.map(tripId => {
            const trip = trips[tripId];
            console.log('trip', trip);
            return {
                ...trip
            };
        
        });
        console.log('data', data);
        data.forEach(trip => {
            let date = ''
            if (trip.bookingDropOffArriveTime === undefined && trip.bookingPickupDepartTime === undefined) {
              return
            } else if (trip.bookingDropoffArriveTime === undefined) {
              date = trip.bookingPickupDepartTime
            } else {
              date = trip.bookingDropoffArriveTime
            }
        
            if (!isValidDateStr(date)) {
              return
            }
        
            let now = new Date()
            let dateObj = new Date(date)
        
            if (dateObj.getTime() < now.getTime()) {
              return
            }
        
            let dateStr = formatDate(dateObj)
            console.log('dateStr', dateStr)
        
            console.log('tripListMap', tripListMap)
        
            if (!tripListMap[dateStr]) {
              // create an entry if it hasn't been create
              tripListMap[dateStr] = []
            }
            tripListMap[dateStr].push(trip)
          
        })

        
          return tripListMap
    }
);

export const getItems = createSelector(
    getItemsMap,
    (itemsMap) => {
        console.log('itemsMap', itemsMap);
        if (itemsMap !== undefined) {
            return itemsMap && itemsMap.toJS();
        }
        
    }
);




export const getLoading = createSelector(
    getLoadingMap,
    (loadingMap) => {
        console.log('loadingMap', loadingMap);

        if(loadingMap !== undefined) {
            return loadingMap;
        }
        
    }
);

let formatDate = (date) => {
    let monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ]
  
    let day = date.getDate()
    let monthIndex = date.getMonth()
    let year = date.getFullYear()
  
    return monthNames[monthIndex] + ' ' + day + ' ' + year
  }
  
  let isValidDateStr = (dateStr) => {
    let timestamp = Date.parse(dateStr)
    return !isNaN(timestamp)
  }


