import axios from 'axios';
import * as constants from './constants';

const changeWriterData=(result)=>({
    type:constants.CHANGE_WRITER_DATA,
    WriterList:result.WriterList
});

export const getWriterInfo=()=>{
    return (dispatch)=>{
        axios.get('/api/recommendation.json').then((res)=>{
            const result=res.data.data;
            dispatch(changeWriterData(result));
        });
    }
}