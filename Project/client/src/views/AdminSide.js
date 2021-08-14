import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export const AdminSide = (props) => {
    const {children}=props
    const link={"/admin/products":" اضافة او حذف منج","/admin/news":"اضافة او حذف خبر","/":"الرئيسية"}

    return (
        <div>
            <div>
            <Navbar LinkTo={link}/>
            </div>
            <div style={{margin:"10px"}}>
            {children}
            </div>
            <div>
            <Footer/>
            </div>
        </div>
    )
}
