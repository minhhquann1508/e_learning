import React, { useEffect, useState } from 'react'
import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CHANG_ADMIN_TAB } from '../../redux/types/Admin';
import { Dashboard } from './Dashboard';
import { UserTab } from './UserTab';
import { CourseTab } from './CourseTab';
import { AddCourse } from './AddCourse';
const { Content, Footer, Sider } = Layout;

export default function Admin() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: CHANG_ADMIN_TAB,
            selectedTab: 'dashboard'
        })
    }, [])
    const { selectedTab } = useSelector(state => state.AdminTabReducer)
    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
            onClick: (key) => {
                dispatch({
                    type: CHANG_ADMIN_TAB,
                    selectedTab: key.key
                })
            }
        };
    }
    const items = [
        getItem('Dashboard', 'dashboard', <PieChartOutlined />),
        getItem('Quản lý người dùng', 'user', <FileOutlined />),
        getItem('Quản lý khóa học', '', <UserOutlined />, [
            getItem('Thêm khóa học', 'add-course'),
            getItem('FrontEnd', 'FrontEnd'),
            getItem('BackEnd', 'BackEnd'),
            getItem('Design', 'Design'),
            getItem('Tư duy lập trình', 'TuDuy'),
            getItem('FullStack', 'FullStack'),
        ]),
    ];
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    //render nội dung theo tab
    const renderContent = () => {
        switch (selectedTab) {
            case 'dashboard': {
                return (
                    <Dashboard />
                )
            }
            case 'user': {
                return (
                    <UserTab />
                )
            }
            case 'add-course': {
                return (
                    <AddCourse />
                )
            }
            default: {
                return (
                    <CourseTab content={selectedTab} />
                )
            }
        }
    }
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys='dashboard' mode="inline" items={items} />
            </Sider>
            <Layout>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        {renderContent()}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}
