const reviewname =document.querySelector(".reviewname");
const reviews =document.querySelector(".reviews");
const btnpre=document.querySelector(".btnpre");
const btnnext =document.querySelector(".btnnext");
const myineby=["Review by Kyal","Review by Thin Yanant Kyaw","review by Hmue"];

const myinereviews=["မီဟာလှတယ်။ ဒါပေမယ့် ဒါ့ထက်ပိုတာတစ်ခုရှိတယ်။ ဘာလဲတော့ မသိဘူး။ ရှင်းရှင်းပြောရရင် မီ့မှာ ကျွန်တော့်ကို ရူးစေတဲ့ အရာတစ်ခု ရှိတယ်။ မီဟာ လှတယ်။ ရက်ရောတယ်။ သွေးအေးတယ်။  လျှို့ဝှက်ချက်တွေများတယ် ဆိုတဲ့အတိုင်း မီ့အလှ မီ့ဂုဏ်တွေအောက်မှာ နစ်မြောသွားသော ပုရိသတစ်စုရဲ့ အချစ်တွေ အမုန်းတွေ အငြိုးတွေကို ဆိုလိုရင်းထိထိရောက်နဲ့ ရေးပြသွားသောစာအုပ်။ မီ ဇာတ်ကောင် ကို နားလည်ရခက်သည့်အတိုင်း နောက်ဆုံးအချိန်ထိ နားမလည်နိုင်ခဲ့ဘူး။ ဘလှဝင်း ကို ဘယ်သူမှန်းတောင် မသိလိုက်ရ။ မီ မီ မီ ... မီဟာ … မီမဟုတ်ဘူး။ မီးပဲ ... မီးပဲ ငါ့ကိုရှို့နေတဲ့ မီးပဲ ... မီလေးရယ် (ကိုယ်ခဏ ခဏ ဖတ်ဖြစ်တဲ့စာအုပ်လေး) ",
"ဆရာမကြည်အေးရဲ့ အအောင်မြင်ဆုံး ဝတ္ထုတွေထဲက တစ်အုပ်အပါအဝင်ဖြစ်ပြီး မေးခွန်းအထုတ်ခံရဆုံး စာအုပ်ပါ။ အခုနှစ်တွေအတွင်း မီကိုပြန်ရိုက်တဲ့ ရုပ်ရှင်မှာလည်း အောင်မြင်ခဲ့တာကြောင့် စာမဖတ်တဲ့သူတွေအထိ လူသိများလာခဲ့ပါတယ်။ထိုခေတ်ထိုအခါက ပုရိသတွေ ပါးစပ်ဖျားမှာ ရေပန်းစားတဲ့ မီသူနဲ့မတည့်တဲ့ စီးကရက်ကို လက်ကမချတဲ့ အေးတိအေးစက်နဲ့ မီလူတစ်ယောက်ကို ပုံတစ်မျိုးပြောတဲ့ မီထိုမီ့ကြောင့် တူလိုသားလိုချစ်တဲ့ မောင်ကိုလေးသေရတာ ဆိုပြီး မီ့ကိုမုန်းနေသော ဦးသော်ဆွေ ကိုယ်တိုင်ပင် မီ့ဒဏ်က မလွတ်နိုင်ရှာ။မီဟာ ကျားနာပဲ၊ ဘယ်သူမှ မကိုက်ရရင် သူ့အမြီးသူ ခဲနေတာဆိုတဲ့အတိုင်း ကိုယ့်ကိုကိုယ် ညှဥ်းဆဲနေတဲ့မီဟာနားလည်ရခက်လှတယ်။ ဘဝရဲ့ နောက်ဆုံးအချိန်မှာတောင် စာဖတ်သူတွေကို မေးခွန်းတွေ  ပေးသွားတဲ့မီဟာ မီပီသတယ်ပဲ ပြောရမှာပါ။",
"မီ နာမည်လေးကြားရုံနဲ့ မီဆိုတဲ့ကောင်မလေးကို ဆေးလိပ်နဲ့တွဲမြင်မိမယ်ဆိုတာကိုပေါ့မီ<br>မီဟာ လှတယ်။လှတယ်ဆိုတာထက်ပိုပိုပါတယ်။မီ့ ဆံပင်က အညိုရောင်ကလေး၊မျက်လုံးက မီးခိုးရောင်လိုလို၊အသားကဖြူပြီးဖျော့တယ်။ကိုယ်နေကလည်း ခပ်ပါးပါး သိပ်နွဲ့တယ်။မီရဲ့လှပုံက တစ်မျိုးလေး၊နာမည်ပေးရမယ်ဆိုရင် မီ့အလှဟာ ဖျော့တော့တဲ့ အလှ။မီဟာ မိဘမဲ့တစ်ယောက်။မီ့ကို မွေးပြီးပြီးချင်း မိဘသေကုန်သဖြင့် မြင်ကိုမမြင်ဖူးလိုက်သောသူမ။မီ ဆယ်တန်းအောင်၍ ကျောင်းထွက်ကာအလုပ်တစ်မျိုးပြီးတစ်မျိုးလုပ်ကိုင်သည်။အုပ်ထိန်းသူမရှိတဲ့သူမကို စော်ကားလိုသူများ၏ ရန်ကိုရွိ့ကာ တစ်နေရာကနေတစ်နေပြောင်းရွေ့ရသည်သူမရဲ့အလှ သူမရဲ့ရုပ် သူကိုယ်သူ အထင်ကြီးသူဖြစ်တဲ့အတွက် လမ်းပေါ်က အပေါစားမိန်းမတေနဲ့ မဆက်ဆံရပေ။မီသည် သူမလုံခြုံမှုအတွက် ဦးတင်မောင်ရဲ့ခြေတော်တင် တစ်ယောက်အဖြစ် နေလေ့ရှိသည်။မီသည်   ယောကျာ်းလေးတွေကို ဆွဲဆောင်နိုင်သလိုသူမအပေါ်အမျက်ထုပ်သည့်သူတွေကိုလည်း သူ့နည်းသူ့ဟန်နဲ့ရှင်းပစ်တတ်သူတစ်ယောက်။မီ့ရဲ့ကျော့ကွင်းကိုမိသွားတဲ့ မောင်ကိုလေးမောင်ကိုလေးမောင်ကိုလေးသည် မီ့ကို အသက်ငယ်ငယ်ကောင်ကလေးများချစ်တတ်သည့် ကမူးရူးထိုးစိတ်ဖြင့်ပြင်းထန်စွာချစ်မိသူတစ်ယောက်။မီဟာ ကျွန်တော်မကြိုက်တဲ့အလုပ်ကို သိပ်လုပ်တယ်။ဘယ်သူ့ကိုမှလည်းမမှုဘူး။ပီးရင်တော့ ကျွန်တော့်ကို သူ့ချစ်စရာအပြုအမူလေးတေနဲ့စိတ်ပြေအောင်လုပါတယ်။ကျွန်တော်နဲ့မီကိုတွေ့တဲ့လူဟာ သိပ်ချစ်တဲ့သူနှစ်ယောက်လို့ထင်လိမ့်မယ်။ကျွန်တော့်ဘက်ကတော့ ဟုတ်တာပေါ့။မီကတော့.....မီဟာ ကျွန်တော့်ကို သိပ်ချစ်တယ်လို တစ်ခါတစ်ခါ ထင်တယ်။တစ်ခါတစ်လေတော့လည်း သိပ်မုန်းတယ်လို့ ထင်တယ်ဆိုတာက ကျွန်တော်က ချစ်တယ် ပြောသလောက်  မီကခေါင်းခါတယ်။ မီ မချစ်နိုင်ပါဘူး၊မမုန်းနိုင်ပါဘူးလို့ အပြီးပိတ်ပြီးပြောတယ်။ဘာဖြစ်လို့ မချစ်လဲ မေးဦးမလား.....မီက မချစ်လို့ပေါ့လို့ဖြေမယ်ကျွန်တော့်ကို ဂရုမစိုက်လုပ်ပစ်တယ်။ဒါပေမယ့် ကျွန့်တော့်အပေါ်တော့ သိပ်ရင်းရင်းနှီးနှီးနေတယ်။အို..... တကယ့်ရည်းစားလိုပါဘဲ။ကျွန်တော်မှ မရူးရင် ဘယ်သူရူးဦးမလဲ။မနေနိုင်တဲ့အဆုံး။ဒေါသလည်းထွက်၊ရှက်လည်းရှက်၊၀မ်းနည်းပြီး မီဟာ မောင့်ကို ချစ်ရက်သားနဲ့ မုန်းဟန်ဆောင်တာလား၊မုန်းရက်နဲ့ ချစ်ဟန်ဆောင်တာလား လို့မေးတော့တာဘဲ။မီ အေးဆေးဘဲ နှစ်ခုလုံး မဟုတ်ဘူးတဲထိုသို့ သူ့အပေါ်ပြုမူသည့်မီ့ကို  သော်ဆွေအား ရင်ဖွင့်ပြလေ့ရှိသည်။ဦးသော်ဆွေသူတို့နှစ်ဦးသည် စစ်ထဲတွင်တွေ့ကြရာ မီ့ အကြောင်းရင်ဖွင်းရင်း မိတ်ဆွေတွေဖစ်ခဲ့ကြသူတွေမီ.....တဲ့မီ့ ကိုမမြင်ကတည်းက သည်နာမည်ကလေးဆန်းဆန်းမို့ ခေါ်ကောင်းနဲ့ခေါ်မိသည်။နောက်တော့ ယောကျာ်းတစ်ယောက်ကို ပေါ့ပေါ့ကလေးသေစေနိုင်သူ၊ဘယ်သူ့ကိုမှမခဲရလျှင် သူ့အမှီးသူပြန်ခဲသည့်ကျားနာလို ရက်စက်တတ်သူ။သော်ဆွေသည် မောင်ကိုလေးအတွက် မခံချိမခံသာဖြစ်ရာကနေ မီ့ အကြောင်းဆုံစမ်းရင်း သူပါ မီ့ရဲ့ကျော့ကွင်းထဲ မိသွားသူပင်။နောက်တော့မီနဲ့သူတို့တေရှေ့ဆက် ဘာဖြစ်ကြမလဲ။မီသည် မောင်ကိုလေးကို ချစ်ရယ်သားနဲ့ ဟန်ဆောင်ခဲ့တာ‌လား။မီကကော သော်ဆွေကိုပြန်ချစ်သွားလေမလား စာအုပ်လေးဖတ်ပြီး ငိုခဲ့ရတာလေးအမှတ်တရပါ။မိန်းကလေးတစ်ယောက်တည်း ရုန်းကန်လှုပ်ရှားနေတာကိုတွေ့မြင်တဲ့အခါ ကူညီရိုင်းပင်းစေလိုတယ်။အခုတော့သူမရဲ့အလှကို အမြတ်ထုက်ဖို့ဘဲစဉ္်းစားနေတဲ့သူတေကြောင့် သူမဘ၀လေးသနားဖို့ကောင်းပေ။နောက်ပြီး ဗဟုသုတရစရာတွေ အများကြီးပါသည့် စာအုပ်လေးပါ။အခုဒီစာအုပ်လေးကို ပိုင်ဖြိုးသူတို့က ဇာတ်လမ်းအနေနဲ့ရိုက်ထားတာရှိပါတယ်။အောင်လည်းအောင်မြင်ခဲ့သည်ပင်။"];

let currentIndex =0;

btnpre.addEventListener("click",()=>{
        currentIndex=(currentIndex +1+myineby.length )%myineby.length;
        update();
});

btnnext.addEventListener("click",()=>{
        currentIndex=(currentIndex +1)%myineby.length;
        update();
});



function update(){
        reviewname.innerHTML=myineby[currentIndex];
        reviews.innerHTML=myinereviews[currentIndex];
        
}