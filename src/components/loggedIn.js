function loogedIn (){

}

function requireAuth(nextState, replace){
    if(!loggedIn()){
        replace({
            pathname: '/menu.js'
        })
    }
}
function routes(){
    return(
        <Route path = "/" component {App}>
        <Route path = "loggedIn" component {loggedIn}/>
        <Route path = "menu" component {menu} onEnter={requireAuth}/>
        </Route>
    )
}