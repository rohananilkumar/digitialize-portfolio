import {createSlice, configureStore} from '@reduxjs/toolkit';


const initialState = {
    reviews:[],
    portfolios:[],
    ordering:{},
    orderingCustom:{},
    workWithUs:{},
    order:{},
    customOrder:{},
    orderCount:0,
    customOrderCount:0
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
        loadOrderCount(state, action){
            const orderCount = localStorage.getItem('orderCount');
            if(orderCount){
                state.orderCount = orderCount;
            }
        },
        loadOrdering(state){
            const order = localStorage.getItem('ordering');
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
            localStorage.setItem('ordering', action.payload)
        },
        addOrder(state, action){
            state.order = action.payload;
            const prev=localStorage.getItem('orderCount');
            if(prev){
                
                localStorage.setItem('orderCount',parseInt(prev)+1)
            }else{
                localStorage.setItem('orderCount',1);
            }
            console.log(action.payload);
            //Implement
        },
        addCustomOrder(state, action){
            state.orderingCustom = action.payload;
            console.log(action.payload);

            const prev=localStorage.getItem('orderCount');
            if(prev){
                localStorage.setItem('orderCount', parseInt(prev)+1)
            }else{
                localStorage.setItem('orderCount',1);
            }
        },
    }
});


const store = configureStore({
    reducer: portfolioSlice.reducer
});

export const portfolioActions = portfolioSlice.actions;

export default store;