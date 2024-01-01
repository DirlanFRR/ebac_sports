import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  bookmarks: Produto[]
}

const initialState: FavoritosState = {
  bookmarks: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.bookmarks.find((p) => p.id === produto.id)) {
        const favoritosSemProduto = state.bookmarks.filter(
          (p) => p.id !== produto.id
        )
        state.bookmarks = favoritosSemProduto
      } else {
        state.bookmarks.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
