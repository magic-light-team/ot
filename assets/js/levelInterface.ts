export interface ILevel {
    stages: IStage[];
}

export interface IStage {
    stageId: number;
    sections: ISection[];
}

export interface ISection {
    sectionType: SectionType,

}

export enum SectionType {
    dialog,
    choose
}

export interface ISectionDialogue {
    person: string;
    personPic: string;
    dialogue: string;
}

export interface ISectionOption {
    // stageId: number,
    level: number,
    section: number,
    name: string,
    desc: string,
    background: string,
    options: IOption[],

    setGameTime?: number,
}

export interface IOption {
    optionId: number,
    title: string,
    color: string,
    event: IEvent
}

export interface IEvent {
    nextStage: number,
    addedTime: number,
    addedEnergy: number,
    score: number,

    needOptions?: INeedOption[],
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