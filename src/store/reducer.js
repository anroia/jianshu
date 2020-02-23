import { combineReducers } from 'redux-immutable'; 
import { reducer as headerReducer} from '../common/Header/store';
import { reducer as homeReducer} from '../pages/home/store';
import { reducer as writerReducer} from '../pages/writer/store';
import { reducer as detailReducer} from '../pages/detail/store';
import { reducer as loginReducer} from '../pages/login/store';


const reducer= combineReducers({
    header:headerReducer,
    huome:homeReducer,
    writer:writerReducer,
    detail:detailReducer,
    login:loginReducer
});

export default reducer;