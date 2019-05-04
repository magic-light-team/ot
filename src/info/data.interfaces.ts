
export interface appPage {
    backgroundPic: string,
    pageTitle:string,
    music: string,
    pageButtons?: pageButton[]
}

export interface pageButton{
    id:string,
    title:string,
    page:string,
    clickHandle?:Function,
    color?:string
}

export interface level {
    levelId: number,
    levelName: string,
    levelPic: string,
    backgroundMusic: string,
    stages: stage[]
}

export interface stage {
    stageId: number,
    backgroundPic?: string,

    stageType: StageType,
    //dialogSection?:any,
    optionsSection?: option[],

    // dialog
    person?: string,
    personPic?: string
    dialogType?: DialogType,
    dialog?: string,
    nextDialogId?: number
}

export enum StageType {
    Intro, Dialog, Question, Score
}

// export interface dialogDesc{
//     person?:string,
//     personPic?:string
//     dialogType?:DialogType,
//     dialog?:string
// }

export enum DialogType {
    left="left", right="right", center="center", up="up", up_right="up_right"
}

export interface option {
    optionId: number,
    title: string,
    color?: string,
    score: number,
    nextDialogId?: number,
    // change background
    backgroundPic?:string
}