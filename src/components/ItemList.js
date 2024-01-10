import React, {useContext} from 'react';

import {Context} from "../index";
import Item from "./Item";

const ItemList =()=>{
    const {order} = useContext(Context)

    return(
        <Item/>
        
    )
}

export default ItemList;