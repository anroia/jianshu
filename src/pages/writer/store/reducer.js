
import { fromJS } from 'immutable';

const defaultState=fromJS({
    WriterList:[]
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case 'change_recommendation_data':
            return state.merge({
                WriterList:fromJS(action.WriterList),
            })
             default:
            return state;
    }
}