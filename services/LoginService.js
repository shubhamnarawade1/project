import axios from 'axios';

const USER_API_BASE_URL2="http://localhost:8080/api/v1/login";

class LoginService
{
loginUser(user)
{
    return axios.post(USER_API_BASE_URL2,user);
}

}
export default new LoginService()