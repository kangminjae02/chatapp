let roomsID = 0;
let rooms = {
    0:{
        id:0,
        users:["bot", "123"],
        chatLog:[]
    }
}
//객체의 배열.length 로 id를 부여하게 되면 삭제된 방에 의해 id가 겹칠 수 있다
export function getChatRoom(id){
    const room = rooms[id];
    if(!room){
        throw Error('그런 방 아닙니다');
    }
    return room
}

export function createRoom(users){
    const newRoom = {
        id:roomsID,
        users,
        chatLog:[]
    }
    rooms[roomsID]=newRoom;
    console.log(rooms[roomsID]);
    roomsID+=1;
    return rooms[roomsID-1];
}

export function getChatLog(id){
    const room = rooms[id];
    const chatLog = room.chatLog;
    return chatLog;
}

export function addChat(roomid, userid, username, message){
    const chatLog = rooms[roomid].chatLog;
    const newChat = {
        id: chatLog.length,
        userid,
        username,
        message
    }
    chatLog.push(newChat);
    return newChat;
}

export function deleteChat(roomid, chatid){//채팅 배열을 링크드 리스트로 바꾸면 비용 절감
    const chatLog = rooms[roomid].chatLog;
    const cleanedChatLog = chatLog.filter(chat => chat.id !== chatid);
    if(cleanedChatLog < chatLog){
        chatLog = cleanedChatLog;
        return true;
    }
    else{
        return false;
    }
}