import {createSelector} from 'reselect';

const shopSelector = state => state.shop;

export const selectShopItems = createSelector(
  [shopSelector],
  shop => shop.shopItems
);
