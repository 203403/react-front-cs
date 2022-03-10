import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import { Link } from "react-router-dom";

export default function NavBar() {

    const remover_local = () => {
        localStorage.removeItem('id_user')
        localStorage.removeItem('token')
    }
    
    return (
        <div>
            <AppBar>
                <Tabs>
                    <Tab
                        component={Link}
                        to='/Login'
                        onClick={remover_local}
                        label={<span style={{ color: 'white' }}>Login</span>} />
                    <Tab
                        component={Link}
                        to='/Register'
                        onClick={remover_local}
                        label={<span style={{ color: 'white' }}>Register</span>} />
                </Tabs>
            </AppBar>
        </div>
    )
}

