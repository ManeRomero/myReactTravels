import axios from 'axios'

const APIUrl = 'http://localhost:3000/api/travels'
const APIById = 'http://localhost:3000/API/travelsByID/'

let getTravels = () => {
   return axios.get(APIUrl)
}

let postTravel = (insert) => {
   return axios.post(APIUrl, insert)
}

let travelById = (id) => {
   return axios.get(APIById + id)
}

export default {
   getTravels,
   postTravel,
   travelById
}