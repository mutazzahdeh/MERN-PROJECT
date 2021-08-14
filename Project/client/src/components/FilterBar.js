import { ButtonGroup } from '@material-ui/core';
import Button from "./Button"

export const FilterBar = (props) => {
    const {products,setProducts,showProduct, setShowproduct} =props
    const catagorys =["احجيات","العاب خشبية", "أثاث", "طاولات","ألواح", "زينة ميلاد"];
   const style={
        backgroundColor: "#6d0909",
        border: "none",
        color: "white",
        width:"150px",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",}
    
    const Filter=(catagory)=>{
        
        if (catagory==="all product")
        {
            setShowproduct(products)
        }
        else{
        var pro=[]
        pro=products.filter(product => product.category === catagory)
        setShowproduct(pro)}
     }
    
    return (
        <div >
           
             <button style={style} dir="rtl" type="button" onClick={() => Filter("all product")}>جمبع المنتجات</button>
             <br/>
            {
        catagorys.map( (item, i) =>{return(
        <>
        <Button style={style} dir="rtl" onclickHandler={() => Filter(item)}  text={item}/>
        <br/>
        </>

        )})}
        
        </div>
    )
}
