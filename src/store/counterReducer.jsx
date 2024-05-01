const initialState = {
    count:0
}
 const arttır = "ARTTIR"
 const azalt = "AZALT"
 const sil = "SİL"

export const arttırma = ()=>({type:arttır})
export const azaltma = ()=> ({type:azalt})
export const silme = ()=> ({type:sil})


export const counterReducer = (state=initialState, action)=> {
switch (action.type) {
    case arttır :
        return {count:state.count + 1}
    case azalt :
        return {count:state.count - 1}
    case sil:
        return {count:0}
    default:
        return state
}
}