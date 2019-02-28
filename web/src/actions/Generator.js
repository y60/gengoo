import {ref} from './../config.js'
import firebase from 'firebase/app'
import 'firebase/firestore'

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

export const changeDraft = (draft) => {
    return { 
        type: 'CHANGE_DRAFT',
        payload: { draft: draft }
    };
}

export const leak = (name,gengo) => {
    ref.add({
        name:name,
        gengo:gengo,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    return { 
        type: 'LEAK',
        payload: { name: name }
    };
}