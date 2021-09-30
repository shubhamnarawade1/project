import React, { Component } from 'react';
import McqServices from '../services/McqServices';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import AnswerService from '../services/AnswerService';
import UserService from '../services/UserService';

class Mcq extends Component {
    constructor(props){
        super(props)
        this.state={
            mcq: [],
            answers: {},
        }
        //this.submit=this.submit.bind(this);
    }

    async componentDidMount ()
    {
        let arr=[];
         await McqServices.getmcq().then((res) => {
             res.data.map((mcq)=>{
                let obj={
                    mcqid: mcq.mcqid,
                    answer: ''
                }
                arr.push(obj);
             });
             this.setState({
                answers: arr
            });
             this.setState({ mcq:res.data});
         });
        
    }

    handleRadioChange = (event)=>{
       let mcqIndex= this.state.answers.findIndex((obj => obj.mcqid === event.target.name));
       this.state.answers[mcqIndex].answer=event.target.value;
        console.log(this.state.answers);
    }

    submit = async ()=>{
        await AnswerService.submitAnswer(this.state.answers).then(res =>{
            this.props.history.push("/login");   
         });
        
    }

    render() {
        return (
            <div>
                 <tbody>
                           {
                               <FormControl
                                    sx={{ m: 3 }}
                                    component="fieldset"
                                    variant="standard"
                                >
                                    {
                                        this.state.mcq.map(
                                            mcq=>
                                            <div>
                                            <p>{mcq.mcqid}. {mcq.question}</p>
                                            <RadioGroup
                                            aria-label="quiz"
                                            name={mcq.mcqid}
                                            onChange={this.handleRadioChange}
                                            Id={mcq.mcqid}
                                            >
                                            <FormControlLabel Id={mcq.mcqid} value={mcq.option1} control={<Radio />} label={mcq.option1} />
                                            <FormControlLabel Id={mcq.mcqid} value={mcq.option2} control={<Radio />} label={mcq.option2} />
                                            <FormControlLabel Id={mcq.mcqid} value={mcq.option3} control={<Radio />} label={mcq.option3} />
                                            <FormControlLabel Id={mcq.mcqid} value={mcq.option4} control={<Radio />} label={mcq.option4} />
                                          </RadioGroup>
                                            </div>
                                            )
                                    }
                                    <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined" onClick={this.submit}>
                                        Submit
                                    </Button>
                               </FormControl>
                           }
                         </tbody>
            </div>
        );
    }
}

export default Mcq;