const reviewname =document.querySelector(".reviewname");
const reviews =document.querySelector(".reviews");
const btnpre=document.querySelector(".btnpre");
const btnnext =document.querySelector(".btnnext");
const myineby=["Review by Thin Yanant Kyaw","Review by Zaw Htet","review by Kyal"];

const myinereviews=["ဆရာမခင်နှင်းယုရဲ့ အပြောင်မြောက်ဆုံး လက်ရာတစ်ခုပါ။ မွှေးရဲ့အဆက် စာအုပ်သုံးအုပ် ထွက်ခဲ့ပေမယ့် မွှေးဝတ္ထုမှာတော့ မွှေးရဲ့ရုပ်ပုံဟာ ပိုပေါ်လွင်တယ်လို့ ထင်ပါတယ်။ ဆရာမခင်နှင်းယုနဲ့ မွှေးရဲ့ဘဝဟာ ထပ်တူနီးပါးကျတာကြောင့် မွှေးကို ခင်နှင်းယု ရဲ့ ကိုယ်ပွားလို့ခေါ်ကြပါတယ်။အခုပြောတဲ့ စာအုပ်တွေထဲမှာ မွှေးက ယဥ်ကျေးသိမ်မွေ့ဆုံး၊ ကိုယ်ကျင့်တရားအကောင်းဆုံး၊ မိန်းကလေးတွေ စံနမူနာ ယူထိုက်ဆုံးပါ။ နိုင်ငံရေး၊ ဒေသန္တရ ဗဟုသုတတွေ၊ မွှေးရဲ့ ဘဝဖြတ်သန်းမှုနဲ့ အချစ်ရေး ဒါတွေရောစပ်ထားလို့ ဖတ်ရတာ မငြီးငွေ့ပါဘူး။အချစ်ရေးမှာ အမြဲနောက်ကျခဲ့ရပြီး ချစ်ရသူအတွက် စွန့်လွှတ်ပေးဆပ်ဖို့ အဆင်သင့်ဖြစ်နေတဲ့ အတွတ် (ခေါ် ) ဒေါက်တာမိုးကောင်း၊ ခင်ပွန်းဝတ္တရားကျေပြီး ဇနီးဖြစ်သူရဲ့ အခက်အခဲဒုက္ခတွေကို နားလည်ခွင့်လွှတ်ပေးတဲ့ မွှေးရဲ့ခင်ပွန်း ကိုကိုနိုင်ငယ်ငယ်တုန်းက ရုပ်မလှလို့အတွတ်တို့က မကျည်းတန်လို့နောက်ပြောင်ခံရသူ မွှေးလောကဓံကို ရှိသမျှ အားအင်နဲ့ရင်ဆိုင်ပြီး မိသားစုအတွက် အနစ်နာခံရှာသူ မွှေးဟာ အချစ်ရေး ကံမကောင်းပေမယ့် အိမ်ထောင်ရေး ကံကောင်းတဲ့သူပါ။ ဒါပေမယ့် အမေနဲ့အစ်မဆီက အမွေအဖြစ် တီဘီရောဂါ ရခဲ့တဲ့ မွှေးတစ်ယောက် အိန္ဒိယ နိုင်ငံကို ဆေးသွားကုခဲ့ရာ ဆေးရုံမှာ အတွတ်နဲ့ ပြန်တွေ့ပြီး အစစအရာရာ အဆင်ပြေခဲ့ပေမယ့် မြန်မာနိုင်ငံကို ပြန်လာတဲ့အချိန် ဘယ်လိုကံကြမ္မာတွေက ဆီးကြိုနေမလဲ။",
"စုလည်း မဆင်၊ နောက်ထုံးရှင်နှင့်၊မြင်လျှင်ပင်ကို၊ ကြိုးလိုပါလည်း၊ ကုသိုလ်ကြမ္မာ၊ မမီပါခဲ့ ဆိုတော့သူက ချစ်ချင်ပေမယ့် ကုသိုလ်ကံ မဆုံစည်း၊   အကြောင်းက မတိုက်ဆိုင်လေတော့သူတို့နှစ်ယောက် မပေါင်းရဘူးပေါ့နော်",
"သာမန်ကြည့်လျှင် မွှေးသည် အိမ်ထောင်ရေး အချစ်ဇာတ်လမ်းတစ်ခုဟု ဆိုနိုင်ပါသော်လည်း ကျွန်မသည် တိုင်းချစ်ပြည်ချစ် မျိုးချစ်စိတ်ဓာတ်ကို အခြေခံခဲ့ပါသည်<br>                                    ဆရာမ ခင်နှင်းယု️ တီဘီရောဂါနဲ့ India ကိုဆေးလာရောက်ကုသရာမှ မွှေး နှင့် အတွတ်တို့ ပြန်လည်ဆုံစဉ်းခဲ့ကြပုံ။ ငယ်စဉ်ကလေးဘဝ ထဲက အတူတကွ ကြီးပြင်းလာခဲ့ပြီးမကျည်းတန်လေး ဘဝထဲက မွှေ အပေါ်ထားတဲ့ အတွတ်ရဲ့ မေတ္တာတရားတွေကို တွေ့ရတယ်။  မွှေးက မိန်းမပေမယ့် မိန်းမမဆန်ပါး ဆိုတဲ့ အတိုင်း မွှေးရဲ့ ဆုံးဖြတ်ချက်ပြတ်သားပုံတွေ မိသားစုအပေါ် တာဝန်ကြေပုံတွေ။ အိမ်ထောင်ရှင်မကောင်း ပီသပုံတွေ တွေ့ရတယ်။️ အချစ်ကို ဖွင့်မပြောတက်ပဲ အမြဲနှောင့်နှေး နောက်ကောက် ကျတက်တဲ့ အတွတ် အတွက်လည်း ရင်မောရ သနားဂရုဏာ သက်ရတယ်။  အရင်ခေတ်ကတစ်အုပ်စီထွက်ခဲ့ပေမယ့် (မွှေး+ကုသိုလ်ကြမ္မာမမီပါခဲ့+အတွတ်ရေ+ကျွန်တော်တင်အောင်ထွန်း) ဒီဘက်ခေတ်မှာတော့အကုန်လုံးပေါင်းပြီးတစ်အုပ်ထွက်ထားပေးတယ်။ မိသားစုရေး အချစ်ရေး အိမ်ထောင်ရေး နိုင်ငံရေး အကြောင်းတို့ကိုတစ်စေ့တစ်စောင်း ဖော်ပြပေးသွားသော စာအုပ်ကောင်း။ (မွှေး ဇာတ်လမ်းဆိုပေမယ့် အတွတ်ဇာတ်လမ်း လို့တောင် ထင်မိတယ်)"];

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