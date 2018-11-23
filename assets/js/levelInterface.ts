export interface ILevel {
    levelId: number;
    levelName: string;
    stages: IStage[];
}

export interface IStage {
    stageId: number;
    sections: ISection[];
}

export interface ISection {
    sectionId: number;
    sectionType: SectionType;
    dialogueSection?: ISectionDialogue;
    optionSection?: ISectionOption;
}

export enum SectionType {
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
    nextDialogueId?: number

    //setGameTime?: number,
}

export interface IOption {
    optionId: number,
    title: string,
    color: string,
    score: number,
    needOptions?: INeedOption[]
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