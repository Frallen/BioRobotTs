interface stateType {
    ModalState: boolean
    isError: boolean
    isProd:boolean
}

export const useMain = defineStore('main', {
    state: (): stateType => ({
        isError: false,
        ModalState: false,
        isProd:import.meta.env.PROD
    }),
    getters: {
        svgResolved(state){
            return (query:string)=>state.isProd?`/assets/spritemap.svg#${query}`:`__spritemap#${query}`
        }
    },
    actions: {
        async ModalChanger(state: boolean) {
            this.ModalState = state
            overFlow(state)
        },
    }

})