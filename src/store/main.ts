interface stateType {
    ModalState: boolean
    isError: boolean
}

export const useMain = defineStore('main', {
    state: (): stateType => ({
        isError: false,
        ModalState: false,
    }),
    getters: {},
    actions: {
        async ModalChanger(state: boolean) {
            this.ModalState = state
            overFlow(state)
        },
    }

})