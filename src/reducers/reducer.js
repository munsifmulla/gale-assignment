import { Data } from '../assets';
import cloneDeep from 'lodash/cloneDeep'

const InitialProducts = [...Data.products]

export default function (state = InitialProducts, action) {

  switch (action.type) {
    case 'increase':
      var prodI = cloneDeep(state)
      var p = prodI.map(item => {
        if (item.id === action.payload) {
          item.qty = item.qty + 1;
          return item;
        } else {
          return item
        }
      })
      state = [...p];
      break;

    case 'decrease':
      var prodI = cloneDeep(state)
      var p = prodI.map(item => {
        if (item.id === action.payload) {
          if (item.qty > 0) {
            item.qty = item.qty - 1;
          }
          return item;
        } else {
          return item
        }
      })
      state = [...p]
      break;

    case 'delete':
      var prodI = cloneDeep(state),
        idP;
      console.log(action.payload)
      prodI.map((item, id) => {
        if (item.id === action.payload) {
          idP = id;
        }
      })
      prodI.splice(idP, 1)
      state = [...prodI]
      break;

  }
  return state
}