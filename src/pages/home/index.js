import React, {PureComponent} from 'react';
import List from './components/List';
import Recommened from './components/Recommened';
import Topic from './components/Topic';
import Writer from './components/Writer';
import Mobile from './components/Mobile';
import { connect } from 'react-redux';
import {actionCreators} from './store'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent{
     
    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                        <img alt='' className="bannerimg" src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    {
                        this.props.showScroll ? <BackTop title="回到顶部" onClick={this.handleScrollTop}>回到顶部</BackTop> : null
                    }
                    
                    <Recommened/>
                    <Mobile/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount(){
       this.props.changeHomeData();
       this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow())
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow())
    }
}

const mapState=(state)=>({
    showScroll:state.getIn(['huome','showScroll'])
})

const mapDispatch=(dispatch)=>({
    changeHomeData(){
       dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow(){
      if(document.documentElement.scrollTop>100){
          dispatch(actionCreators.toggleTopShow(true))
      }else{
        dispatch(actionCreators.toggleTopShow(false))
      }
    }
});

export default connect(mapState,mapDispatch)(Home);