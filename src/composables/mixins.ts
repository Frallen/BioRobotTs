export const overFlow = (state: boolean): void => {

    if (state) {
        document.body.style.overflowY = "hidden";
    } else document.body.style.overflowY = "visible";

};