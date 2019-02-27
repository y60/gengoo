import firebase from 'firebase/app'
import 'firebase/database'
import { FIREBASE_CONFIG } from '../config';
firebase.initializeApp(FIREBASE_CONFIG);
const database = firebase.database();
const ref = database.ref('gengos')
ref.on('child_added', data => {
    console.log(data.val())
});

export const generate = () => {
    return { 
        type: 'GENERATE',
    };
}

export const changeName = (name) => {
    return { 
        type: 'CHANGE_NAME',
        payload: { name: name }
    };
}

export const leak = (name,gengo) => {
    var newPostRef = ref.push();
    newPostRef.set({
        name:name,
        gengo:gengo
    });
    return { 
        type: 'LEAK',
        payload: { name: name }
    };
}