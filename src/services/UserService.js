import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8080/api/v1/user";
const USER_API_BASE_URL1="http://localhost:8080/api/v1/register";


class UserService{
getuser()
{
    return axios.get(USER_API_BASE_URL);
}
registerUser(user)
{
    return axios.post(USER_API_BASE_URL1,user);
}
}

export default new UserService()