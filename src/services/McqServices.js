import axios from 'axios';

const MCQ_API_BASE_URL2="http://localhost:8080/api/v1/mcq";



class McqServices{
getmcq()
{
    return axios.get(MCQ_API_BASE_URL2);
}

}

export default new McqServices()