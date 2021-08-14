import NewsForm from '../components/NewsForm';
import { Link } from '@reach/router'
import { Button, Card, TextField } from '@material-ui/core';
import axios from 'axios';
export const AdminNews = (props) => {
    const { news, setNews } = props
    const style = {
        main: {

        },
        submain: {
            display: "flex"
        },
        product: {
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            margin: "10px",
            width: "1260px",
            height: "auto"
        },
        product1: {

            height: "200px",
            width: "200px",
            marginLeft: "20px",
            marginBottom: "120px",
            marginTop: "10px"




        },
        product1img: {
            width: "200px",
            height: "200px",
            padding: "1px",
            border: "black",
            border: "5px solid #555",

        },
        FilterBar: {
            width: "180px",
            height: "auto",
            margin: "20px",


        }
    }
    const deleteProduct = (id) => {
        console.log(id)
        axios.delete('http://localhost:8000/api/news/' + id)
            .then(res => {
              
                console.log("done")
                setNews(news.filter(product => product._id !== id));
            })

    }
    function formdate(date) {
        var date1 = new Date(date),
            month = '' + (date1.getMonth() + 1),
            day = '' + date1.getDate(),
            year = date1.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }
    return (
        <div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "1500px" }}>
                    <NewsForm newsa={news} setNews={setNews} />
                </div>
                <div style={style.product}>
                    {news.map((info, idx) => {
                        return (

                            <div style={style.product1} key={idx}>
                                


                                <Link to={"/news/" + info._id}> {info.title}</Link>
                                <p>{formdate(info.createdAt)}</p>
                    
                                <Button style={{ backgroundColor: "#6d0909" }} variant="contained" color="primary" type="submit" onClick={() => { deleteProduct(info._id) }} >{"حذف الخبر"}</Button>


                            </div>
               )})}
                    
                </div>
            </div>
            </div>
                  )
        }
