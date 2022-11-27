import 'regenerator-runtime/runtime';
import axios from 'axios';
const fetchUsers = () => {
    axios
      .get('http://localhost:8000/api/api/randomProducts')
      .then(response => {
        const users = response.data.data
        console.log(`GET list users`, users)
      })
      .catch(error => console.error(error))
  }
  
  fetchUsers()


