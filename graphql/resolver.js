import {getChatLog, addChat, deleteChat} from './db/chat_db'
import { getUserInfo, signIn, signUp } from './db/user_db'

const resolvers={
    Query: {
        chatLog: () => getChatLog(),
        userInfo: (_, {id}) => getUserInfo(id)
    },

    Mutation: {
        addChat: (_, {userid, username, message}) => addChat(userid, username, message),
        deleteChat: (_, {id}) => deleteChat(id),

        signUp: (_, {id, password, name, gender, age, address}) => signUp(id, password, name, gender, age, address),
        signIn: (_,{id, password}) => signIn(id, password)
    },

    Subscription: {
        newChat:{
            subscribe: ()=>{
                pubsub.asyncIterator(NEW_CHAT);
            }
        }
    }
}

export default resolvers