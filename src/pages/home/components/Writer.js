import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {
    WriterWrapper,
    WriterTogle,
    WriterItem,
    ViewAll
} from '../style';

class Writer extends PureComponent{
    render(){
        return(
            <WriterWrapper>
                <WriterTogle>
                        <span>推荐作者</span>
                        <a href="###" className="page-change">换一批</a>
                 </WriterTogle>
                {
                   this.props.list.map((item)=>{
                       return(
                        <WriterItem key={item.get('id')}>
                            <div className="clear"></div>
                            <div>
                            <div className="follow">
                               {item.get('follow')}
                            </div>
                              <img alt='' className="writer-pic" src={item.get('imgUrl')}/>
                              <div className="words">
                                <a href="###" className="name">{item.get('name')}</a>
                                <p>{item.get('like')}</p>
                              </div>
                            </div>
                            
                        </WriterItem>
                       )
                    })
                }
                
            </WriterWrapper>
            
        )
    }
}

const mapState=(state)=>({
    list:state.getIn(['huome','RecommenedWriter'])
});

export default connect(mapState,null)(Writer);