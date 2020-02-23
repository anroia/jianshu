import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {Link} from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Button,
    Addition,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
}from './style';

class Header extends Component{
    getListArea=()=>{
        const { focused, list,page}=this.props;
        const newList=list.toJS();
        const pageList=[];
        for (let i=(page-1)*10;i<page*10;i++){
            pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }
        if (focused){
            return(
                <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>
            )
        }else{
            return null;
        }
    }

    render(){
        const {focused,handleInputBlur,handleInputFocus,login,logout}=this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                   <Logo/>
                </Link>
                    
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载App</NavItem>
                        {
                            login ? <NavItem onClick={logout}className='right'>退出</NavItem> :
                            <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                        }
                        
                        <NavItem className='right'><span className="iconfont">&#xe636;</span></NavItem>
                        <SearchWrapper>
                            <CSSTransition
                               in={focused}
                               timeout={200}
                               classNames="slide"
                            >
                                <NavItem><i class="iconfont">&#xe636;</i></NavItem>
                                 <NavSearch 
                               className={focused ? 'focused':''}
                               onFocus={handleInputFocus}
                               onBlur={handleInputBlur}
                            >
                               
                            </NavSearch> 
                            </CSSTransition>
                           
                            <i className={focused ? 'focused iconfont':'iconfont'}>&#xe641;</i>
                            {this.getListArea(focused)}
                        </SearchWrapper>
                        
                    </Nav>
                    <Addition>
                        <Link to='writeArticle'>
                           <Button className='writting'>写文章</Button>
                        </Link>
                        
                        <Button className='reg'>注册</Button>
                    </Addition>
                </HeaderWrapper>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        login:state.getIn(['login','login']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn'])
    }
}
const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			}else {
				dispatch(actionCreators.changePage(1));
			}
		},
		logout() {
			dispatch(loginActionCreators.logout())
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);