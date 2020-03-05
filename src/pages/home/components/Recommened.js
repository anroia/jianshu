import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {
    RecommenedWrapper,
    RecommenedItem,
} from '../style';

class Recommened extends PureComponent{
    render(){
        return(
            <RecommenedWrapper>
                {
                    this.props.list.map((item)=>{
                       return(
                        <RecommenedItem key={item.get('id')}>
                        <img  alt='' className="item-pic" src={item.get('imgUrl')}/>
                        {item.get('title')}
                    </RecommenedItem>
                       )
                    })
                }
            </RecommenedWrapper>
        )
    }
}

const mapState=(state)=>({
    list:state.getIn(['home','RecommenedList'])
});

export default connect(mapState,null)(Recommened);