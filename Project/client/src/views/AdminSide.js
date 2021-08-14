import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export const AdminSide = (props) => {
    const {children}=props
    const link={"/product":" اضافة او حذف منج","/news/new":"اضافة او حذف خبر","talbat/":"الرئيسية"}

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
