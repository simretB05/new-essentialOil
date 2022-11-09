import { useReducer } from "react";
import SliderContextData from './sliderContext'


const defaultState = {
  next: (item) => { },
  previous:(id)=>{}
};
const sliderReducer = (state, action) => {
  
};
const sliderProvider = (props) => {
  
  const [sliderState, dispatchSliderAction] = useReducer(sliderReducer,defaultState);

  const nextSlideHandler = (next) => {
    dispatchSliderAction({ type: 'ADD', item: next });
  };

  const previousSliderHandler = (previous) => {
    dispatchSliderAction({ type: 'REMOVE', id: previous});
  };
  const SliderContext = {
    
  next: (item) => { },
  previous:(id)=>{}
    
  };

  return <SliderContextData.Provider value={SliderContext}>
          {props.children}
  </SliderContextData.Provider>
  
}

export default sliderProvider