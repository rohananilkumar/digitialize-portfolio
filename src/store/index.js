import {createSlice, configureStore} from '@reduxjs/toolkit';


const initialState = {
    reviews:[],
    portfolios:[],
    ordering:{},
    orderingCustom:{},
    workWithUs:{},
    order:{},
    customOrder:{},
};

const portfolioSlice = createSlice({
    name:'portfolio',
    initialState,
    reducers:{
        setPortfolios(state,action){
            state.portfolios = action.payload;
        },
        addPortfolio(state, action){
            state.portfolios.push(action.payload);
        },
        addReview(state, action){
            state.reviews.push(action.payload);
        },
        workWithUs(state,action){
            state.workWithUs=action.payload;
            localStorage.setItem('workWithUs', true);
        },
        loadOrder(state){
            const order = localStorage.getItem('order');
            const customOrder = localStorage.getItem('orderCustom');
            if(order){
                state.ordering = order;
            }
            if(customOrder){
                state.orderingCustom =  state.portfolios.find(portfolio=> portfolio.id === customOrder);
            }
        },
        addOrdering(state, action){
            state.ordering = action.payload;
            localStorage.setItem('ordering',action.payload);

            console.log(action.payload);
        },
        addOrder(state, action){
            state.order = action.payload;
            localStorage.setItem('order',action.payload);
            //Implement
        },
        addCustomOrder(state, action){
            state.orderingCustom = action.payload;
            console.log(action.payload);
            localStorage.setItem('orderCustom',action.payload)
        },
    }
});


const store = configureStore({
    reducer: portfolioSlice.reducer
});

export const portfolioActions = portfolioSlice.actions;

export default store;