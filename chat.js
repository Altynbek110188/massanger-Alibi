let h2 = document.querySelector("h2")
let massages = document.querySelector("massages")


async function showUserName() {
    const secondUserId  = localStorage.getItem("secondUserId");
    const userInfo  = await makeQuery("users/"+secondUserId);
    h2.innerHTML = userInfo.userName

   

  

}
showUserName()