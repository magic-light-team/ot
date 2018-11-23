export interface ILevel {
    levelId: number;
    levelName: string;
    levelPic:string;
    stages: IStage[];
}


export interface IStage {
    stageId: number;
    stageType: StageType;
    dialogueSection?: ISectionDialogue;
    optionSection?: ISectionOption;
}

export enum StageType {
    dialog,
    choose
}

export interface ISectionDialogue {
    person: string;
    personPic: string;
    dialogue: string;
    nextDialogueId?: number
}

export interface ISectionOption {
    // stageId: number,
    header: string,
    desc: string,
    background: string,
    options: IOption[],

    //setGameTime?: number,
}

export interface IOption {
    optionId: number,
    title: string,
    color: string,
    score: number,
    needOptions?: INeedOption[]
    nextDialogueId?: number
}


export interface INeedOption {
    stageId: number,
    optionId: number,
    message?: string
}

export interface IAchievment {
    achievmentId: number,
    chooses: IChoose[],
    name: string,
    pic?: string,
    desc?: string,
    rebuild?: boolean
}

export interface IChoose {
    stageId: number,
    optionId: number
}