import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
