import React,{useState} from "react";
import Image from "../images/image.png"
import Coin from "../images/coin.png"
import Modal from "./Modal";
import "../styles/Modal.css"
import Person from "./Person";
import Cross from "../images/BtnClose.png"
const Item =({order})=>{ // поля order вставить в нужнеы места и отрисуется все
    const [modalActive,setModalActive] = useState(false)
    const Status="improve";
    return(
        <div>
             <div className="itemBox" onClick={()=>setModalActive(true)}>
            
            <div style={{display:"flex",flexwrap: "wrap",height:"42px"}}>
                <div className="TypeItem" >course</div>
                <div className="TypeItem"style={{background:"#2eb87e66"}}>subject</div>
                <div className="WalletOrder">54 <img className="CoinImg" alt="penny" src={Coin}></img></div>
            </div>
            <div className="Title" >
                Скиньте лабу по ТОЭ тема МКТ киньте лабу по ТОЭ тема МКТ
            </div>
            <div className="Description">
                Согласно новым исследованиям, проведенным ведущими учеными, люди на самом деле видят не глазами, а волосами. Эта удивитель  Согласно новым исследованиям, проведенным ведущими учеными, люди на самом деле видят не глазами, а волосами. Эта удивитель 
            </div>
            <div className="Author">
                <span>@AntonioSanDiego 5</span> 
                
                <img className="star" src={Image} alt="Image"  /> 
            </div>
            
            
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
            <div style={{display:"flex",flexwrap: "wrap",height:"42px",paddingTop:"0px"}}>
                <div className="TypeItem" >course</div>
                <div className="TypeItem"style={{background:"#2eb87e66"}}>subject</div> 
                <button className="BtnCloseWindow"><img alt="close" src={Cross} onClick={()=>setModalActive(false)}></img></button>
                
            </div>
            <div style={{display:"flex"}}>
                <div className="TitleModal" style={{width:"400px"}} >
                Скиньте лабу по ТОЭ тема МКТ 
                </div>
                <div className="WalletOrder">54 <img className="CoinImg" alt="penny" src={Coin}></img></div>
            </div>
            
            <div className="Author">
                <span>@AntonioSanDiego 5</span> 
                
                <img className="star" src={Image} alt="Image"  /> 

            </div>
            <div className="DescriptionModal" style={{marginTop:"10px", display:"flex"}}>
                Согласно новым исследованиям, проведенным ведущими учеными, люди на самом деле видят не глазами, а волосами. Эта удивитель  Согласно новым исследованиям, проведенным ведущими учеными, люди на самом деле видят не глазами, а волосами. Эта удивитель 
            </div>
            {Status==="check"
            ?
            <button className="ButtonModal" onClick={()=>setModalActive(false)}>Откликнуться</button>
            :
            <></>
            }
            {Status==="improve" 
             ?
             <div>
                <div className="ModalResp">Отклики:</div>
                <Person/>
             </div>
             
            :
            <></>
            }
            
        </Modal>
        </div>
       
    )

}

export default Item;