import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {actionCreators} from './store';
import {withRouter} from 'react-router-dom';
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
        this.props.getDetail(this.props.match.params.id);
    }
}




const mapState=(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
});

const mapDispatch=(dispatch)=>({
    getDetail(id){
      dispatch(actionCreators.getDetail(id));
    }
})

export default connect(mapState,mapDispatch)(withRouter(Detail));