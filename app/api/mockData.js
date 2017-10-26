export const RIDER = {
    data: [{
      id: 123,
      token: 'Afesf343+2343sdf==',
      password: undefined,
      type: 'rider',
      firstName: 'John',
      lastName: 'Smith',
      dob: '1953/01/17'}],
    error: undefined,
    jsonapi: '1.0'
  }
  
  export const DRIVER = {
    data: [{
      id: 0,
      type: 'driver',
      firstName: 'John',
      lastName: 'Smith'
    }],
    error: undefined,
    jsonapi: '1.0'
  }
  
  export const VEHICLE = {
    data: [{
      id: 2,
      type: 'vehicle',
      driver: DRIVER
    }],
    error: undefined,
    jsonapi: '1.0'
  }
  
  export const RIDER_ERROR = {
    data: [{
  
    }],
    error: 'Rider Id not found',
    jsonapi: '1.0'
  }
  
  export const LOCATION = {
    data:[{
      id: 2,
      type: 'location',
      latitude: '67.34365',
      longitude: '-123.343564'
    }],
    error: undefined,
    jsonapi: '1.0'
  }
  
  
  export const LOCATION1 = {
    data:[{
      id: 2,
      type: 'location',
      latitude: '49.127444',
      longitude: '-123.093710'
    }],
    error: undefined,
    jsonapi: '1.0'
  }
  
  
  export const LOCATION2 = {
    data:[{
      id: 2,
      type: 'location',
      latitude: '49.133547',
      longitude: '-123.114296'
    }],
    error: undefined,
    jsonapi: '1.0'
  }
  
  export const LOCATION3 = {
    data:[{
      id: 2,
      type: 'location',
      latitude: '49.128431',
      longitude: '-123.158848'
    }],
    error: undefined,
    jsonapi: '1.0'
  }
  
  export const LOCATION4 = {
    data:[{
      id: 2,
      type: 'location',
      latitude: '49.117366',
      longitude: '-123.102886'
    }],
    error: undefined,
    jsonapi: '1.0'
  }
  
  
  
  export const TRIPS = {
    data: [{
      id: 1,
      type: 'trip',
      pickupStop: {
        data: [{
          id: 1,
          type: 'stop',
          stopTime: '2017/04/19 14:32',
          address : {
            data: [{
              id: 1,
              type: 'address',
              houseNumber: '3243',
              houseAddress: 'E 47 ST',
              city: 'Kirkland',
              state: 'WA',
              country: 'USA',
              description: undefined,
              location: LOCATION1,
              filter: 'none'
            }]
          },
          amount: 200,
          stopType: 'pick',
          description: 'pick up from the back door.',
        }],
        error: undefined,
        jsonapi: '1.0'
      },
      dropoffStop: {
        data: [{
          id: 2,
          type: 'stop',
          stopTime: '2017/04/19 15:32',
          address : {
            data: [{
              id: 2,
              type: 'address',
              houseNumber: '3243',
              houseAddress: 'W Stock Rd',
              city: 'Kirkland',
              state: 'WA',
              country: 'USA',
              description: undefined,
              location: LOCATION2,
              filter: 'none'
            }]
          },
          amount: 200,
          stopType: 'pick',
          description: 'pick up from the back door.'
        }],
        error: undefined,
        jsonapi: '1.0'    
      },
      riderNeed: undefined,
      rider: RIDER,
      vehicle: VEHICLE,
      state: 'active',
      activeState: 'assigned',
      bookingDropOffArriveTime: '2017/07/12 20:32',
      bookingPickupDepartTime: '2017/07/12 20:32'
    },
    {
      id: 2,
      type: 'trip',
      pickupStop: {
        data: [{
          id: 1,
          type: 'stop',
          stopTime: '2017/04/19 14:32',
          address : {
            data: [{
              id: 1,
              type: 'address',
              houseNumber: '3200',
              houseAddress: 'E 20 ST',
              city: 'Kirkland',
              state: 'WA',
              country: 'USA',
              description: undefined,
              location: LOCATION1,
              filter: 'none'
            }]
          },
          amount: 200,
          stopType: 'pick',
          description: 'pick up from the back door.'
        }],
        error: undefined,
        jsonapi: '1.0'
      },
      dropoffStop: {
        data: [{
          id: 2,
          type: 'stop',
          stopTime: '2017/04/19 15:32',
          address : {
            data: [{
              id: 2,
              type: 'address',
              houseNumber: '243',
              houseAddress: 'E River ST',
              city: 'Kirkland',
              state: 'WA',
              country: 'USA',
              description: undefined,
              location: LOCATION2,
              filter: 'none'
            }]
          },
          amount: 200,
          stopType: 'pick',
          description: 'pick up from the back door.'
        }],
        error: undefined,
        jsonapi: '1.0'    
      },
      riderNeed: undefined,
      vehicle: VEHICLE,
      rider: RIDER,
      state: 'active',
      activeState: 'assigned',
      bookingDropOffArriveTime: '2017/07/19 15:32',
      bookingPickupDepartTime: '2017/07/19 16:32'
    },
    {
      id: 3,
      type: 'trip',
      pickupStop: {
        data: [{
          id: 1,
          type: 'stop',
          stopTime: '2017/04/19 14:32',
          address : {
            data: [{
              id: 1,
              type: 'address',
              houseNumber: '323',
              houseAddress: 'DEER LAKE PKWY',
              city: 'KIRKLAND',
              state: 'WA',
              country: 'USA',
              description: undefined,
              location: LOCATION3,
              filter: 'none'
            }]
          },
          amount: 200,
          stopType: 'pick',
          description: 'pick up from the back door.'
        }],
        error: undefined,
        jsonapi: '1.0'
      },
      dropoffStop: {
        data: [{
          id: 2,
          type: 'stop',
          stopTime: '2017/04/19 15:32',
          address : {
            data: [{
              id: 2,
              type: 'address',
              houseNumber: '241',
              houseAddress: 'MORELAND DR',
              city: 'kirkland',
              state: 'WA',
              country: 'USA',
              description: undefined,
              location: LOCATION4,
              filter: 'none'
            }]
          },
          amount: 200,
          stopType: 'pick',
          description: 'pick up from the back door.'
        }],
        error: undefined,
        jsonapi: '1.0'    
      },
      riderNeed: undefined,
      vehicle: VEHICLE,
      rider: RIDER,
      state: 'active',
      activeState: 'assigned',
      bookingDropOffArriveTime: '2017/07/19 15:32',
      bookingPickupDepartTime: '2017/07/19 16:32'
    },
    ],
    error: undefined,
    jsonapi: '1.0'
  }
  
  export const SELECTED_TRIP = {
    id: 1,
    type: 'trip',
    pickupStop: {
      data: [{
        id: 1,
        type: 'stop',
        stopTime: '2017/04/19 14:32',
        address : {
          data: [{
            id: 1,
            type: 'address',
            houseNumber: '3243',
            houseAddress: '7th Ave',
            city: 'Vancouver',
            state: 'WA',
            country: 'USA',
            description: undefined,
            location: LOCATION1,
            filter: 'none'
          }]
        },
        amount: 200,
        stopType: 'pick',
        description: 'pick up from the back door.'
      }],
      error: undefined,
      jsonapi: '1.0'
    },
    dropoffStop: {
      data: [{
        id: 2,
        type: 'stop',
        stopTime: '2017/04/19 15:32',
        address : {
          data: [{
            id: 2,
            type: 'address',
            houseNumber: '3243',
            houseAddress: 'W Stock Rd',
            city: 'Kirkland',
            state: 'WA',
            country: 'USA',
            description: undefined,
            location: LOCATION2,
            filter: 'none'
          }]
        },
        amount: 200,
        stopType: 'pick',
        description: 'pick up from the back door.'
      }],
      error: undefined,
      jsonapi: '1.0'
    },
    riderNeed: undefined,
    vehicle: {
      data: [{
        id: 1,
        type: 'vehicle',
        driver: {
          data: [{
            id: 1,
            type: 'driver',
            firstName: 'Jack',
            lastName: 'Smith'
          }],
          error: undefined,
          jsonapi: '1.0'
        }
      }],
      error: undefined,
      jsonapi: '1.0'
    },
    rider: RIDER,
    state: 'active',
    activeState: 'assigned',
    bookingDropOffArriveTime: '2017/06/26 20:32',
    bookingPickupDepartTime: '2017/06/26 20:32'
  }
  
  export const TOKEN = 'AR#@$23434+=='