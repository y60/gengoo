import {kanjis, LOAD_COUNT} from './config.js'

const initialState = {
    name: "",
    gengo:"平成",
    draft:"",
    gengos:[],
    hasMore: true,
}
  
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_NAME':{
            return Object.assign({},state,{name:action.payload.name})
        }
        case 'RECIEVE_GENGO':{
            return Object.assign({},state,{gengos:[action.payload.data].concat(state.gengos)})
        }
        case 'CHANGE_DRAFT':{
            const draft = action.payload.draft
            const newState = {draft:draft};
            if(draft.length==2
                &&kanjis.includes(draft[0])
                &&kanjis.includes(draft[1])){
                newState.gengo=draft
            }
            return Object.assign({}, state,newState)
        }
        case 'RECIEVE_OLD_GENGOS':{
            let data = action.payload.data
            let olds = data.map(doc=>Object.assign({key:doc.id},doc.data()))
            let hasMore = olds.length > LOAD_COUNT-2
            return Object.assign({},state,{hasMore:hasMore,gengos:state.gengos.concat(olds)})
        }
        case 'LEAK':
        case 'GENERATE':
        default:{
            const rand = Math.floor(Math.random() * kanjis.length * kanjis.length);
            const a = rand % kanjis.length;
            const b = (rand - a) / kanjis.length;
            const gengo =  kanjis[b]+kanjis[a]
            return Object.assign({},state,{ gengo :gengo, draft:gengo})
        }
    }
}