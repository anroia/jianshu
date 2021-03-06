import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem
} from '../style';

class Topic extends PureComponent{
    render(){
        return(
            <TopicWrapper>
                {
                    this.props.list.map((item)=>{
                       return(
                        <TopicItem key={item.get('id')}>
                        <img alt='' className="item-img" src={item.get('imgUrl')}/>
                        {item.get('title')}
                        </TopicItem>
                       )
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapState=(state)=>({
    list:state.getIn(['home','topicList'])
});

export default connect(mapState,null)(Topic);