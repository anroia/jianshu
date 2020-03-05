import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState=fromJS({
    topicList:[],
    RecommenedList:[],
    article:[],
    RecommenedWriter:[],
    showScroll:false,
    articlePage:1,
    recommenPage:1,
    recommenTotalPage:1
});

const changeHomeData=(state,action)=>{
    return state.merge({
        topicList:fromJS(action.topicList),
        RecommenedList:fromJS(action.RecommenedList),
        article:fromJS(action.article),
        RecommenedWriter:fromJS(action.RecommenedWriter)
    });
};

const addArticleList=(state,action)=>{
    return state.merge({
        'article':state.get('article').concat(action.list),
        'articlePage':action.nextPage
    });
};

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
           return changeHomeData(state,action)
            case constants.ADD_HOME_LIST:
            return addArticleList(state,action)
            case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show);
            case constants.ADD_RECOMMEN_DATA:
			return state.set('recommenPage', action.recommenPage);
            default:
            return state;
    }
}