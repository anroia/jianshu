import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';
import {
    ListWrapper,
    ListContent,
    LoadMore
} from '../style';

class List extends PureComponent{
    render(){
        const { list,getMoreList, page} =this.props;
        return(
            <div>
                {
                    list.map((item,index)=>{
                        return(
                            <Link key={index} to='./detail'>
                                <ListWrapper key={index}>
                               <img alt='' className="list-img" src={item.get('imgUrl')}/> 
                                <ListContent>
                                    <h3>{item.get('title')}</h3>
                                    <p>{item.get('desc')}</p>
                                </ListContent>
                                </ListWrapper>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={()=>getMoreList(page)}>
                      更多内容
                </LoadMore>
            </div>
            
        )
    }
}

const mapState=(state)=>({
    list:state.getIn(['home','article']),
    page:state.get(['home','articlePage'])
});
const mapDispatch=(dispatch)=>({
    getMoreList(page){
       dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapState,mapDispatch)(List);