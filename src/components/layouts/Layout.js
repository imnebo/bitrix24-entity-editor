import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from "react-router-dom";

import { Layout as  LayoutAntd, Spin, Button, PageHeader} from 'antd';

import TopMenu from '../blocks/TopMenu';

const { Header, Footer, Content  } = LayoutAntd;

class Layout extends Component {
    render() {
        return (
            <LayoutAntd>
                <Spin tip="Loading..." spinning={!!this.props.preloader.show} delay={100} size="large">
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <TopMenu />
                    </Header>
                    <Content style={{ background: '#fff', padding: 0, minHeight: 500}}>{ this.props.children }</Content>
                    <Footer style={{ textAlign: 'center'}}>
                        Bug Reports & Feature Requests <a target="_blank" href="https://github.com/leonvv/bitrix24-entity-editor/issues">here</a>
                    </Footer>
                </Spin>
            </LayoutAntd>
        );
    }
}

const mapStateToProps = (state) => ({
    preloader: state.preloader
})

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));