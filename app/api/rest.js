import { server } from './pretender'

class Api {
  static signOnRequest (rider) {
    let userName = rider.id
    let simMode = true

    let password = rider.password
    //let url = 'http://192.168.50.98:5000/API/signOn'
    //let url = '/rider'
    let url = 'http://192.168.50.98:4450/rider'

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(rider)
    })
    .then(response => {
      console.log('response', response)

      return response.json()
    })
    .then(json => {
      console.log('returnedJson', json)
      if (json.error === undefined || json.error === '') {
        return json.data.map(({id, token, type, email, phone, password, firstName, lastName, dob}) => ({
          id,
          token,
          type,
          email,
          phone,
          password,
          firstName,
          lastName,
          dob
        }))
      } else {
        return {error: json.error}
      }
      
    })
  }
  static updateList () {
    let riderId = 1;
    let url = 'http://192.168.50.98:4450/rider/' + riderId + '/trip'
    let headers = {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'Cache-Control' : 'no-cache',
      'Authorization' : 'Afesf343+2343sdf=='
    }
    let method = 'GET'

    return fetch(url, {
      method: method,
      headers: headers,
    })
    .then(response => {
      console.log('responseGetAllTrip:', response)
      return response.json()
    })
    .then(json => {
      console.log('json', json)
      if (json.error === undefined || json.error === '') {
        return json.data
      } else {
        return {error: json.error}
      }

    })
  }

  static getAllActiveTrip (riderId) {
    console.log('riderId', riderId)
    if (riderId === undefined) {
      return {error: 'noRiderId'}
    }
    //let url = 'http://192.168.50.98:4450/rider/' + riderId + '/trip'
    let url =  '/trip'
    let headers = {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'Cache-Control' : 'no-cache',
      'Authorization' : 'Afesf343+2343sdf=='
    }
    let method = 'GET'

    return fetch(url, {
      method: method,
      headers: headers,
    })
    .then(response => {
      console.log('responseGetAllTrip:', response)
      return response.json()
    })
    .then(json => {
      console.log('json', json)
      if (json.error === undefined || json.error === '') {
        return json.data
      } else {
        return {error: json.error}
      }

    })
  }

  static cancelTrip (tripId) {
    console.log('tripId', tripId)
    if (tripId === undefined) {
      return {error: 'no trip id'}
    }
    let url = 'http://192.168.50.98:4450/trip/' + tripId
    let headers = {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'Cache-Control' : 'no-cache',
      'Authorization' : 'Afesf343+2343sdf=='
    }

    let method = 'DELETE'

    return fetch(url, {
      method: method,
      headers: headers
    })
    .then(json => {
      console.log('json', json)
      if (json.error === undefined || json.error === '') {
        return json
      } else {
        return {error: json.error}
      }

    })
  }

}

export default Api