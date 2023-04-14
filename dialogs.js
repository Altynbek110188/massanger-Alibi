let currentUser = JSON.parse(localStorage.getItem("currentUser")) 
let h1 = document.querySelector("h1")
h1.innerHTML = currentUser.userName




async function drawUsers() {
    const users  = await makeQuery("users");

    const div = document.querySelector("div");
    div.innerHTML = "";

    for (let user of users) {

        div.innerHTML += `
            <p onclick = "openChat('${user._id}')"> ${user.userName} </p>
        `;
    }
}
drawUsers()

async function openChat(userId){
   
    let chat = await makeQuery("chats", "post", {
        fitstUserId: currentUser._id, 
        secondUserId:userId
    });
    localStorage.setItem("secondUserId", userId);
    localStorage.setItem("currentChatId", chat._id)
    location.href = "chat.html"

}