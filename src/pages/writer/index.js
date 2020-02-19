import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    Recommendation,
    RecommenedArea,
    Wrap
} from './style';

class Writer extends Component{
    render(){
        return(
            <Recommendation>
                    <img alt='' className="recommened-banner" src="https://cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png"/>
                <RecommenedArea>
                    <Line-1>
                        <Wrap>
                        <div className="head-pic">
                                <img alt='' src="https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"/>
                            </div>
                          <h3>
                              简书钻首席小管家
                          </h3>
                          <p className="description">
                          愿意为你解答关于简书钻的一切疑问~
                          买简书...
                          </p>
                          <p className="follow">
                                <span>
                                    +关注
                                </span>
                          </p>
                          <hr/>
                          <p className="update">
                              最近更新
                          </p>
                          
                          <div className="article">
                              <a className="new" target="_blank" href="###">
                              心有灵犀---情人节特别活动第六对
                              </a>
                              <a className="new" target="_blank" href="###">
                              心有灵犀---情人节特别活动第七对
                              </a>
                              <a className="new" target="_blank" href="###">
                              心有灵犀---情人节特别活动第八对
                              </a>
                          </div>
                    </Wrap>
                    </Line-1>
                    
                </RecommenedArea>
            </Recommendation>
        )
    }
    componentDidMount(){
        axios.get('/api/recommendation.json').then((res)=>{
            const result=res.data.data;
            const action={
                type:'change_recommendation_data',
                recommendation:result.recommendation
            }
            this.props.changeRecommendationData(action);
        })
    }
}

const mapDispatch=(dispatch)=>({
    changeRecommendationData(action){
       dispatch(action);
    }
});
const mapState=(state)=>({
    list:state.getIn(['writer','WriterList'])
});

export default connect(mapState,mapDispatch)(Writer);