import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import io from 'socket.io-client';

export const User = (props) => {
    const {children}=props
    const link={"/aboutus":"من نحن","/products":"منتجاتنا","/callus":" اتصل بنا"}

    return (
        <div>
            <Navbar LinkTo={link}/>
            {children}
            <Footer/>
        </div>
    )
}
