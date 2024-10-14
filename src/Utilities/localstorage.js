const getLsData = () =>{
    const cartDataStr = localStorage.getItem('cart')
    if(cartDataStr){
        return JSON.parse(cartDataStr)
    }
    return []
}

const addToLs = id =>{
    const cart = getLsData();
    cart.push(id)
    saveData(cart)

}


const saveData = cart =>{
    const cartStringfy = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringfy)
}

const removefromLs = id =>{
    const cart = getLsData()
    const remaining = cart.filter(idx => idx !== id)
    saveData(remaining)
}

export {getLsData , addToLs, removefromLs}