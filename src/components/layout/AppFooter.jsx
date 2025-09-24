import { Layout } from 'antd'

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'black',
};

export default function AppFooter () {
    return (
        <Layout.Footer style={footerStyle}>
            <div>Footer</div>
        </Layout.Footer>
    )
}