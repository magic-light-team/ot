
var introMusic = "bensound-tenderness-0.mp3";
var levels  = [
    {
        levelId: 1,
        levelName: "برادر بزرگتر من",
        levelPic: "levels/l1-1.jpg",
        backgroundMusic: "bensound-memories-1.mp3",
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
                            title: "مهم نیست برام",
                            color: "",
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
                stageId: 17,
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
        levelPic: "levels/l1-2.jpg",
        backgroundMusic: "bensound-anewbeginning-2.mp3",
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
                    nextDialogueId: 38
                }
            },
            {
                stageId: 38,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "هر جا که بگی میام",
                    nextDialogueId: 42
                }
            },
            {
                stageId: 40,
                stageType: 0,
                dialogueSection: {
                    person: "برادر دوم",
                    personPic: "",
                    dialogue: "نمی خوای بریم شهر بازی",
                    nextDialogueId: 41
                }
            },
            {
                stageId: 41,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "هیچ وقت نمی تونیم بریم",
                    nextDialogueId: 42
                }
            },
            {
                stageId: 42,
                stageType: 0,
                dialogueSection: {
                    person: "برادر دوم",
                    personPic: "",
                    dialogue: "همیشه دوست داشتم با برادرم دور دنیا بگردم تمام کشور ها رو برم.",
                }
            },
            {
                stageId: 43,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "از خاطرات قدیمتون برایم بگید.",
                }
            },
            {
                stageId: 44,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "از خاطرات قدیمتون برایم بگید.",
                }
            },
            {
                stageId: 45,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "یادمه روز اولی که براش خمیر بازی گرفتیم از خوشحالی فقط جیغ میزد. صبر نمی کرد که میز رو آماده کنم",
                }
            },
            {
                stageId: 46,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "پشت هم خمیر ها رو چنگ میزد و می کوبیدشون رو میز.",
                }
            },
            {
                stageId: 47,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "من اون موقع",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "منم با کف صابون حباب درست کردم و حسابی همه جا رو بهم ریختیم",
                            color: "",
                            score: 0,
                            nextDialogueId: 48
                        },
                        {
                            optionId: 2,
                            title: "از این که خونه رو بهم ریخته ناراحت شدم وسرش داد زدم",
                            color: "",
                            score: 0,
                            nextDialogueId: 49
                        }
                    ]
                }
            },
            {
                stageId: 48,
                stageType: 0,
                dialogueSection: {
                    person: "برادر دوم",
                    personPic: "",
                    dialogue: "ما برادرای شلوغی هستیم",
                    nextDialogueId: 50
                }
            },
            {
                stageId: 49,
                stageType: 0,
                dialogueSection: {
                    person: "برادر دوم",
                    personPic: "",
                    dialogue: "اونم شروع به گریه کرد و من یاد گرفتم باید باهاش مهربون تر باشم",
                    nextDialogueId: 50
                }
            },
            {
                stageId: 50,
                stageType: 0,
                dialogueSection: {
                    person: "برادر دوم",
                    personPic: "",
                    dialogue: "کل میز کثیف شد",
                }
            },
            {
                stageId: 51,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "بعدش",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "من با دستام هر چی رو میز بود رو جمع کردم ",
                            color: "",
                            score: 0,
                            nextDialogueId: 52
                        },
                        {
                            optionId: 2,
                            title: "از ناراحتی این که قراره مامان چی بگه سرم رو گزاشتم رو میز",
                            color: "",
                            score: 0,
                            nextDialogueId: 53
                        }
                    ]
                }
            },
            {
                stageId: 52,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "بعد دیدم داره از من تقلید می کنه و داره کمک می کنه",
                    nextDialogueId: 54
                }
            },
            {
                stageId: 53,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "بعد دیدم داره از من تقلید می کنه و داره کمک می کنه",
                    nextDialogueId: 54
                }
            },
            {
                stageId: 54,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "یادمه یه روز رفتیم آتیش بازی ببینیم",
                }
            },
            {
                stageId: 55,
                stageType: 0,
                dialogueSection: {
                    person: "برادر اول",
                    personPic: "",
                    dialogue: "من آتیش بازی دوست دارم خیلی قشنگن",
                }
            },
        ]
    }, // end section

    {
        levelId: 3,
        levelName: "حقایق اوتیسم",
        levelPic: "levels/l1-3.jpg",
        backgroundMusic: "bensound-creativeminds-3.mp3",
        stages: [
            {
                stageId: 1,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "همیشه پدر مادرا از من میپرسن: چرا؟چرا بچه من اوتیسم داره؟"
                }
            },
            {
                stageId: 2,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "واقعیتش یک جواب ساده نداره به نظر شما چرا؟"
                }
            },
            {
                stageId: 3,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "چون اوتیسم...",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "به یک طیف از اختلالاته",
                            color: "",
                            score: 0,
                            nextDialogueId: 4
                        },
                        {
                            optionId: 2,
                            title: "ترکیبی از چند مریضیه",
                            color: "",
                            score: 0,
                            nextDialogueId: 5
                        },
                        {
                            optionId: 3,
                            title: "هیچ اطلاعاتی راجع بهش نداریم",
                            color: "",
                            score: 0,
                            nextDialogueId: 5
                        },
                    ]
                }
            },
            {
                stageId: 4,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "درسته ",
                    nextDialogueId: 6
                }
            },
            {
                stageId: 5,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "البته که نه ",
                    nextDialogueId: 6
                }
            },
            {
                stageId: 6,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "به نظرتون اوتیسم تا چه حد شایعه ",
                }
            },
            {
                stageId: 7,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "میشه گفت امروزه در حد ...",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "یک در 88 کودک",
                            color: "",
                            score: 0,
                            nextDialogueId: 8
                        },
                        {
                            optionId: 2,
                            title: "یک در 200 کودک ",
                            color: "",
                            score: 0,
                            nextDialogueId: 9
                        },
                        {
                            optionId: 3,
                            title: "یک در 500 کودک",
                            color: "",
                            score: 0,
                            nextDialogueId: 9
                        },
                    ]
                }
            },
            {
                stageId: 8,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "دقیقا ",
                    nextDialogueId: 10
                }
            },
            {
                stageId: 9,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "متاسفانه اشتباه فکر می کنید ",
                    nextDialogueId: 10
                }
            },
            {
                stageId: 10,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "به خاطر آگاهی که در سال های اخیر پیدا کردیم اوتیسم رو در افراد بیشتری تونستیم تشخیص بدیم ",
                }
            },
            {
                stageId: 11,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "البته در طول زمان تعریف اوتیسم تفییر پیدا کرد و گستره بیشتری از افراد رو در بر میگیره ",
                }
            },
            {
                stageId: 12,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "به نظر شما نسبت ببین پسر ها با دختر ها یی که اوتیسم دارن چقدره ",
                }
            },
            {
                stageId: 13,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "نسبت بین دختر ها به پسر ها  ...",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "یک به یک",
                            color: "",
                            score: 0,
                            nextDialogueId: 15
                        },
                        {
                            optionId: 2,
                            title: "یک در چهار ",
                            color: "",
                            score: 0,
                            nextDialogueId: 14
                        },
                        {
                            optionId: 3,
                            title: "یک در بیست",
                            color: "",
                            score: 0,
                            nextDialogueId: 15
                        },
                    ]
                }
            },
            {
                stageId: 14,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "درست حدس زده اید",
                    nextDialogueId: 16
                }
            },
            {
                stageId: 15,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "نه، نسبت درست یک در چهار هست",
                    nextDialogueId: 16
                }
            },
            {
                stageId: 16,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "ممکنه خیلی علامت های متفاوتی بین دختر ها و پسر ها ببینیم.",
                }
            },
            {
                stageId: 17,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "به نظرتون چندین ژن دخیل با اوتیسم شناسایی شدن؟",
                }
            },
            {
                stageId: 18,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "حدود ...",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "یک ژن",
                            color: "",
                            score: 0,
                            nextDialogueId: 20
                        },
                        {
                            optionId: 2,
                            title: "دویست تا چهارصد ژن",
                            color: "",
                            score: 0,
                            nextDialogueId: 19
                        },
                        {
                            optionId: 3,
                            title: "هزار تا میلیون ها ژن",
                            color: "",
                            score: 0,
                            nextDialogueId: 20
                        },
                    ]
                }
            },
            {
                stageId: 19,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "درست حدس زده اید",
                    nextDialogueId: 21
                }
            },
            {
                stageId: 20,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "نه، دویست تا چهارصد ژن شناسایی شده اند",
                    nextDialogueId: 21
                }
            },
            {
                stageId: 21,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "چیز جالب تر این که این ها تو مکانیزم های مرتبط به هم عمل می کنن.",
                }
            },
            {
                stageId: 22,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "مثل یه الگوریتم محاسباتی که چندین فرمول داره و با تغییر یکی از فرمول ها نتیجه های الگوریتم عوض میشن.",
                }
            },
        ]
    }, // end section

    {
        levelId: 4,
        levelName: "نگرانی مادر",
        levelPic: "levels/l1-4.jpg",
        backgroundMusic: "bensound-pianomoment-4.mp3",
        stages: [
            {
                stageId: 1,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "مادری با اضطراب در مطب دکتر نشسته  و کودکش  تشخیص داده شده که اوتیسم داره",
                }
            },
            {
                stageId: 2,
                stageType: 0,
                dialogueSection: {
                    person: "مادر",
                    personPic: "",
                    dialogue: "اخه چرا ؟ نکنه به خاطر...",
                }
            },
            {
                stageId: 3,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "؟به خاطر واکسنی که تو بچگی بهش زدیمه",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "نه فکر نکنم",
                            color: "",
                            score: 0,
                        },
                        {
                            optionId: 2,
                            title: "اره به خاطر همینه",
                            color: "",
                            score: 0,
                        }
                    ]
                }
            },
            {
                stageId: 4,
                stageType: 0,
                dialogueSection: {
                    person: "مادر",
                    personPic: "",
                    dialogue: "نه به هیچ وجه. تحقیقی که در اون احتمال تاثیر واکسن در اوتیسم داده شد به خاطر غیر علمی بودن از ژورنال حذف شد و نویسندش مدرک طبابت باطل شد.",
                }
            },
            {
                stageId: 5,
                stageType: 0,
                dialogueSection: {
                    person: "مادر",
                    personPic: "",
                    dialogue: "بعد اون تحقیق های زیادی راجع به این موضوع انجام شد و هیچ کدوم ارتباطی بین اوتیسم و واکسن پیدا نکردن.",
                }
            },
            {
                stageId: 6,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "سن باباش زیاده شندیم تو این موضوع تاثیر داره",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "نه فکر نکنم",
                            color: "",
                            score: 0,
                        },
                        {
                            optionId: 2,
                            title: "آره به خاطر همینه",
                            color: "",
                            score: 0,
                        }
                    ]
                }
            },
            {
                stageId: 7,
                stageType: 0,
                dialogueSection: {
                    person: "مادر",
                    personPic: "",
                    dialogue: "آره ممکنه ",
                }
            },
            {
                stageId: 8,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "موقع بارداری به خاطر بیماریم دارو مصرف میکردم",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "نه فکر نکنم",
                            color: "",
                            score: 0,
                        },
                        {
                            optionId: 2,
                            title: "آره به خاطر همینه",
                            color: "",
                            score: 0,
                        }
                    ]
                }
            },
            {
                stageId: 9,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "نمیشه همینجوری نظر داد بستگی به بیماریت و داروی مصرفی داره که بتونیم بگیم اثر داشته یا نه. ",
                }
            },
            {
                stageId: 10,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "ویتامین و فولیک اسید مصرف میکردم",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "نه فکر نکنم",
                            color: "",
                            score: 0,
                        },
                        {
                            optionId: 2,
                            title: "آره به خاطر همینه",
                            color: "",
                            score: 0,
                        }
                    ]
                }
            },
            {
                stageId: 11,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "نه اینا برای دوران بارداریت نیازن",
                }
            },
            {
                stageId: 12,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "چون صرع داشتم ، والپروات مصرف میکنم",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "نه فکر نکنم",
                            color: "",
                            score: 0,
                        },
                        {
                            optionId: 2,
                            title: "آره به خاطر همینه",
                            color: "",
                            score: 0,
                        }
                    ]
                }
            },
            {
                stageId: 13,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "موقع بارداری وقتی مغز جنین داره شکل میگیره یک سری عوامل شیمیایی و بعضی از بیماری ها می تونن باعث بالا رفتن ریسک اوتیسم بشن",
                }
            },
            {
                stageId: 14,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "من خیلی نگرانم ...",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "ممکنه خواهر کوچیکترش هم اینطور بشه",
                            color: "",
                            score: 0,
                        },
                        {
                            optionId: 2,
                            title: "ممکنه بچه های دیگه ازش بگیرن",
                            color: "",
                            score: 0,
                        },
                        {
                            optionId: 2,
                            title: "ممکنه برای همیشه تنها بمونه",
                            color: "",
                            score: 0,
                        }
                    ]
                }
            },
            {
                stageId: 15,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "دوقولو هم سال احتمال داره 77 درصد ، غیر همسان 31 درصد و برادر خواهر حدود بیست درصد ممکنه که دومی هم اوتیسم داشته باشه.",
                }
            },
            {
                stageId: 16,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "اما حتی برای دقلو های همسان که تمام اطلاعات ژنتیکیشون برابره هم این احتمال صد در صد نیست",
                }
            },
            {
                stageId: 17,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "یعنی ممکنه به خاطر جهش ژنتیکی اتفاق افتاده باشه",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "نه فکر نکنم",
                            color: "",
                            score: 0,
                        },
                        {
                            optionId: 2,
                            title: "آره به خاطر همینه",
                            color: "",
                            score: 0,
                        }
                    ]
                }
            },
            {
                stageId: 18,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "در خیلی از مواد هیچ فردی در خانواده سابقه ژنتیکی نداره و یک بچه به خاطر جهش ژنتیکی اولین نفره که اوتیسم داره",
                }
            },
            {
                stageId: 19,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "واقعیتش رو بخوای به بعضی از افراد میتونم با اطمینان بگم به خاطر ژنتیکه اما به بقیه با شک و تردید.",
                }
            },
            {
                stageId: 20,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "خواهرش رو کی بیارم برای معاینه",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "هجده ماهگی",
                            color: "",
                            score: 0,
                        },
                        {
                            optionId: 2,
                            title: "چهارسالگی",
                            color: "",
                            score: 0,
                        },
                        {
                            optionId: 3,
                            title: "نه سالگی",
                            color: "",
                            score: 0,
                        },
                        {
                            optionId: 4,
                            title: "دوازده سالگی",
                            color: "",
                            score: 0,
                        }
                    ]
                }
            },
            {
                stageId: 21,
                stageType: 0,
                dialogueSection: {
                    person: "دکتر",
                    personPic: "",
                    dialogue: "ممکنه علایم رو تا چهار سالگی تشخیص ندیم.",
                }
            },
            {
                stageId: 21,
                stageType: 0,
                dialogueSection: {
                    person: "مادر",
                    personPic: "",
                    dialogue: "احساس می کنم زندگیم تموم شده.چکار می تونم بکنم.",
                }
            },
            {
                stageId: 22,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "احساس می کنم زندگیم تموم شده.چکار می تونم بکنم؟",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "ممکنه بزرگ بشه درمان بشه؟",
                            color: "",
                            score: 0,
                            nextDialogueId:23
                        },
                        {
                            optionId: 2,
                            title: " همه قراره اذیتش کنن",
                            color: "",
                            score: 0,
                            nextDialogueId:24
                        },
                    ]
                }
            },
            {
                stageId: 23,
                stageType: 0,
                dialogueSection: {
                    person: "مادر",
                    personPic: "",
                    dialogue: "چیزی به اسم درمان معنی نداره و سبک زندگیتون فقز عوض میشه ولی شاید بتونه تو اجتماع باشه یا حتی تو یه کاری نابغه باشه",
                    nextDialogueId:25
                }
            },
            {
                stageId: 24,
                stageType: 0,
                dialogueSection: {
                    person: "مادر",
                    personPic: "",
                    dialogue: "باید ادمایی که دوستش دارن کنارش باشن و با صبر و حوصله باهاش رفتار کنین .اما می تونه اروم اروم تو خیلی کارا مستقل بشه",
                    nextDialogueId:25
                }
            },
            {
                stageId: 25,
                stageType: 0,
                dialogueSection: {
                    person: "مادر",
                    personPic: "",
                    dialogue: "چکار می تونم بکنم که بهتر بشه",
                }
            },
            {
                stageId: 26,
                stageType: 1,
                optionSection: {
                    header: "",
                    desc: "گفتار درمانی و کار در مانی باعث بهبود توانایی هاش میشه",
                    background: "",
                    options: [
                        {
                            optionId: 1,
                            title: "نه فکر نکنم",
                            color: "",
                            score: 0,
                        },
                        {
                            optionId: 2,
                            title: " آره مفیده",
                            color: "",
                            score: 0,
                        },
                    ]
                }
            },
            {
                stageId: 26,
                stageType: 0,
                dialogueSection: {
                    person: "مادر",
                    personPic: "",
                    dialogue: "می تونین حتی سراغ جلسات تحلیل رفتار کاربردی (ABA) و یا کلاس های مهارت های اجتماعی برید",
                }
            },
            {
                stageId: 27,
                stageType: 0,
                dialogueSection: {
                    person: "مادر",
                    personPic: "",
                    dialogue: "خیلی کارا میشه کرد دنیا تموم نشده هنوز امید به اینده هست",
                }
            },
        ]
    }, // end section

]