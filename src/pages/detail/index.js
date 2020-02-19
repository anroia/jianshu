import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {actionCreators} from './store'
import {
    DetailWrapper,
    DetailTitle,
    Content
} from './style';

class Detail extends PureComponent{
    render(){
        return(
            <DetailWrapper>
                <DetailTitle>
                <h3>
                     {this.props.title}   
                </h3>
                </DetailTitle>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetail();
    }
}




const mapState=(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
});

const mapDispatch=(dispatch)=>({
    getDetail(){
      dispatch(actionCreators.getDetail());
    }
})

export default connect(mapState,mapDispatch)(Detail);