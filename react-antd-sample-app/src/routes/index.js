import React from 'react';
import {Layout, Menu} from "antd"

import {Link, Route, Switch} from "react-router-dom";

import Posts from './Posts'
import Gallery from './Gallery'


const Index=(props)=> {

     
        const {Header, Content, Footer} = Layout;


		const {match, history} = props;

		const selectedKeys = history.location.pathname.substr(1);
		const defaultOpenKeys = selectedKeys.split('/')[1];


        return (
            <Layout className="layout">
                <Header>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
						defaultOpenKeys={[defaultOpenKeys]}
						selectedKeys={[selectedKeys]}
                        mode="horizontal"
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="list">
							<Link to="/list">List</Link>
                        </Menu.Item>
                        <Menu.Item key="analytics">
							<Link to="/analytics">Analytics</Link>
                        </Menu.Item>
						
                      
                    </Menu>
                </Header>
                <Content style={{padding: '0 50px'}}>
					<Switch>
						<Route path={`${match.url}list`} breadcrumbName="list" component={Posts}/>
						<Route path={`${match.url}analytics`} breadcrumbName="Analytics" component={Gallery}/>
						
					</Switch>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                Collrella8 Test
                </Footer>
            </Layout>
        );
    }


export default Index;
