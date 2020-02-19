import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState=fromJS({
    topicList:[],
    RecommenedList:[],
    article:[],
    RecommenedWriter:[],
    showScroll:false,
    articlePage:1
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList:fromJS(action.topicList),
                RecommenedList:fromJS(action.RecommenedList),
                article:fromJS(action.article),
                RecommenedWriter:fromJS(action.RecommenedWriter)
            });
            case constants.ADD_HOME_LIST:
            return state.set('article',state.get('article').concat(action.list));
            case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show);
            default:
            return state;
    }
}