let users = {
    bot:{
        id:'bot',
        password:'bot',
        name:'bot',
        gender: 'bot',
        age: 0,
        address:'bot',
        myRooms:[]
    },
}

export function getUserInfo(id){
    if(!users[id]){
        throw Error('해당 회원이 존재하지 않음');
    }
    return users[id];
}

export function getMyRooms(id){
    if(!users[id]){
        throw Error('해당 회원이 존재하지 않음');
    }
    return users[id].myRooms;
}

export function signUp(id, password, name, gender, age, address){
    if(id.length<=0){
        throw Error('유효하지 않은 ID값')
    }
    else if(users[id]){
        throw Error('해당 ID가 이미 존재함')
    }else{
        const newUserInfo = {
            id, password, name, gender, age, address
        }
        users[id] = newUserInfo;
        return true;
    }
}

export function signIn(id, password){
    if(!users[id]){
        throw Error('ID가 존재하지 않음');
    }
    else if(users[id].password !== password){
        throw Error('비밀번호가 일치하지 않음')
    }
    else{
        return true;
    }
}