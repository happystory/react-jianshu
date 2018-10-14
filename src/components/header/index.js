import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SerachInfoItem,
  Addition,
  Button,
} from './style';
import { actions } from '../../store/header';

class Header extends Component {
  getListArea = () => {
    const { focused, mouseIn, list, page, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list;
    const pageList = [];

    if (newList.length) {
      for (let i = page * 10; i < (page + 1) * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SerachInfoItem key={newList[i]}>{newList[i]}</SerachInfoItem>
          );
        }
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => { handleChangePage(this.spin) }}>
              <i className="iconfont icon-spin" ref={el => this.spin = el}></i>换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;

    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont icon-Aa"></i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                onFocus={() => { handleInputFocus(list) }}
                onBlur={handleInputBlur}
                className={focused ? 'focused' : ''} />
            </CSSTransition>
            <i className={focused ? 'iconfont icon-glass focused' : 'iconfont icon-glass'}></i>
            {
              this.getListArea()
            }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting"><i className="iconfont icon-pencil"></i>写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  focused: state.header.focused,
  list: state.header.list,
  page: state.header.page,
  mouseIn: state.header.mouseIn
});

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus(list) {
    if (list.length === 0) {
      dispatch(actions.getList());
    }
    dispatch(actions.searchFocus());
  },
  handleInputBlur() {
    dispatch(actions.searchBlur());
  },
  handleMouseEnter() {
    dispatch(actions.mouseEnter());
  },
  handleMouseLeave() {
    dispatch(actions.mouseLeave());
  },
  handleChangePage(spin) {
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
    if (originAngle) {
      originAngle = parseInt(originAngle, 10);
    } else {
      originAngle = 0;
    }
    spin.style.transform = `rotate(${originAngle + 360}deg)`;

    dispatch(actions.changePage());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
