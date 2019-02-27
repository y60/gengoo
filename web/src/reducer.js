import {kanjis} from './config.js'

const initialState = {
    name: "",
    gengo:"平成"
}
  
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_NAME':{
            return Object.assign({},state,{name:action.payload.name})
        }
        case 'GENERATE':{
            const rand = Math.floor(Math.random() * kanjis.length * kanjis.length);
            const a = rand % kanjis.length;
            const b = (rand - a) / kanjis.length;
            return Object.assign({},state,{ gengo : kanjis[b]+kanjis[a] })
        }
        default:{
            return state
        }
    }
}