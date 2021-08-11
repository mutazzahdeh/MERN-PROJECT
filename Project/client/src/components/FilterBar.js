import { ButtonGroup } from '@material-ui/core';

export const FilterBar = (props) => {
    const {products,setProducts,showProduct, product} =props
    const catagorys =["itemA","itemE", "itemC", "itemD","itemM", "itemB", "itemS"]
    return (
        <div>
            <ButtonGroup children={"adsadsda"}	></ButtonGroup>
            {
           catagorys.map((catagory, idx)=>{return (
                        <div className="orb">
                            
                            </div>

                    )})}
                  
        </div>
    )
}
