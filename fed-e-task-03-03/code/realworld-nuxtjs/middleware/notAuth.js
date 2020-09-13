export default ({store, redirect}) => {
    // 已登录状态不允许访问
    if(store.state.user){
      return redirect('./login')
    }
}