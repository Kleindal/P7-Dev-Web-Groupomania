import axios from 'axios';

const getGroup = () => {
  return(dispatch => {
    return axios.get('dummy-data/groups.json')
    .then(res => dispatch({type: 'GET_GROUPS', payload: res.data}))
  })
}

export default getGroup
