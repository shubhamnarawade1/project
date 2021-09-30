import axios from 'axios';

const USER_API_BASE_URL4="http://localhost:8080/api/v1/answer";

class AnswerService
{
submitAnswer(answer)
{
    return axios.post(USER_API_BASE_URL4,answer);
}

}
export default new AnswerService()