import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import Expo from "expo";

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
  type: "languageDetector",
  async: true, // flags below detection to be async
  //   detect: (callback) => { return /*'en'; */ Localization.getLocalizationAsync().then(({ locale }) => { callback(locale); }) },
  detect: callback => {
    return /*'en'; */ Expo.DangerZone.Localization.getCurrentLocaleAsync().then(
      lng => {
        callback(lng.replace("_", "-"));
      }
    );
  },
  init: () => {},
  cacheUserLanguage: () => {}
};

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: "en",

    resources: {
      en: {
        more: {
          title: "More",
          settings: "Settings",
          contactus: "Contact Us",
          aboutus: "About Us",
          logout: "LogOut",
          medicalinformation: "medical information",
          commingsoon: "Comming Soon",
          notification: "Notification"
        },
        settings: {
          editprofile: "Edit my Profile",
          loginedityourprofile: "LogIn to Edit your profile",
          changemycountry: "Change my Country",
          changelanguage: "Change Language"
        },
        offer: {
          title: "Offers",
          content: "This is no Offers",
          hello: "Hellow World"
        },
        appointment: {
          title: "Appointment",
          content: "Login to see your appointments",
          topic: "You Have an appointment in",
          done: "Done",
          from: "from",
          to: "to"
        },
        first: {
          description: "Book the Best Doctors in Kuwait",
          input1: "Choose by Speciality and Area",
          input2: "Search By Doctor Name",
          login: "Login"
        },
        other: {
          or: "Or",
          register: "REGISTER",
          search: "Search",
          home: "Home",
          appointment: "Appointment",
          offers: "Offers",
          more: "More",
          chooseyourarea: "Choose Your Area",
          chooseyourdoctor: "Choose Your Doctor",
          doctor: "Doctor",
          block: "Block",
          street: "Street",
          building: "Building",
          floor: "Floor",
          profession: "Profession",
          waitingtime: "waiting Time",
          votes: "votes",
          book: "Book",
          bookdescription:
            "Book now and you will recieve full address details and clinic number",
          fees: "Fees",
          from: "from",
          to: "To",
          googlemaps: "Google Map",
          visitors: "Visitors",
          today: "Today",
          doctorprofile: "Doctor Profile",
          views: "Views",
          speciality: "Choose by Speciality",
          username: "Username",
          password: "Password",
          firstname: "First Name",
          lastname: "Last Name",
          phonenumber: "Phone Number",
          searchplaceholder: "Search By Products...",
          loading: "loading...",
          confirm: "Confirm",
          showdatepicker: "Show Datepicker",
          ratingpage: "Rating Page",
          ratingvisiterror: "You Need To LogIn Or Register To Rate Any Doctor",
          ratingcontent: "How would you describe your visit to Doctor",
          ratealert: "your rate has been Submited"
        }
      },
      ar: {
        more: {
          title: "أكثر من",
          settings: "الإعدادات",
          contactus: "اتصل بنا",
          aboutus: "معلومات عنا",
          logout: "الخروج",
          medicalinformation: "معلومات طبية",
          commingsoon: "قريبا",
          notification: "إعلام"
        },
        settings: {
          editprofile: "تعديل ملفي الشخصي",
          loginedityourprofile: "تسجيل الدخول لتعديل ملف التعريف الخاص بك",
          changemycountry: "تغيير بلدي",
          changelanguage: "غير اللغة"
        },
        offer: {
          title: "عروض",
          content: "هذه ليست عروض",
          hello: "مرحبا بالعالم"
        },
        appointment: {
          title: "موعد",
          content: "تسجيل الدخول لرؤية مواعيدك",
          topic: "لديك موعد في",
          done: "فعله",
          from: "من عند",
          to: "إلى"
        },
        first: {
          description: "كتاب أفضل الأطباء في الكويت",
          input1: "اختر حسب التخصص والمنطقة",
          input2: "البحث عن طريق اسم الطبيب",
          login: "تسجيل الدخول"
        },
        other: {
          or: "أو",
          register: "تسجيل",
          search: "بحث",
          home: "الصفحة الرئيسية",
          appointment: "موعد",
          offers: "عروض",
          more: "أكثر من",
          chooseyourarea: "اختر منطقتك",
          chooseyourdoctor: "اختر طبيبك",
          doctor: "طبيب",
          block: "منع",
          street: "شارع",
          building: "بناء",
          floor: "أرضية",
          profession: "مهنة",
          waitingtime: "وقت الانتظار",
          votes: "الأصوات",
          book: "كتاب",
          bookdescription:
            "احجز الآن وستتلقى تفاصيل العنوان الكامل ورقم العيادة",
          fees: "رسوم",
          from: "من عند",
          to: "إلى",
          googlemaps: "خرائط جوجل",
          visitors: "الزائرين",
          today: "اليوم",
          doctorprofile: "الملف الشخصي الطبيب",
          views: "الآراء",
          speciality: "اختر من خلال التخصص",
          username: "اسم المستخدم",
          password: "كلمه السر",
          firstname: "الاسم الاول",
          lastname: "الكنية",
          phonenumber: "رقم الهاتف",
          searchplaceholder: "االبحث عن طريق المنتجات ...",
          loading: "جار التحميل...",
          confirm: "تؤكد",
          showdatepicker: "إظهار منتقي التاريخ",
          ratingpage: "تصنيف الصفحة",
          ratingvisiterror: "تحتاج إلى تسجيل الدخول أو التسجيل لمعدل أي طبيب",
          ratingcontent: "كيف تصف زيارتك إلى الطبيب",
          ratealert: "تم إرسال المعدل الخاص بك"
        }
      }
    },

    // have a common namespace used around the full app
    ns: ["common"],
    defaultNS: "common",

    debug: true,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false // not needed for react as it does escape per default to prevent xss!
    }
  });

export default i18n;
