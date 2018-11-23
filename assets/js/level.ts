import { ILevel } from "./levelInterface";

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
                        //sectionType: 0,
                        sectionType: 0,
                        dialogueSection: {
                            person: "سپهر",
                            personPic: "",
                            dialogue: "سلام من سپهرم و برادر بزرگ ترم سینا مبتلا به اوتیسمه. مردم از من میپرسن که چه حسی داره برادرت اوتیسم داره؟ سخته؟ خسته کنندس؟چقدر فرق داره؟"
                        }
                    },
                    {
                        sectionId: 2,
                        //sectionType: 1,
                        sectionType: 1,
                        optionSection: {
                            header: "",
                            desc: "چه حسی داره برادرت اوتیسم داره؟ سخته؟ خسته کنندس؟چقدر فرق داره؟                            ",
                            background: "",
                            options: [
                                {
                                    optionId: 1,
                                    title: "نه واقع",
                                    color: "",
                                    score: 0,
                                },
                                {
                                    optionId: 2,
                                    title: "وحشتناکه",
                                    color: "",
                                    score: 0
                                },
                                {
                                    optionId: 3,
                                    title: "وحشتناکه",
                                    color: "مهم نیست برام",
                                    score: 0
                                }
                            ]
                        }
                    },
                    {
                        sectionId: 3,
                        //sectionType: 0,
                        sectionType: 0,
                        dialogueSection: {
                            person: "سپهر",
                            personPic: "",
                            dialogue: "... و میخندم. "
                        }
                    }
                ]
            }, // end section
            {
                stageId: 2,
                sections: [
                    {
                        sectionId: 1,
                        sectionType: 0,
                        dialogueSection: {
                            person: "سپهر",
                            personPic: "",
                            dialogue: "و میخندم. اره متفاوته به عنوان برادر بزرگ ترم نمی تونه پشتم رو داشته باشه و یا در مورد سلیقم تو انتخاب نامزدم گیر بده. نمی تونه موقعی که دارن منو تو کوچه کمک میزنن عین یه قهرمان بیاد و برادر کوچیکترش رو نجات بده."
                        }
                    },
                    {
                        sectionId: 2,
                        sectionType: 1,
                        optionSection: {
                            header: "",
                            desc: "واقعیتش رو بخواین",
                            background: "",
                            options: [
                                {
                                    optionId: 1,
                                    title: "دوست داشتم اینجوی باشه",
                                    color: "",
                                    score: 0
                                },
                                {
                                    optionId: 2,
                                    title: "مهم نیست برام",
                                    color: "",
                                    score: 0
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
                        sectionType: 0,
                        dialogueSection: {
                            person: "سپهر",
                            personPic: "",
                            dialogue: " ولی ما صمیمیت خاص خودمون رو داریم. سینا میفهمه که اون برادر بزرگ تر منه."
                        }

                    },
                    {
                        sectionId: 2,
                        sectionType: 1,
                        optionSection: {
                            desc: "بعضی وقت ها",
                            header: "",
                            background: "",
                            options: [
                                {
                                    optionId: 1,
                                    title: "وسط راهرو با دستاش بهم تیر میزنه",
                                    color: "",
                                    score: 0
                                },
                                {
                                    optionId: 2,
                                    title: "یهو داد میزنه سپهر رو کوسه خورد",
                                    color: "",
                                    score: 0
                                },
                                {
                                    optionId: 3,
                                    title: "عمو یه دختر",
                                    color: "",
                                    score: 0
                                }
                            ]
                        }
                    },
                    {
                        sectionId: 3,
                        sectionType: 0,
                        dialogueSection: {
                            person: "سپهر",
                            personPic: "",
                            dialogue: "و کارهای عجیب دیگه ای هم می کنه."
                        }

                    },
                ]
            }, // end section
            {
                stageId: 4,
                sections: [
                    {
                        sectionId: 1,
                        sectionType: 0,
                        dialogueSection: {
                            person: "سپهر",
                            personPic: "",
                            dialogue: "می دونه چه کار کنه که بهش توجه کنم و بعضی مواقع منو با تمام زورش بقل می کنه. عین خیلی از برادر خواهرا رو مخ هم میریم و باهام کشتی میگیره که حق با کیه."
                        }

                    },
                    {
                        sectionId: 2,
                        sectionType: 1,
                        optionSection: {
                            desc: "ولی من",
                            header: "",
                            background: "",
                            options: [
                                {
                                    optionId: 1,
                                    title: "با تمام وجود از برادرم محافظت می کنم",
                                    color: "",
                                        score: 0
                                },
                                {
                                    optionId: 2,
                                    title: "صمیمانه ترین رابطه رو باهاش دارم",
                                    color: "",
                                        score: 0
                                },
                                {
                                    optionId: 3,
                                    title: "همیشه اذیتش می کنم",
                                    color: "",
                                        score: 0
                                }
                            ]
                        }
                    },
                    // {
                    //     sectionId: 3,
                    //     sectionType: 0,
                    //     dialogueSection: {
                    //         person: "سپهر",
                    //         personPic: "",
                    //         dialogue: "ولی در آخر روز اون برادر منه"
                    //     }

                    // }
                ]
            }, // end section
            {
                stageId: 5,
                sections: [
                    {
                        sectionId: 1,
                        sectionType: 0,
                        dialogueSection: {
                            person: "سپهر",
                            personPic: "",// pic with brother
                            dialogue: "ولی در اخر روز اون برادر منه"
                        }

                    },
                    {
                        sectionId: 2,
                        sectionType: 1,
                        optionSection: {
                            header: "",
                            desc: "سینا دوست داری بریم...",
                            background: "",
                            options: [
                                {
                                    optionId: 1,
                                    title: "خونه بازی کنیم",
                                    color: "",
                                        score: 0
                                },
                                {
                                    optionId: 2,
                                    title: "پارک قدم بزنیم",
                                    color: "",
                                        score: 0
                                },
                                {
                                    optionId: 3,
                                    title: "بریم بیرون غذا بخوریم",
                                    color: "",
                                        score: 0
                                },
                                {
                                    optionId: 4,
                                    title: "لب ساحل",
                                    color: "",
                                        score: 0
                                }
                            ]
                        }
                    }
                ]
            }, // end section
            {
                stageId: 6,
                sections: [
                    {
                        sectionId: 1,
                        sectionType: 0,
                        dialogueSection: {
                            person: "سپهر",
                            personPic: "",
                            dialogue: "سینا خیلی آدم خاصیه. نه بخاطر این که اوتیسم داره. چون واقعا خارق العادس. مامانم وقتی سینا نه سالش بود بهش گفتن  که دیگه به جلسات درمانی نیاد. چون هیچ وقت نمی تونه تو صحبت کردن بهتر بشه یا با آدم ها بتونه ارتباط برقرار کنه. دیگه اخرین حد ظرفیتش همینه."
                        }
                    },
                    {
                        sectionId: 2,
                        sectionType: 1,
                        optionSection: {
                            desc: "و اون موقع",
                            header: "",
                            background: "",
                            options: [
                                {
                                    optionId: 1,
                                    title: "داد زدم و گفتم اون بهتر میشه",
                                    color: "",
                                        score: 0
                                },
                                {
                                    optionId: 2,
                                    title: "رفتم یه گوشه و گریه کردم",
                                    color: "",
                                        score: 0
                                },
                                {
                                    optionId: 3,
                                    title: "منم قبول کردم",
                                    color: "",
                                        score: 0
                                }
                            ]
                        }
                    }
                ]
            }, // end section
            {
                stageId: 7,
                sections: [
                    {
                        sectionId: 1,
                        sectionType: 0,
                        dialogueSection: {
                            person: "سپهر",
                            personPic: "",
                            dialogue: "ولی وقتی که بزرگ تر شد تونست یه اسکیت برای خودش بخره. با دوستاش آواز بخونه و حتی تو مسابقات کشوری مقام بیاره میتونه نقاشی کنه، آهنگ بخونه، اسکیت سوار شه و حتی شنا کنه. تمام کار های که من می کنم. ولی به خاطر این خاص نیست اون می تونه هر کسی که اطرافشه رو خوشحال کنه. خانوادش ، جمع دوستامون و حتی همکاراش!"
                        }
                    },
                    {
                        sectionId: 2,
                        sectionType: 1,
                        optionSection: {
                            desc: "این باعث میشه من ...",
                            header: "",
                            background: "",
                            options: [
                                {
                                    optionId: 1,
                                    title: "هم خوشحال بشم و آدم بهتری باشم",
                                    color: "",
                                        score: 0
                                },
                                {
                                    optionId: 2,
                                    title: "بهش حسودیم میشه و دلم میخواد منم تاثیر گزار باشم",
                                    color: "",
                                        score: 0
                                },
                                {
                                    optionId: 3,
                                    title: "خیلی چیزا ازش یاد گرفتم",
                                    color: "",
                                        score: 0
                                }
                            ]
                        }
                    },
                    {
                        sectionId: 3,
                        sectionType: 0,
                        dialogueSection: {
                            person: "سپهر",
                            personPic: "",
                            dialogue: "منونم سینا.برای همه چیز. پس می خواین بدونین داشتن یه برادر اوتیسمی چجوری. بینظیره!!!"
                        }
                    },
                ]
            }, // end section











        ]
    }
]