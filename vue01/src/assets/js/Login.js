
export  default {
  loginOrNot(){
  let arr= JSON.parse(window.localStorage.login);
    for (let i in arr) {
      // if(arr[i].username=='abc'&&arr[i].password==123){
      //   return true
      // }else{
        return false
      // }
    }
  }
}
