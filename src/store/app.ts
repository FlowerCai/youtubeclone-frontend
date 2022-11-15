import type { User } from '@/api/user'
import { defineStore } from 'pinia'

export interface State {
  count: number
  user: User | null
}
export const useAppStore = defineStore('app', {
  state: (): State => {
    return {
      count: 123,
      user: null
    }
  },
  persist: true,
  actions: {
    setUser(user: User) {
      this.user = user
    }
  }
})
