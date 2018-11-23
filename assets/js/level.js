var levels = [
    {
        levelId: 1,
        levelName: "برادر بزرگتر من",
        levelPic:"levels/l1-1.jpg",
        stages: [
            {
                stageId: 1,
                //stageType: 0,
                stageType: 0,
                dialogueSection: {
                    person: "سپهر",
                    personPic: "",
                    dialogue: "سلام من سپهرم و برادر بزرگ ترم سینا مبتلا به اوتیسمه. مردم از من میپرسن که چه حسی داره برادرت اوتیسم داره؟ سخته؟ خسته کنندس؟چقدر فرق داره؟"
                }
            },
            {
                stageId: 2,
                //stageType: 1,
                stageType: 1,
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
                stageId: 3,
                //stageType: 0,
                stageType: 0,
                dialogueSection: {
                    person: "سپهر",
                    personPic: "",
                    dialogue: "... و میخندم. "
                }
            },
            {
                stageId: 4,
                stageType: 0,
                dialogueSection: {
                    person: "سپهر",
                    personPic: "",
                    dialogue: "و میخندم. اره متفاوته به عنوان برادر بزرگ ترم نمی تونه پشتم رو داشته باشه و یا در مورد سلیقم تو انتخاب نامزدم گیر بده. نمی تونه موقعی که دارن منو تو کوچه کمک میزنن عین یه قهرمان بیاد و برادر کوچیکترش رو نجات بده."
                }
            },
            {
                stageId: 5,
                stageType: 1,
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
            }, // end section
            {
                stageId: 6,
                stageType: 0,
                dialogueSection: {
                    person: "سپهر",
                    personPic: "",
                    dialogue: " ولی ما صمیمیت خاص خودمون رو داریم. سینا میفهمه که اون برادر بزرگ تر منه."
                }

            },
            {
                stageId: 7,
                stageType: 1,
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
                stageId: 8,
                stageType: 0,
                dialogueSection: {
                    person: "سپهر",
                    personPic: "",
                    dialogue: "و کارهای عجیب دیگه ای هم می کنه."
                }

            },
            {
                stageId: 9,
                stageType: 0,
                dialogueSection: {
                    person: "سپهر",
                    personPic: "",
                    dialogue: "می دونه چه کار کنه که بهش توجه کنم و بعضی مواقع منو با تمام زورش بقل می کنه. عین خیلی از برادر خواهرا رو مخ هم میریم و باهام کشتی میگیره که حق با کیه."
                }

            },
            {
                stageId: 10,
                stageType: 1,
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
            {
                stageId: 11,
                stageType: 0,
                dialogueSection: {
                    person: "سپهر",
                    personPic: "",// pic with brother
                    dialogue: "ولی در اخر روز اون برادر منه"
                }

            },
            {
                stageId: 12,
                stageType: 1,
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
            },
            {
                stageId: 13,
                stageType: 0,
                dialogueSection: {
                    person: "سپهر",
                    personPic: "",
                    dialogue: "سینا خیلی آدم خاصیه. نه بخاطر این که اوتیسم داره. چون واقعا خارق العادس. مامانم وقتی سینا نه سالش بود بهش گفتن  که دیگه به جلسات درمانی نیاد. چون هیچ وقت نمی تونه تو صحبت کردن بهتر بشه یا با آدم ها بتونه ارتباط برقرار کنه. دیگه اخرین حد ظرفیتش همینه."
                }
            },
            {
                stageId: 14,
                stageType: 1,
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
            },
            {
                stageId: 15,
                stageType: 0,
                dialogueSection: {
                    person: "سپهر",
                    personPic: "",
                    dialogue: "ولی وقتی که بزرگ تر شد تونست یه اسکیت برای خودش بخره. با دوستاش آواز بخونه و حتی تو مسابقات کشوری مقام بیاره میتونه نقاشی کنه، آهنگ بخونه، اسکیت سوار شه و حتی شنا کنه. تمام کار های که من می کنم. ولی به خاطر این خاص نیست اون می تونه هر کسی که اطرافشه رو خوشحال کنه. خانوادش ، جمع دوستامون و حتی همکاراش!"
                }
            },
            {
                stageId: 16,
                stageType: 1,
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
                stageId: 14,
                stageType: 0,
                dialogueSection: {
                    person: "سپهر",
                    personPic: "",
                    dialogue: "منونم سینا.برای همه چیز. پس می خواین بدونین داشتن یه برادر اوتیسمی چجوری. بینظیره!!!"
                }
            },
        ]
    }, // end section

    {
        levelId: 2,
        levelName: "دوست ابدی من",
        stages: [
            {
                stageId: 1,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "خوب از خودتون برامون بگید"
                }
            },
            {
                stageId: 2,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "ما دوقولوییم"
                }
            },
            {
                stageId: 3,
                stageType: 0,
                dialogueSection: {
                    person: "برادر دوم",
                    personPic: "",
                    dialogue: "همممم"
                }
            },
            {
                stageId: 4,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "این برادر منه"
                }
            },
            {
                stageId: 5,
                stageType: 0,
                dialogueSection: {
                    person: "برادر دوم",
                    personPic: "",
                    dialogue: "و.... من باهاش بازی می کنم"
                }
            },
            {
                stageId: 6,
                stageType: 0,
                dialogueSection: {
                    person: "برادر دوم",
                    personPic: "",
                    dialogue: "کمکش هم می کنم"
                }
            },
            {
                stageId: 7,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "ما همدیگه رو کمک می کنیم"
                }
            },
            {
                stageId: 8,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "من اگه بزرگ بشم و خونه بگیرم برادرمم با خودم میبرم"
                }
            },
            {
                stageId: 9,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "میای؟",
                    background: "",//"برادر اول"
                    options: [
                        {
                            optionId: 1,
                            title: "آره چرا که نه",
                            color: "",
                            score: 0,
                            nextDialogueId: 11
                        },
                        {
                            optionId: 2,
                            title: "میخوام تنهایی رو هم تجربه کنم",
                            color: "",
                            score: 0,
                            nextDialogueId: 21
                        }
                    ]
                }
            },
            {
                stageId: 11,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "می خوای تو یه خونه با هم زندگی کنیم",
                    nextDialogueId: 12
                }
            },
            {
                stageId: 12,
                stageType: 0,
                dialogueSection: {
                    person: "برادر دوم",
                    personPic: "",
                    dialogue: "اوهوم",
                    nextDialogueId: 30
                }
            },
            {
                stageId: 21,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "نمی خوای تو یه خونه با هم زندگی کنیم",
                    nextDialogueId: 22
                }
            },
            {
                stageId: 22,
                stageType: 0,
                dialogueSection: {
                    person: "برادر دوم",
                    personPic: "",
                    dialogue: "نه همین کافیه",
                    nextDialogueId: 30
                }
            },
            {
                stageId: 30,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "اون همیشه پشتم رو داره تحت هر شرایطی که باشه. به همین خاطر دوستش دارم"
                }
            },
            {
                stageId: 31,
                stageType: 0,
                dialogueSection: {
                    person: "برادر دوم",
                    personPic: "",
                    dialogue: "ما برادرای خوشحالییم"
                }
            },
            {
                stageId: 32,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "آره هستیم. همیشه با همیم"
                }
            },
            {
                stageId: 33,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "من دلم می خواد همیشه برم ژاپن"
                }
            },
            {
                stageId: 34,
                stageType: 0,
                dialogueSection: {
                    person: "برادر دوم",
                    personPic: "",
                    dialogue: "چرا؟"
                }
            },
            {
                stageId: 35,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "همینجوری ژاپن رو خیلی دوست دارم"
                }
            },
            {
                stageId: 36,
                //stageType: 1,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "میدونی دیگه کجا باید بریم؟",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "کجا",
                            color: "",
                            score: 0,
                            nextDialogueId: 37
                        },
                        {
                            optionId: 2,
                            title: "دوباره این بحث نه",
                            color: "",
                            score: 0,
                            nextDialogueId: 40
                        }
                    ]
                }
            },
            {
                stageId: 37,
                stageType: 0,
                dialogueSection: {
                    person: "برادر دوم",
                    personPic: "",
                    dialogue: "شهر بازی",
                    nextDialogueId:38
                }
            },
            {
                stageId: 38,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "هر جا که بگی میام",
                    nextDialogueId:42
                }
            },
            {
                stageId: 40,
                stageType: 0,
                dialogueSection: {
                    person: "برادر دوم",
                    personPic: "",
                    dialogue: "نمی خوای بریم شهر بازی",
                    nextDialogueId:41
                }
            },
            {
                stageId: 41,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "هیچ وقت نمی تونیم بریم",
                    nextDialogueId:42
                }
            },






        ]
    }, // end section




]

/*
{
                stageId: 2,
                //stageType: 1,
                stageType: 1,
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



*/