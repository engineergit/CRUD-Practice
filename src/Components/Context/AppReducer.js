export default (state,action)=>{
    switch(action.type){
        case 'REMOVE_USER':
            return {
                users:state.users.filter(user=>{
                   return user.id!==action.payload
                })
        }
        case 'Add_USER':
            return {
                users:[action.payload,...state.users] 
                    }
        case 'EDIT_USER':
            return{
              
            }
            case 'UPDATE_USER':
                return {
                    users:[...action.payload]
                }
        default:
            return state;
    }
}