import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../components/products/Products";
import { loadLimitedProducts, loadProducts } from "./productsAction";

// типизируем объект с хранилищем данных по продуктам
interface IProductsState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}

//  начальное состояние для данных, которые будет хранить state менеджер redux
const initialState: IProductsState = {
  // сами данные
  products: [],
  // индикатор загрузки
  isLoading: false,
  // возможная информация об ошибках
  error: "",
};

export const ProductsSlice = createSlice({
        name: "productsSlice",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
          builder
            .addCase(loadProducts.pending, (state) => {
              state.isLoading = true;
            })
            .addCase(loadProducts.fulfilled, (state, action) => {
              state.isLoading = false;
              state.products = action.payload;
            })
            .addCase(loadProducts.rejected, (state, action) => {
              state.isLoading = false;
              state.products = [];
              state.error = action.payload as string;
            })
            // для лимита 
            .addCase(loadLimitedProducts.pending, (state) => {
              state.isLoading = true;
            })
            .addCase(loadLimitedProducts.fulfilled, (state, action) => {
              state.isLoading = false;
              state.products = action.payload;
            })
            .addCase(loadLimitedProducts.rejected, (state, action) => {
              state.isLoading = false;
              state.products = [];
              state.error = action.payload as string;
            });
        },
      });

export default ProductsSlice;
// export const { } = ProductsSlice.actions
