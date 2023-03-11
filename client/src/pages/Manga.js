import React ,{useEffect, useState }from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Col, Row, Input, Button, Form} from 'antd';
/* import { Favorite, Forward} from '@mui/icons-material';
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'


const Manga = () => {
    let { id } = useParams();

    const [manga, setManga] = useState([]);
    const [nbChap, setNbChap] = useState([]);
    const [nbPages, setNbPages] = useState([]);
    const [title, setTitle] = useState("");

    const navigate = useNavigate();
  
    useEffect(() => {
        axios.get(`http://localhost:3001/mangas/byId/${id}`).then((response) => {
          setManga(response.data);
          setTitle(response.data.title.toUpperCase());
          console.log(response.data);
          setNbChap(response.data.Chapters.length)
        });
      }, []);
    return (
    <div className="bg-teal-700/20"style={{width:'100vw', display:'flex',flexDirection:'column',alignItems:'center'}}>
      {/* background img */}
      <div className="mangaCarousel items-center flex flex-col justify-evenly">
      <div className="flex flex-row
    justify-between	
    w-4/5
    h-2/5">
      <div style={{}} className="colDesManga">
        <div style={{fontSize:'42px',fontFamily:'Times New Roman',color:'white',textShadow:'#000000 1px 1px 13px'}}>Nombre de chapitres :</div>
        <div style={{fontSize:'42px',fontFamily:'Times New Roman',color:'white',marginBottom:'90px',textShadow:'#000000 1px 1px 13px'}}>{nbChap}</div>

        <div style={{fontSize:'42px',fontFamily:'Times New Roman',color:'white',textShadow:'#000000 1px 1px 13px'}}>Nombre de pages :</div>
        <div style={{fontSize:'42px',fontFamily:'Times New Roman',color:'white',textShadow:'#000000 1px 1px 13px'}}>{nbPages}</div>
      </div>
      <div style={{}} className="colDesManga">
        <div style={{fontSize:'42px',fontFamily:'Times New Roman',color:'white',textShadow:'#000000 1px 1px 13px'}}><FontAwesomeIcon icon="fa-regular fa-heart" /> par :</div>
        <div style={{fontSize:'32px',fontFamily:'Times New Roman',color:'white',textShadow:'#000000 1px 1px 13px',marginBottom:'90px'}}>1194 lecteurs</div>
        <div style={{fontSize:'42px',fontFamily:'Times New Roman',color:'white',textShadow:'#000000 1px 1px 13px'}}>Rs</div>

      </div>
      </div>
      <div style={{height:'45%'}}className="containerMangaName justify-end p-4 w-3/5">
        <h1 className="max-h-[120px] overflow-hidden mangaCard w-4/5" style={{fontSize:'85px',fontFamily:'Times New Roman',}}>{title}</h1>
        <p className="overflow-hidden max-h-[150px] pb-2 w-4/5 text-justify" style={{color:'white',fontSize:'16px',}}>{manga.description}</p>
        <div 
          className='mt-4 bg-teal-700	 px-4 py-2 rounded-md	cursor-pointer	text-sm	 hover:bg-teal-600/80	'
          style={{position:'relative',}}
          onClick={() => navigate(`/CreateChapter/${id}`,)}
          type="primary" htmlType="submit">
          Ajouter un chapitre
        </div>
    </div>
    </div>
    
        </div>
        );
        
};
export default Manga;