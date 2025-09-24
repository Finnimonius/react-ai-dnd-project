import { Layout } from 'antd'
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const contentStyle = {
  textAlign: 'center',
  backgroundColor: '#0958d9',
};

// const footerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   backgroundColor: '#4096ff',
// };
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
};

export default function AppLayout() {
    return (
        <Layout style={layoutStyle}>
            <AppHeader>Header</AppHeader>
            <Layout.Content style={contentStyle}>Content</Layout.Content>
            <AppFooter />
        </Layout>
    )
}