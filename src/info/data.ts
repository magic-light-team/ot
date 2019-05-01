import { appPage, level, StageType, DialogType } from './data.interfaces';

let startPage: appPage = {
    backgroundPic: "/img/levels/s1-1.jpg",
    music: "bensound-tenderness-0.mp3",
    pageButtons: 
    [{
        id: "start-new-btn",
        title: "شروع",
        color: "start-new-btn",
        page: "chapterPage"
    },
    // {id:"achivement-btn", title:"دستاورد ها",color:"achivement-btn", page:"achivement-page"},
    {
        id: "source-btn",
        title: "منابع",
        color: "source-btn",
        page: "sourcePage"
    },
    {
        id: "about-btn",
        title: "درباره ما",
        color: "about-btn",
        page: "aboutPage"
    },
    ]
}

let chapterPage: appPage = {
    backgroundPic: "/img/levels/s1-1.jpg",
    music: "bensound-tenderness-0.mp3",
}

let aboutPage: appPage = {
    backgroundPic: "/img/levels/s1-1.jpg",
    music: "bensound-tenderness-0.mp3",
}

let sourcePage: appPage = {
    backgroundPic: "/img/levels/s1-1.jpg",
    music: "bensound-tenderness-0.mp3",
}

let levels: level[] = [
    {
        levelId: 1,
        levelName: "برادر بزرگتر من",
        levelPic: "/img/levels/l1-0.jpg",
        backgroundMusic: "bensound-memories-1.mp3",
        stages: [{
            stageId: 1,
            stageType: StageType.Dialog, // stageType: 0,
            person: "سپهر",
            personPic: "",
            dialogType: DialogType.left,//dialogType: "left",,
            dialog: "سلام من سپهرم و برادر بزرگ ترم سینا مبتلا به اوتیسمه. مردم از من میپرسن که چه حسی داره برادرت اوتیسم داره؟ سخته؟ خسته کنندس؟چقدر فرق داره؟"
        },
        {
            stageId: 2,
            stageType: StageType.Question, // stageType: 1,
            dialog: "چه حسی داره برادرت اوتیسم داره؟ سخته؟ خسته کنندس؟چقدر فرق داره؟",
            backgroundPic: "",
            dialogType: DialogType.center, // dialogType: "center",
            optionSection: [{
                optionId: 1,
                title: "نه واقعا سخت نیست",
                color: "",
                score: 10,
            },
            {
                optionId: 2,
                title: "وحشتناکه",
                color: "",
                score: -10
            },
            {
                optionId: 3,
                title: "مهم نیست برام",
                color: "",
                score: 0
            }]
        },
        {
            stageId: 3,
            stageType: StageType.Dialog, // stageType: 0,

            person: "سپهر",
            personPic: "",
            dialogType: DialogType.left,//dialogType: "left",,
            dialog: "... و میخندم. "
        },
        {
            stageId: 4,
            stageType: StageType.Dialog, // stageType: 0,

            person: "سپهر",
            personPic: "",
            dialogType: DialogType.left,//dialogType: "left",,
            dialog: "آره متفاوته به عنوان برادر بزرگ ترم نمی تونه پشتم رو داشته باشه و یا در مورد سلیقم تو انتخاب نامزدم گیر بده. نمی تونه موقعی که دارن منو تو کوچه کتک میزنن عین یه قهرمان بیاد و برادر کوچیکترش رو نجات بده."
        },
        {
            stageId: 5,
            stageType: StageType.Question, // stageType: 1,
            dialog: "واقعیتش رو بخواین",
            dialogType: DialogType.left,//dialogType: "left",,
            backgroundPic: "",

            optionSection: [{
                optionId: 1,
                title: "دوست داشتم اینجوری باشه",
                color: "",
                score: 0
            },
            {
                optionId: 2,
                title: "مهم نیست برام",
                color: "",
                score: 10
            }]
        }, // end section
        {
            stageId: 6,
            stageType: StageType.Dialog, // stageType: 0,

            person: "سپهر",
            personPic: "",
            dialogType: DialogType.left,//dialogType: "left",,
            dialog: "ولی ما صمیمیت خاص خودمون رو داریم. سینا میفهمه که اون برادر بزرگ تر منه."
        },
        {
            stageId: 7,
            stageType: StageType.Question, // stageType: 1,
            dialog: "بعضی وقت ها",
            backgroundPic: "",
            dialogType: DialogType.left,//dialogType: "left",,
            optionSection: [{
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
                title: "میگه عمو یه دختره",
                color: "",
                score: 0
            }
            ]
        },
        {
            stageId: 8,
            stageType: StageType.Dialog, // stageType: 0,

            person: "سپهر",
            personPic: "",
            dialogType: DialogType.left,//dialogType: "left",,
            dialog: "و کارهای عجیب دیگه ای هم می کنه."

        },
        {
            stageId: 9,
            stageType: StageType.Dialog, // stageType: 0,

            person: "سپهر",
            personPic: "",
            dialogType: DialogType.left,//dialogType: "left",,
            dialog: "می دونه چه کار کنه که بهش توجه کنم و بعضی مواقع منو با تمام زورش بقل می کنه. عین خیلی از برادر خواهرا رو مخ هم میریم و باهام کشتی میگیره که حق با کیه."
        },
        {
            stageId: 10,
            stageType: StageType.Question, // stageType: 1,
            dialog: "ولی من",
            backgroundPic: "",
            dialogType: DialogType.left,//dialogType: "left",,
            optionSection: [{
                optionId: 1,
                title: "با تمام وجود از برادرم محافظت می کنم",
                color: "",
                score: 25
            },
            {
                optionId: 2,
                title: "صمیمانه ترین رابطه رو باهاش دارم",
                color: "",
                score: 10
            },
            {
                optionId: 3,
                title: "همیشه اذیتش می کنم",
                color: "",
                score: -10
            }
            ]
        },
        {
            stageId: 11, // pic with brother
            stageType: StageType.Dialog, // stageType: 0,
            backgroundPic: "/img/levels/l1-1.jpg",

            person: "سپهر",
            personPic: "",
            dialogType: DialogType.left,//dialogType: "left",,
            dialog: "ولی در اخر روز اون برادر منه"

        },
        {
            stageId: 12,
            stageType: StageType.Question, // stageType: 1,
            dialog: "سینا دوست داری بریم...",
            backgroundPic: "/img/levels/l1-1.jpg",
            dialogType: DialogType.right, // dialogType: "right",
            optionSection: [{
                optionId: 1,
                title: "خونه بازی کنیم",
                color: "",
                backgroundPic: "/img/levels/l1-1.jpg",
                score: 0
            },
            {
                optionId: 2,
                title: "پارک قدم بزنیم",
                color: "",
                backgroundPic: "/img/levels/l1-2.jpg",
                score: 0
            },
            {
                optionId: 3,
                title: "بریم بیرون غذا بخوریم",
                color: "",
                backgroundPic: "/img/levels/l1-3.jpg",
                score: 0
            },
            {
                optionId: 4,
                title: "لب ساحل",
                color: "",
                backgroundPic: "/img/levels/l1-4.jpg",
                score: 0
            }
            ]
        },
        {
            stageId: 13,
            stageType: StageType.Dialog, // stageType: 0,

            person: "سپهر",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "سینا خیلی آدم خاصیه. نه بخاطر این که اوتیسم داره. چون واقعا خارق العادس. مامانم وقتی سینا نه سالش بود بهش گفتن  که دیگه به جلسات درمانی نیاد..."
        },
        {
            stageId: 14,
            stageType: StageType.Dialog, // stageType: 0,

            person: "سپهر",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "... چون هیچ وقت نمی تونه تو صحبت کردن بهتر بشه یا با آدم ها بتونه ارتباط برقرار کنه. دیگه اخرین حد ظرفیتش همینه."
        },
        {
            stageId: 15,
            stageType: StageType.Question, // stageType: 1,
            dialog: "و اون موقع",
            backgroundPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            optionSection: [{
                optionId: 1,
                title: "داد زدم و گفتم اون بهتر میشه",
                color: "",
                score: 10
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
                score: -10
            }
            ]
        },
        {
            stageId: 16,
            stageType: StageType.Dialog, // stageType: 0,

            person: "سپهر",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "ولی وقتی که بزرگ تر شد تونست یه اسکیت برای خودش بخره. با دوستاش آواز بخونه و حتی تو مسابقات کشوری مقام بیاره..."
        },

        {
            stageId: 17,
            stageType: StageType.Dialog, // stageType: 0,

            person: "سپهر",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "... میتونه نقاشی کنه، آهنگ بخونه، اسکیت سوار شه و حتی شنا کنه. تمام کار های که من می کنم. ولی به خاطر این خاص نیست! اون می تونه هر کسی که اطرافشه رو خوشحال کنه. خانوادش ، جمع دوستامون و حتی همکاراش!"
        },
        {
            stageId: 18,
            stageType: StageType.Question, // stageType: 1,
            dialog: "این باعث میشه من ...",
            backgroundPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            optionSection: [{
                optionId: 1,
                title: "هم خوشحال بشم و آدم بهتری باشم",
                color: "",
                score: 10
            },
            {
                optionId: 2,
                title: "بهش حسودیم میشه و دلم میخواد منم تاثیر گزار باشم",
                color: "",
                score: -10
            },
            {
                optionId: 3,
                title: "خیلی چیزا ازش یاد گرفتم",
                color: "",
                score: 25
            }
            ]
        },
        {
            stageId: 19,
            stageType: StageType.Dialog, // stageType: 0,

            person: "سپهر",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "ممنونم سینا.برای همه چیز. پس می خواین بدونین داشتن یه برادر اوتیسمی چجوریه؟!!!"
        },
        {
            stageId: 20,
            stageType: StageType.Dialog, // stageType: 0,

            person: "سپهر",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "بینظیره!!!"
        },
            // score page
        ]
    }, // end section my big brother
    {
        levelId: 2,
        levelName: "دوست ابدی من",
        levelPic: "/img/levels/l2-1.jpg",
        backgroundMusic: "bensound-anewbeginning-2.mp3",
        stages: [{
            stageId: 1,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.center, // dialogType: "center",
            dialog: "خوب از خودتون برامون بگید"
        },
        {
            stageId: 2,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر دوم",
            personPic: "",
            dialog: "ما دوقولوییم"
        },
        {
            stageId: 3,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "همممم"
        },
        {
            stageId: 4,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "این برادر منه"
        },
        {
            stageId: 5,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "و.... من باهاش بازی می کنم"
        },
        {
            stageId: 6,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "کمکش هم می کنم"
        },
        {
            stageId: 7,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر دوم",
            personPic: "",
            dialog: "ما همدیگه رو کمک می کنیم"
        },
        {
            stageId: 8,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "من اگه بزرگ بشم و خونه بگیرم برادرمم با خودم میبرم"
        },
        {
            stageId: 9,
            stageType: StageType.Question, // stageType: 1,
            dialog: "میای؟",
            dialogType: DialogType.right, // dialogType: "right",
            backgroundPic: "", //"برادر اول"
            optionSection: [{
                optionId: 1,
                title: "آره چرا که نه",
                color: "",
                score: 10,
                nextDialogId: 11
            },
            {
                optionId: 2,
                title: "میخوام تنهایی رو هم تجربه کنم",
                color: "",
                score: -10,
                nextDialogId: 21
            }
            ]
        },
        {
            stageId: 11,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "می خوای تو یه خونه با هم زندگی کنیم؟",
            nextDialogId: 12
        },
        {
            stageId: 12,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر دوم",
            personPic: "",
            dialog: "اوهوم",
            nextDialogId: 30
        },
        {
            stageId: 21,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "نمی خوای تو یه خونه با هم زندگی کنیم",
            nextDialogId: 22
        },
        {
            stageId: 22,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر دوم",
            personPic: "",
            dialog: "نه همین کافیه",
            nextDialogId: 30
        },
        {
            stageId: 30,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر دوم",
            personPic: "",
            dialog: "اون همیشه پشتم رو داره تحت هر شرایطی که باشه. به همین خاطر دوستش دارم"
        },
        {
            stageId: 31,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "ما برادرای خوشحالییم"
        },
        {
            stageId: 32,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر دوم",
            personPic: "",
            dialog: "آره هستیم. همیشه با همیم"
        },
        {
            stageId: 33,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر دوم",
            personPic: "",
            dialog: "من دلم می خواد همیشه برم ژاپن"
        },
        {
            stageId: 34,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "چرا؟"
        },
        {
            stageId: 35,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر دوم",
            personPic: "",
            dialog: "همینجوری ژاپن رو خیلی دوست دارم"
        },
        {
            stageId: 36,
            stageType: StageType.Question, // stageType: 1,
            dialog: "میدونی دیگه کجا باید بریم؟",
            backgroundPic: "",
            // dialogType: DialogType.right, // dialogType: "right",
            optionSection: [{
                optionId: 1,
                title: "کجا",
                color: "",
                score: 10,
                nextDialogId: 37
            },
            {
                optionId: 2,
                title: "دوباره این بحث نه",
                color: "",
                score: -10,
                nextDialogId: 40
            }
            ]
        },
        {
            stageId: 37,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "شهر بازی",
            nextDialogId: 38
        },
        {
            stageId: 38,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر دوم",
            personPic: "",
            dialog: "هر جا که بگی میام",
            nextDialogId: 42
        },
        {
            stageId: 40,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "نمی خوای بریم شهر بازی",
            nextDialogId: 41
        },
        {
            stageId: 41,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر دوم",
            personPic: "",
            dialog: "هیچ وقت نمی تونیم بریم",
            nextDialogId: 42
        },
        {
            stageId: 42,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "همیشه دوست داشتم با برادرم دور دنیا بگردم تمام کشور ها رو برم.",
        },
        {
            stageId: 43,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.center, // dialogType: "center",
            dialog: "از خاطرات قدیمتون برایم بگید.",
            nextDialogId: 45
        },
        {
            stageId: 45,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "یادمه روز اولی که براش خمیر بازی گرفتیم از خوشحالی فقط جیغ میزد. صبر نمی کرد که میز رو آماده کنم",
        },
        {
            stageId: 46,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "پشت هم خمیر ها رو چنگ میزد و می کوبیدشون رو میز.",
        },
        {
            stageId: 47,
            stageType: StageType.Question, // stageType: 1,
            dialog: "من اون موقع ...",
            dialogType: DialogType.right, // dialogType: "right",
            backgroundPic: "",
            optionSection: [{
                optionId: 1,
                title: "منم با کف صابون حباب درست کردم و حسابی همه جا رو بهم ریختیم",
                color: "",
                score: 10,
                nextDialogId: 48
            },
            {
                optionId: 2,
                title: "از این که خونه رو بهم ریخته ناراحت شدم وسرش داد زدم",
                color: "",
                score: -10,
                nextDialogId: 49
            }
            ]
        },
        {
            stageId: 48,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر دوم",
            personPic: "",
            dialog: "ما برادرای شلوغی هستیم",
            nextDialogId: 50
        },
        {
            stageId: 49,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "اونم شروع به گریه کرد و من یاد گرفتم باید باهاش مهربون تر باشم",
            nextDialogId: 50
        },
        {
            stageId: 50,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر دوم",
            personPic: "",
            dialog: "کل میز کثیف شد",
        },
        {
            stageId: 51,
            stageType: StageType.Question, // stageType: 1,
            dialog: "بعدش",
            backgroundPic: "",
            dialogType: DialogType.center, // dialogType: "center",
            optionSection: [{
                optionId: 1,
                title: "من با دستام هر چی رو میز بود رو جمع کردم ",
                color: "",
                score: 10,
                nextDialogId: 52
            },
            {
                optionId: 2,
                title: "از ناراحتی این که قراره مامان چی بگه سرم رو گزاشتم رو میز",
                color: "",
                score: -10,
                nextDialogId: 53
            }
            ]
        },
        {
            stageId: 52,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "بعد دیدم داره از من تقلید می کنه و داره کمک می کنه",
            nextDialogId: 54
        },
        {
            stageId: 53,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر دوم",
            personPic: "",
            dialog: "منم بغلش کردم",
            nextDialogId: 54
        },
        {
            stageId: 54,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "یادمه یه روز رفتیم آتیش بازی ببینیم",
        },
        {
            stageId: 55,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "من آتیش بازی دوست دارم خیلی قشنگن",
        },
        {
            stageId: 54,
            stageType: StageType.Dialog, // stageType: 0,

            person: "برادر اول",
            personPic: "",
            dialogType: DialogType.right, // dialogType: "right",
            dialog: "پس بیا بریم امشب جشنه و حتما آتیش بازی محشری راه میندازن. مطمئینم خوشت میاد",
        },
            // score page
        ]
    }, // end section my forever friend
    {
        levelId: 3,
        levelName: "حقایق اوتیسم",
        levelPic: "/img/levels/l3-1.jpg",
        backgroundMusic: "bensound-creativeminds-3.mp3",
        stages: [{
            stageId: 1,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "همیشه پدر مادرا از من میپرسن: چرا؟چرا بچه من اوتیسم داره؟"
        },
        {
            stageId: 2,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "واقعیتش یک جواب ساده نداره به نظر شما چرا؟"
        },
        {
            stageId: 3,
            stageType: StageType.Question, // stageType: 1,
            dialog: "چون اوتیسم...",
            backgroundPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            optionSection: [{
                optionId: 1,
                title: "یک طیف از اختلالاته",
                color: "",
                score: 10,
                nextDialogId: 4
            },
            {
                optionId: 2,
                title: "ترکیبی از چند مریضیه",
                color: "",
                score: 0,
                nextDialogId: 5
            },
            {
                optionId: 3,
                title: "هیچ اطلاعاتی راجع بهش نداریم",
                color: "",
                score: 0,
                nextDialogId: 5
            },
            ]
        },
        {
            stageId: 4,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "درسته ",
            nextDialogId: 6
        },
        {
            stageId: 5,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "البته که نه ",
            nextDialogId: 6
        },
        {
            stageId: 6,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "به نظرتون اوتیسم تا چه حد شایعه ",
        },
        {
            stageId: 7,
            stageType: StageType.Question, // stageType: 1,
            dialog: "میشه گفت امروزه در حد ...",
            backgroundPic: "",
            optionSection: [{
                optionId: 1,
                title: "یک در 88 کودک",
                color: "",
                score: 10,
                nextDialogId: 8
            },
            {
                optionId: 2,
                title: "یک در 200 کودک ",
                color: "",
                score: 0,
                nextDialogId: 9
            },
            {
                optionId: 3,
                title: "یک در 500 کودک",
                color: "",
                score: 0,
                nextDialogId: 9
            },
            ]
        },
        {
            stageId: 8,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "دقیقا! ",
            nextDialogId: 10
        },
        {
            stageId: 9,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "متاسفانه اشتباه فکر می کنید ",
            nextDialogId: 10
        },
        {
            stageId: 10,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "به خاطر آگاهی که در سال های اخیر پیدا کردیم اوتیسم رو در افراد بیشتری تونستیم تشخیص بدیم ",
        },
        {
            stageId: 11,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "البته در طول زمان تعریف اوتیسم تفییر پیدا کرد و گستره بیشتری از افراد رو در بر میگیره ",
        },
        {
            stageId: 12,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "به نظر شما نسبت ببین پسر ها با دختر هایی که اوتیسم دارن چقدره ",
        },
        {
            stageId: 13,
            stageType: StageType.Question, // stageType: 1,
            dialog: "نسبت بین دختر ها به پسر ها  ...",
            backgroundPic: "",
            optionSection: [{
                optionId: 1,
                title: "یک به یک",
                color: "",
                score: 0,
                nextDialogId: 15
            },
            {
                optionId: 2,
                title: "یک در چهار ",
                color: "",
                score: 10,
                nextDialogId: 14
            },
            {
                optionId: 3,
                title: "یک در بیست",
                color: "",
                score: 0,
                nextDialogId: 15
            },
            ]
        },
        {
            stageId: 14,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "درست حدس زده اید",
            nextDialogId: 16
        },
        {
            stageId: 15,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "نه، نسبت درست یک در چهار هست",
            nextDialogId: 16
        },
        {
            stageId: 16,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "ممکنه خیلی علامت های متفاوتی بین دختر ها و پسر ها ببینیم.",
        },
        {
            stageId: 17,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "به نظرتون چندین ژن دخیل با اوتیسم شناسایی شدن؟",
        },
        {
            stageId: 18,
            stageType: StageType.Question, // stageType: 1,
            dialog: "حدود ...",
            backgroundPic: "",
            optionSection: [{
                optionId: 1,
                title: "یک ژن",
                color: "",
                score: 0,
                nextDialogId: 20
            },
            {
                optionId: 2,
                title: "دویست تا چهارصد ژن",
                color: "",
                score: 10,
                nextDialogId: 19
            },
            {
                optionId: 3,
                title: "هزار تا میلیون ها ژن",
                color: "",
                score: 0,
                nextDialogId: 20
            },
            ]
        },
        {
            stageId: 19,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "درست حدس زده اید",
            nextDialogId: 21
        },
        {
            stageId: 20,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "نه، دویست تا چهارصد ژن شناسایی شده اند",
            nextDialogId: 21
        },
        {
            stageId: 21,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "چیز جالب تر این که این ها تو مکانیزم های مرتبط به هم عمل می کنن.",
        },
        {
            stageId: 22,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "مثل یه الگوریتم محاسباتی که چندین فرمول داره و با تغییر یکی از فرمول ها نتیجه های الگوریتم عوض میشن.",
        },
        {
            stageId: 22,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "با تشکر از حضار که در جلسه امروز حظور داشتن. امید وارم که اطلاعاتتون از اوتیسم بیشتر شده باشه.",
        },
            // score page
        ]
    }, // end section otism fact
    {
        levelId: 4,
        levelName: "نگرانی مادر",
        levelPic: "/img/levels/l4-1.jpg",
        backgroundMusic: "bensound-pianomoment-4.mp3",
        stages: [{
            stageId: 1,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.center, // dialogType: "center",
            dialog: "مادری با اضطراب در مطب دکتر نشسته و کودکش  تشخیص داده شده که اوتیسم داره",
        },
        {
            stageId: 2,
            stageType: StageType.Dialog, // stageType: 0,

            person: "مادر",
            personPic: "",
            dialogType: DialogType.up_right, // dialogType: "up-right",
            dialog: "اخه چرا ؟ نکنه به خاطر...",
        },
        {
            stageId: 3,
            stageType: StageType.Question, // stageType: 1,
            dialogType: DialogType.up_right, // dialogType: "up-right",
            dialog: "؟به خاطر واکسنی که تو بچگی بهش زدیمه",
            backgroundPic: "",
            optionSection: [{
                optionId: 1,
                title: "نه فکر نکنم",
                color: "",
                score: 10,
            },
            {
                optionId: 2,
                title: "اره به خاطر همینه",
                color: "",
                score: 0,
            }
            ]
        },
        {
            stageId: 4,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "نه به هیچ وجه. تحقیقی که در اون احتمال تاثیر واکسن در اوتیسم داده شد به خاطر غیر علمی بودن از ژورنال حذف شد و نویسندش مدرک طبابت باطل شد.",
        },
        {
            stageId: 5,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "بعد اون تحقیق های زیادی راجع به این موضوع انجام شد و هیچ کدوم ارتباطی بین اوتیسم و واکسن پیدا نکردن.",
        },
        {
            stageId: 6,
            stageType: StageType.Question, // stageType: 1,
            dialogType: DialogType.up_right, // dialogType: "up-right",
            dialog: "سن باباش زیاده شندیم تو این موضوع تاثیر داره",
            backgroundPic: "",
            optionSection: [{
                optionId: 1,
                title: "نه فکر نکنم",
                color: "",
                score: 0,
            },
            {
                optionId: 2,
                title: "آره به خاطر همینه",
                color: "",
                score: 10,
            }
            ]
        },
        {
            stageId: 7,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "آره ممکنه ",
        },
        {
            stageId: 8,
            stageType: StageType.Question, // stageType: 1,
            dialogType: DialogType.up_right, // dialogType: "up-right",
            dialog: "موقع بارداری به خاطر بیماریم دارو مصرف میکردم",
            backgroundPic: "",
            optionSection: [{
                optionId: 1,
                title: "نه فکر نکنم",
                color: "",
                score: 0,
            },
            {
                optionId: 2,
                title: "آره به خاطر همینه",
                color: "",
                score: 10,
            }
            ]
        },
        {
            stageId: 9,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "نمیشه همینجوری نظر داد بستگی به بیماریت و داروی مصرفی داره که بتونیم بگیم اثر داشته یا نه. ",
        },
        {
            stageId: 10,
            dialogType: DialogType.up_right, // dialogType: "up-right",
            dialog: "ویتامین و فولیک اسید مصرف میکردم",
            backgroundPic: "",
            stageType: StageType.Question, // stageType: 1,
            optionSection: [{
                optionId: 1,
                title: "نه فکر نکنم",
                color: "",
                score: 10,
            },
            {
                optionId: 2,
                title: "آره به خاطر همینه",
                color: "",
                score: 0,
            }
            ]
        },
        {
            stageId: 11,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "نه اینا برای دوران بارداریت نیارن",
        },
        {
            stageId: 12,
            stageType: StageType.Question, // stageType: 1,
            dialogType: DialogType.up_right, // dialogType: "up-right",
            dialog: "چون صرع داشتم ، والپروات مصرف میکنم",
            backgroundPic: "",
            optionSection: [{
                optionId: 1,
                title: "نه فکر نکنم",
                color: "",
                score: 0,
            },
            {
                optionId: 2,
                title: "آره به خاطر همینه",
                color: "",
                score: 10,
            }
            ]
        },
        {
            stageId: 13,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "موقع بارداری وقتی مغز جنین داره شکل میگیره یک سری عوامل شیمیایی و بعضی از بیماری ها می تونن باعث بالا رفتن ریسک اوتیسم بشن",
        },
        {
            stageId: 14,
            stageType: StageType.Question, // stageType: 1,
            dialogType: DialogType.up_right, // dialogType: "up-right",
            dialog: "من خیلی نگرانم ...",
            backgroundPic: "",
            optionSection: [{
                optionId: 1,
                title: "ممکنه خواهر کوچیکترش هم اینطور بشه",
                color: "",
                score: 10,
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
        },
        {
            stageId: 15,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "دوقولو هم سال احتمال داره 77 درصد ، غیر همسان 31 درصد و برادر خواهر حدود بیست درصد ممکنه که دومی هم اوتیسم داشته باشه.",
        },
        {
            stageId: 16,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "اما حتی برای دقلو های همسان که تمام اطلاعات ژنتیکیشون برابره هم این احتمال صد در صد نیست",
        },
        {
            stageId: 17,
            stageType: StageType.Question, // stageType: 1,
            dialogType: DialogType.up_right, // dialogType: "up-right",
            dialog: "یعنی ممکنه به خاطر جهش ژنتیکی اتفاق افتاده باشه",
            backgroundPic: "",
            optionSection: [{
                optionId: 1,
                title: "نه فکر نکنم",
                color: "",
                score: 0,
            },
            {
                optionId: 2,
                title: "آره به خاطر همینه",
                color: "",
                score: 10,
            }
            ]
        },
        {
            stageId: 18,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "در خیلی از مواد هیچ فردی در خانواده سابقه ژنتیکی نداره و یک بچه به خاطر جهش ژنتیکی اولین نفره که اوتیسم داره",
        },
        {
            stageId: 19,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "واقعیتش رو بخوای به بعضی از افراد میتونم با اطمینان بگم به خاطر ژنتیکه اما به بقیه با شک و تردید.",
        },
        {
            stageId: 20,
            stageType: StageType.Question, // stageType: 1,
            dialogType: DialogType.up_right, // dialogType: "up-right",
            dialog: "خواهرش رو کی بیارم برای معاینه",
            backgroundPic: "",
            optionSection: [{
                optionId: 1,
                title: "هجده ماهگی",
                color: "",
                score: 10,
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
        },
        {
            stageId: 21,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "ممکنه علایم رو تا چهار سالگی تشخیص ندیم.",
        },
        {
            stageId: 21,
            stageType: StageType.Dialog, // stageType: 0,

            person: "مادر",
            personPic: "",
            dialogType: DialogType.up_right, // dialogType: "up-right",
            dialog: "احساس می کنم زندگیم تموم شده.چکار می تونم بکنم.",
        },
        {
            stageId: 22,
            stageType: StageType.Question, // stageType: 1,
            dialog: "احساس می کنم زندگیم تموم شده.چکار می تونم بکنم؟",
            backgroundPic: "",
            optionSection: [{
                optionId: 1,
                title: "ممکنه بزرگ بشه درمان بشه؟",
                color: "",
                score: 10,
                nextDialogId: 23
            },
            {
                optionId: 2,
                title: " همه قراره اذیتش کنن",
                color: "",
                score: 0,
                nextDialogId: 24
            },
            ]
        },
        {
            stageId: 23,
            stageType: StageType.Dialog, // stageType: 0,

            person: "مادر",
            personPic: "",
            dialogType: DialogType.up_right, // dialogType: "up-right",
            dialog: "چیزی به اسم درمان معنی نداره و سبک زندگیتون فقز عوض میشه ولی شاید بتونه تو اجتماع باشه یا حتی تو یه کاری نابغه باشه",
            nextDialogId: 25
        },
        {
            stageId: 24,
            stageType: StageType.Dialog, // stageType: 0,

            person: "مادر",
            personPic: "",
            dialogType: DialogType.up_right, // dialogType: "up-right",
            dialog: "باید ادمایی که دوستش دارن کنارش باشن و با صبر و حوصله باهاش رفتار کنین .اما می تونه اروم اروم تو خیلی کارا مستقل بشه",
            nextDialogId: 25
        },
        {
            stageId: 25,
            stageType: StageType.Dialog, // stageType: 0,

            person: "مادر",
            personPic: "",
            dialogType: DialogType.up_right, // dialogType: "up-right",
            dialog: "چکار می تونم بکنم که بهتر بشه",
        },
        {
            stageId: 26,
            stageType: StageType.Question, // stageType: 1,
            dialogType: DialogType.up_right, // dialogType: "up-right",
            dialog: "گفتار درمانی و کار در مانی باعث بهبود توانایی هاش میشه",
            backgroundPic: "",
            optionSection: [{
                optionId: 1,
                title: "نه فکر نکنم",
                color: "",
                score: 0,
            },
            {
                optionId: 2,
                title: " آره مفیده",
                color: "",
                score: 10,
            },
            ]
        },
        {
            stageId: 26,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "می تونین حتی سراغ جلسات تحلیل رفتار کاربردی (ABA) و یا کلاس های مهارت های اجتماعی برید",
        },
        {
            stageId: 27,
            stageType: StageType.Dialog, // stageType: 0,

            person: "دکتر",
            personPic: "",
            dialogType: DialogType.up, // dialogType: "up",
            dialog: "خیلی کارا میشه کرد دنیا تموم نشده هنوز امید به اینده هست",
        },
            // score page
        ]
    }, // end section sad mother
];

const gameData = {
    startPage,
    chapterPage,
    aboutPage,
    sourcePage,
    levels
}

export default gameData;

