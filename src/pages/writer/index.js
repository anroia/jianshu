import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {
    Recommendation,
    RecommenedArea,
    Wrap
} from './style';
import { actionCreators } from './store';

class Writer extends PureComponent{
   
    render(){
        const { WriterList } =this.props;
        return(
            <Recommendation> 
                    <img alt='' className="recommened-banner" src="https://cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png"/>
                <RecommenedArea>
                    
                      {   
                      WriterList.map((item)=>{
                          return (
                            <Line-1>
                            <Wrap key={item}>
                            <div className="head-pic" >
                             <img alt='' src={item.get('imgUrl')}/> 
                             </div>
                            <h3>{item.get('title')}</h3>
                             <p className="description">
                              {item.get('description')}
                              </p>
                            <p className="follow">
                            <span>
                             +关注
                            </span>
                             </p>
                            <hr/>
                              <p className="update">
                               最近更新
                             </p>
                            <div className="article">
                                 <a className="new" target="_blank" href="###">
                                 {item.get('article1')}
                                 </ a>
                                 <a className="new" target="_blank" href="###">
                                 {item.get('article2')}
                                 </ a>
                                 <a className="new" target="_blank" href="###">
                                 {item.get('article3')}
                                 </ a>
                             </div>
                            </Wrap>
                            </Line-1>
                          )
                      })
                           
                        }
                    
                </RecommenedArea>
            </Recommendation>
        )
    }
    componentDidMount(){
        this.props.changeWriterData();
    }
    
}

const mapState=(state)=>({
    WriterList:state.getIn(['writer','WriterList'])
});

const mapDispatch=(dispatch)=>({
    changeWriterData(){
        dispatch(actionCreators.getWriterInfo());
    }
})

export default connect(mapState,mapDispatch)(Writer);
