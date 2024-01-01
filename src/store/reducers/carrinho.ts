import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[] // Adicione a propriedade favoritos ao tipo CarrinhoState
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: [] // Inicialize favoritos como um array vazio
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    },

    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      const produtoExistente = state.favoritos.find((p) => p.id === produto.id)

      if (produtoExistente) {
        // Se o produto já estiver nos favoritos, remova-o
        state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
      } else {
        // Se o produto não estiver nos favoritos, adicione-o
        state.favoritos.push(produto)
      }
    }
  }
})

export const { adicionar, favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
