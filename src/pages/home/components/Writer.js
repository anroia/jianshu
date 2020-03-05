import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {
    WriterWrapper,
    WriterTogle,
    WriterItem,
    ViewAll
} from '../style';

class Writer extends PureComponent{
    render(){
        const { list}=this.props;
        return(
            <WriterWrapper>
                <WriterTogle>
                        <span>推荐作者</span>
                 </WriterTogle>
                 {list.map((item)=>{ 
                     return (<WriterItem key={item.get('id')}>
                        <ul>
                            <li>
                            <div className="follow">
                               {item.get('follow')}
                            </div>
                            <img alt='' className="writer-pic" src={item.get('imgUrl')}/>
                            <div className="words">
                                <div  className="name">{item.get('name')}</ div>
                                <p>{item.get('like')}</p>
                              </div>
                            </li>
                        </ul>
                        </WriterItem>)
                    })
                }
              <Link to="/recomendation"> 
                   <ViewAll>查看全部 ></ViewAll>
              </Link>
            </WriterWrapper>
            
        )
           
			}
        }
      
const mapState=(state)=>({
    list:state.getIn(['home','RecommenedWriter'])
});

export default connect(mapState,null)(Writer);