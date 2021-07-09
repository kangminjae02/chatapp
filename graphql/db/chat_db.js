let Rooms = [
    {
        id:0,
        title:"bot",
        users:["bot", "123"],
        chatLog:[
            {
                id: 0,
                userid: "bot",
                username: "bot",
                message: "채팅이 시작되었습니다"
            }
        ]
    }
]
export function getChatRoom(id){

}
let chatLog = [
    {
        id: 0,
        userid: "bot",
        username: "bot",
        message: "채팅이 시작되었습니다"
    }
]

export function getChatLog(){
    return chatLog;
}

export function addChat(userid, username, message){
    const newChat = {
        id: chatLog.length,
        userid,
        username,
        message
    }
    chatLog.push(newChat);
    return newChat;
}

export function deleteChat(id){
    const cleanedChatLog = chatLog.filter(chat => chat.id !== id);
    if(cleanedChatLog < chatLog){
        chatLog = cleanedChatLog;
        return true;
    }
    else{
        return false;
    }
}