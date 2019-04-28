
export interface appPage {
    backgroundPic: string,
    music: string,
    options?: any[]
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
    optionSection?: option[],

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
    left, right, center, up, up_right
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