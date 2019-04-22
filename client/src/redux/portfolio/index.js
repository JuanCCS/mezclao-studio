
const DATA_ARRIVED_FROM_SERVER = 'mezclao/portfolio/DATA_ARRIVED'
const CATEGORY_SELECTED = 'mezclao/portfolio/CATEGORY_SELECTED'
const CLIENT_SELECTED = 'mezclao/portfolio/CLIENT_SELECTED'
const NEXT_CLIENT = 'mezclao/portfolio/NEXT_CLIENT'
const PREV_CLIENT = 'mezclao/portfolio/PREV_CLIENT'

const initialState = {
    portfolioJson : {
        categories: []
    },
    selectedCategory: {},
    selectedClient: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DATA_ARRIVED_FROM_SERVER: 
            return {...state, 
                portfolioJson: action.payload
            }

        case CATEGORY_SELECTED: 
            return {
                ...state,
                selectedCategory: action.payload
            }
        
        case CLIENT_SELECTED: 
            return {
                ...state,
                selectedClient: state.portfolioJson[action.payload]
            }

        case NEXT_CLIENT: {
            const clientArray = state.portfolioJson[state.selectedCategory.name].clients
            const currentIndex = clientArray.indexOf(state.selectedClient.name)
            let nextIndex = (currentIndex + 1 ) % clientArray.length
        
            return {
                ...state,
                selectedClient: state.portfolioJson[clientArray[nextIndex]]
            }
        }
            
        case PREV_CLIENT: 
            const clientArray = state.portfolioJson[state.selectedCategory.name].clients
            const currentIndex = clientArray.indexOf(state.selectedClient.name)
            let nextIndex = 0
            if(currentIndex != 0){
                let nextIndex = (currentIndex -1 ) % clientArray.length
            }else{
                nextIndex = clientArray.length - 1
            }
            return {
                ...state,
                selectedClient: state.portfolioJson[clientArray[nextIndex]]
            }

        default:
            return state;
    }
};

export const serverDataArrived = payload => ({
    type: DATA_ARRIVED_FROM_SERVER,
    payload
})

export const clientsSelected = payload => ({
    type: CATEGORY_SELECTED,
    payload
})

export const nextClient = payload => ({
    type: NEXT_CLIENT,
    payload
})

export const prevClient = payload => ({
    type: PREV_CLIENT,
    payload
})

export const clientSelected = payload => ({
    type: CLIENT_SELECTED,
    payload
})