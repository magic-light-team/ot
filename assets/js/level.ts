import { IStage, SectionType, ILevel } from "./levelInterface";


let levels: ILevel[] = [
    {
        levelId: 1,
        levelName: "برادر بزرگتر من",
        stages: [
            {
                stageId: 1,
                sections: [
                    {
                        sectionId: 1,
                        sectionType: SectionType.dialog,
                        dialogueSection: {
                            person: "سپهر",
                            personPic: "",
                            dialogue: "سلام من سپهرم و برادر بزرگ ترم سینا مبتلا به اوتیسمه. مردم از من میپرسن که چه حسی داره برادرت اوتیسم داره؟ سخته؟ خسته کنندس؟چقدر فرق داره؟"
                        }
                    },
                    {
                        sectionId: 2,
                        sectionType: SectionType.choose,
                        optionSection: {
                            name: "من میگم:",
                            desc: "",
                            background: "",
                            options: [
                                {
                                    optionId: 1,
                                    title: "نه واقع",
                                    color: "",
                                    event: {
                                        nextStage: 2,
                                        score: 0
                                    }
                                },
                                {
                                    optionId: 2,
                                    title: "وحشتناکه",
                                    color: "",
                                    event: {
                                        nextStage: 2,
                                        score: 0
                                    }
                                },
                                {
                                    optionId: 3,
                                    title: "وحشتناکه",
                                    color: "مهم نیست برام",
                                    event: {
                                        nextStage: 2,
                                        score: 0
                                    }
                                }
                            ]
                        }
                    }
                ]
            }, // end section
            {
                stageId: 2,
                sections: [
                    {
                        sectionId: 1,
                        sectionType: SectionType.dialog,
                        dialogueSection: {
                            person: "سپهر",
                            personPic: "",
                            dialogue: "و میخندم. اره متفاوته به عنوان برادر بزرگ ترم نمی تونه پشتم رو داشته باشه و یا در مورد سلیقم تو انتخاب نامزدم گیر بده. نمی تونه موقعی که دارن منو تو کوچه کمک میزنن عین یه قهرمان بیاد و برادر کوچیکترش رو نجات بده."
                        }
                    },
                    {
                        sectionId: 2,
                        sectionType: SectionType.choose,
                        optionSection: {
                            name: "واقعیتش رو بخواین",
                            desc: "",
                            background: "",
                            options: [
                                {
                                    optionId: 1,
                                    title: "دوست داشتم اینجوی باشه",
                                    color: "",
                                    event: {
                                        nextStage: 3,
                                        score: 0
                                    }
                                },
                                {
                                    optionId: 2,
                                    title: "مهم نیست برام",
                                    color: "",
                                    event: {
                                        nextStage: 3,
                                        score: 0
                                    }
                                }
                            ]
                        }
                    }
                ]
            }, // end section
            {
                stageId: 3,
                sections: [
                    {
                        sectionId: 1,
                        sectionType: SectionType.dialog,
                        dialogueSection: {
                            person: "سپهر",
                            personPic: "",
                            dialogue: " ولی ما صمیمیت خاص خودمون رو داریم. سینا میفهمه که اون برادر بزرگ تر منه."
                        }

                    },
                    {
                        sectionId: 2,
                        sectionType: SectionType.choose,
                        optionSection: {
                            name: "بعضی وقت ها",
                            desc: "",
                            background: "",
                            options: [
                                {
                                    optionId: 1,
                                    title: "وسط راهرو با دستاش بهم تیر میزنه",
                                    color: "",
                                    event: {
                                        nextStage: 4,
                                        score: 0
                                    }
                                },
                                {
                                    optionId: 2,
                                    title: "یهو داد میزنه سپهر رو کوسه خورد",
                                    color: "",
                                    event: {
                                        nextStage: 4,
                                        score: 0
                                    }
                                },
                                {
                                    optionId: 3,
                                    title: "عمو یه دختر",
                                    color: "",
                                    event: {
                                        nextStage: 4,
                                        score: 0
                                    }
                                }
                            ]
                        }
                    }
                ]
            }, // end section
            {
                stageId: 4,
                sections: [
                    {
                        sectionId: 1,
                        sectionType: SectionType.dialog,
                        dialogueSection: {
                            person: "سپهر",
                            personPic: "",
                            dialogue: " ولی ما صمیمیت خاص خودمون رو داریم. سینا میفهمه که اون برادر بزرگ تر منه.میدونه چکار کنه که بهش توجه کنم. و بعضی مواقع منو با تمام زورش بقل می کنه. عین خیلی از برادر خواهرا رو مخ هم میریم و باهام کشتی میگیره که حق با کیه."
                        }

                    },
                    {
                        sectionId: 2,
                        sectionType: SectionType.choose,
                        optionSection: {
                            name: "من",
                            desc: "",
                            background: "",
                            options: [
                                {
                                    optionId: 1,
                                    title: "با تمام وجود از برادرم محافظت می کنم",
                                    color: "",
                                    event: {
                                        nextStage: 5,
                                        score: 0
                                    }
                                },
                                {
                                    optionId: 2,
                                    title: "صمیمانه ترین رابطه رو باهاش دارم",
                                    color: "",
                                    event: {
                                        nextStage: 5,
                                        score: 0
                                    }
                                },
                                {
                                    optionId: 3,
                                    title: "همیشه اذیتش می کنم",
                                    color: "",
                                    event: {
                                        nextStage: 5,
                                        score: 0
                                    }
                                }
                            ]
                        }
                    }
                ]
            }, // end section
            {
                stageId: 5,
                sections: [
                    {
                        sectionId: 1,
                        sectionType: SectionType.dialog,
                        dialogueSection: {
                            person: "سپهر",
                            personPic: "",
                            dialogue: "ولی در اخر روز اون برادر منه"
                        }

                    },
                    {
                        sectionId: 2,
                        sectionType: SectionType.choose,
                        optionSection: {
                            name: "بریم",
                            desc: "",
                            background: "",
                            options: [
                                {
                                    optionId: 1,
                                    title: "خونه بازی کنیم",
                                    color: "",
                                    event: {
                                        nextStage: 6,
                                        score: 0
                                    }
                                },
                                {
                                    optionId: 2,
                                    title: "پارک قدم بزنیم",
                                    color: "",
                                    event: {
                                        nextStage: 6,
                                        score: 0
                                    }
                                },
                                {
                                    optionId: 3,
                                    title: "بریم بیرون غذا بخوریم",
                                    color: "",
                                    event: {
                                        nextStage: 6,
                                        score: 0
                                    }
                                },
                                {
                                    optionId: 4,
                                    title: "لب ساحل لذت ببریم",
                                    color: "",
                                    event: {
                                        nextStage: 6,
                                        score: 0
                                    }
                                }
                            ]
                        }
                    }
                ]
            }, // end section











        ]
    }
]


/////////////////////////////////////////////////////////
/*
let testLevel: ILevel = {
    levelId: 0,
    levelName: "",
    stages: []
}

let testStage: IStage[] = [
    {
        stageId: 1,
        sections: [
            {
                sectionId: 1,
                sectionType: SectionType.dialog,
                dialogueSection: {
                    person: "سپهر",
                    personPic: "",
                    dialogue: "سلام من سپهرم و برادر بزرگ ترم سینا مبتلا به اوتیسمه. مردم از من میپرسن که چه حسی داره برادرت اوتیسم داره؟ سخته؟ خسته کنندس؟چقدر فرق داره؟"
                }

            },
            {
                sectionId: 2,
                sectionType: SectionType.choose,
                optionSection: {
                    name: "من میگم:",
                    desc: "",
                    background: "",
                    options: []
                }
            }
        ]
    }
]

//*/