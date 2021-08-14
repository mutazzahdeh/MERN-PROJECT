import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export const AdminSide = (props) => {
    const {children}=props
    const link={"/product":" اضافة او حذف منج","/news/new":"اضافة او حذف خبر","talbat/":" اتصل بنا"}

    return (
        <div>
            <Navbar LinkTo={link}/>
            {children}
            <p>Counter</p>
            <Footer/>
            
        </div>
    )
}
