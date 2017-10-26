import {connect} from 'react-redux'
import ListScreen from '../components/reduxStateComponents/ListScreen'
import {getItems, getLoading,getTripsForList } from '../selectors/listSelector'
import {updateListAction} from '../actions/listAction'


const mapStateToProps = (state) => ({
    //items: convertTripsArrayToMap(state)
    items: getTripsForList(state)
})

const mapDispatchToProps = (dispatch) => ({
    updateList: () => {
        dispatch(updateListAction())
    }
})

convertTripsArrayToMap =  (state) => {
    console.log('state', state);
    let items = getItems(state);
    let loading = getLoading(state);
    console.log('items@container', items);
    console.log('loading', loading);

    let tripItems = getTripsForList(state);
    console.log('tripItems', tripItems);

    let trips = state.list.items;
    if (trips === undefined) {
      return
    }
    let tripMap = {}
  
    trips.forEach(trip => {
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
  
      console.log('tripMap', tripMap)
  
      if (!tripMap[dateStr]) {
        // create an entry if it hasn't been create
        tripMap[dateStr] = []
      }
      tripMap[dateStr].push(trip)
    })
  
    return tripMap
  }

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

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);

