import {getChatLog, addChat, deleteChat, createRoom, getChatRoom} from './db/chat_db'
import { getUserInfo, signIn, signUp } from './db/user_db'

const resolvers={
    Query: {
        chatLog: (_,{id}) => getChatLog(id),
        userInfo: (_, {id}) => getUserInfo(id),

        getChatRoom: (_, {id}) => getChatRoom(id),
        getChatLog: (_,{id}) => getChatLog(id)
    },

    Mutation: {
        createRoom: (_, {users}) => createRoom(users),
        addChat: (_, {roomid, userid, username, message}) => addChat(roomid, userid, username, message),
        deleteChat: (_, {roomid, chatid}) => deleteChat(roomid, chatid),

        signUp: (_, {id, password, name, gender, age, address}) => signUp(id, password, name, gender, age, address),
        signIn: (_,{id, password}) => signIn(id, password)
    },
}

export default resolvers