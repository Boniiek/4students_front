import React,{useContext,useState} from "react";
import {Context} from "../index";
import ProfileIcon from "../images/profile.png"
import AddOrder from "../images/AddOrders.png"
import Modal from "./Modal";
import BtnSend from "../images/BtnSend.png"
import Coin from "../images/coin.png"

const NavigationBar =()=>{
    const {user} = useContext(Context)
    const [modalActive,setModalActive] = useState(false)
    const [profileActive,setProfileActive] = useState(false)
    const [balance,SetBalance]=useState(115)
    const [newBalance,SetNewBalance]=useState(0)

    const logOut =()=>{
        setProfileActive(false)
        user.setIsAuth(false)
    }

   return(
    <div className="Navbar">
        <div style={{padding:"50px"}}>
            <span className="firstPartOfName" style={{fontSize:"35px"}}>4S</span><span className="secondPartOfName" style={{fontSize:"35px"}}>tudents</span>
        </div>
        {!user.isAuth  ?
        <div style={{padding:"20px"}}>
            <button className="ButtonNavbar"> Вход</button>
            <button className="ButtonNavbar"> Регистрация</button>
        </div>
        :
        <div className="NavbarAuth">
            <button className="AddOrderBtn" onClick={()=>setModalActive(true)}><img className="AddOrderIcon" alt="img" src={AddOrder}/></button>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="secondPartOfName" style={{fontSize:"50px",color: "#364958bf",padding:"10px",display:"flex",justifyContent:"space-between"}}>
                    Добавить заказ
                    <div >
                        <input className="InputModalCoin"></input>
                        <img alt="icon" src={Coin} style={{flex:"0 0 auto"}}></img>
                    </div>
                </div>
                <div>
                    <input className="InputOrderTitle" placeholder="Название объявления..." type="text"></input>
                </div>
                <div>
                    <textarea className="InputOrderDescription" placeholder="Опишите ваше объявление"></textarea>
                </div>
                <div style={{display:"flex",justifyContent:"flex-end"}}>
                    <button className="ButtonSendOrder" onClick={()=>setModalActive(false)}>
                        <img className="SendOrderIcon" alt="img" src={BtnSend}></img>
                    </button>
                </div>
            </Modal>
            <button className="ProfileBtn" onClick={()=>setProfileActive(true)}><img className="ProfileIcon" alt="img" src={ProfileIcon}/></button>
            <div className={profileActive ? "modalProfile active" : "modalProfile"} onClick={()=>setProfileActive(false)}>
                <div className={profileActive ? "modalContentProfile active" : "modalContentProfile"} onClick={e=>e.stopPropagation()}>
                   <div>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <div className="nameProfileModal">@mafioznik</div>
                            <button style={{}} className="ProfileBtnModal" onClick={()=>setProfileActive(false)}><img className="ProfileIconModal" alt="img" src={ProfileIcon}/></button>
                        </div>
                        <div className="emailProfileModal">
                            Почта:
                        </div>
                        <div className="emailModal">
                            zubenko_m_p@mail.ru
                        </div>
                        <div className="emailProfileModal" style={{paddingTop:"10px",display:"flex"}}>
                            Баланс:
                            <div className="balanceProfileModal">
                                {balance} <img alt="icon" src={Coin} style={{height:"23px",}}></img>
                            </div>
                        </div>
                        <div style={{paddingLeft:"10px",paddingTop:"10px",display:"flex",padding:"10px"}}>
                            
                            <button className="balanceBtnModal" onClick={()=>SetBalance(+balance+ +newBalance)}>Пополнить</button>
                            <input className="balanceInputModal" value={newBalance} onChange={(e)=>SetNewBalance(e.target.value)} ></input>
                        </div>
                        <div style={{paddingLeft:"10px",paddingTop:"10px",display:"flex",padding:"10px"}}>
                            
                            <button className="balanceBtnModal" onClick={()=>SetBalance(+balance - +newBalance)}>Вывести</button>
                            <input className="balanceInputModal" value={newBalance} onChange={(e)=>SetNewBalance(e.target.value)} ></input>
                        </div>
                        <div style={{padding:"0 10px", width:"auto"}}>
                            <button className="logoutBtnProfileModal" onClick={()=>logOut()} >Выйти</button>
                        </div>
                   </div>
                </div>
            </div>
            
        </div>  
         }
        
        
    </div>
    
    );
}

export default NavigationBar;