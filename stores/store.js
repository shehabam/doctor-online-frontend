import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import authStore from "./authStore";

class Store {
  constructor() {
    this.doctorList = [];
    this.filteredDoctors = [];
    this.doctorProfile = [];
    this.DoctorAreaAndSpe = [];
    this.AreaDoctorNoSpeciality = [];
    this.city = [];
    this.cityList = [];
    this.Area = [];
    this.AreaList = [];
    this.filteredCategories = [];
    this.filteredItems = [];
    this.cartList = [];
    this.theQuery = "";
    this.counter = 0;
    this.orderList = [];
    this.totalPrice = 0;
    this.Speciality = [];
    this.filteredSpeciality = [];
    this.RatingList = 0;
  }
  //for bringing Doctors only
  getDoctors() {
    axios
      .get("http://127.0.0.1:8000/doctor/list")
      .then(res => res.data)
      .then(doctors => {
        this.doctorList = doctors;
        this.filteredDoctors = doctors;
        this.AreaDoctorNoSpeciality = doctors;
        this.itemList = doctors.reduce((a, b) => a.concat(b.items), []);
      })
      .catch(err => console.error(err));
  }
  //for bringing Cities only
  getCities() {
    axios
      .get("http://127.0.0.1:8000/cities/")
      .then(res => res.data)
      .then(cities => {
        this.city = cities;
      })
      .catch(err => console.error(err));
  }
  //for bringing Area only
  getAreas() {
    axios
      .get("http://127.0.0.1:8000/area/")
      .then(res => res.data)
      .then(Areas => {
        this.Area = Areas;
      })
      .catch(err => console.error(err));
  }
  //for bringing Speciality only
  getSpeciality() {
    axios
      .get("http://127.0.0.1:8000/speciality/")
      .then(res => res.data)
      .then(Speciality => {
        this.Speciality = Speciality.slice().sort();
        console.log(Speciality);
        this.filteredSpeciality = Speciality.sort();
        // this.filteredSpeciality;
      })
      .catch(err => console.error(err));
  }

  getRating() {
    axios
      .get("http://127.0.0.1:8000/rating/")
      .then(res => res.data)
      .then(rates => {
        this.RatingList = rates;
      })
      .catch(err => console.error(err));
  }

  //for bringing doctor id from doctor list
  bringToProfile(id) {
    const productInCat = this.doctorList.find(item => +item.id === +id);
    this.doctorProfile = productInCat;
  }

  //for bringing area id to the Speciality page to get doctor from this area only
  bringToSpeciality(id) {
    const AreaId = this.doctorList.filter(item => +item.area.id === +id);
    this.AreaDoctorNoSpeciality = AreaId;
    this.DoctorAreaAndSpe = this.AreaDoctorNoSpeciality;
  }

  //for bringing Speciality id to get doctor from this Speciality only
  bringAreaAndSpe(id) {
    const SpeId = this.AreaDoctorNoSpeciality.filter(
      item => +item.speciality === +id
    );
    this.DoctorAreaAndSpe = SpeId;
  }

  onSearchDoctorChangeHandler(e) {
    const items = this.doctorList.filter(product =>
      product.user.first_name.toLowerCase().includes(e)
    );
    this.filteredDoctors = items;
  }

  changeDoctorValue(e) {
    this.theQuery = e.toLowerCase();
    this.onSearchDoctorChangeHandler(this.theQuery);
  }

  onSearchSpecialityChangeHandler(e) {
    const items = this.Speciality.filter(product =>
      product.name.toLowerCase().includes(e)
    );
    this.filteredSpeciality = items;
  }

  changeSpecialityValue(e) {
    this.theQuery = e.toLowerCase();
    this.onSearchSpecialityChangeHandler(this.theQuery);
  }
}
decorate(Store, {
  Speciality: observable,
  filteredSpeciality: observable,
  onSearchSpecialityChangeHandler: action,
  changeSpecialityValue: action,
  doctorList: observable,
  getDoctors: action,
  filteredDoctors: observable,
  AreaDoctorNoSpeciality: observable,
  DoctorAreaAndSpe: observable,
  bringToSpeciality: action,
  bringAreaAndSpe: action,
  getSpeciality: action,
  getCities: action,
  getAreas: action,
  Area: observable,
  AreaList: observable,
  city: observable,
  doctorProfile: observable,
  cityList: observable,
  getArea: action,
  theQuery: observable,
  onSearchDoctorChangeHandler: action,
  changeDoctorValue: action,
  bringToProfile: action,
  getRating: action,
  RatingList: observable
});

const store = new Store();
store.getDoctors();
store.getCities();
store.getSpeciality();
store.getAreas();
// if (authStore.isAuthenticated) {
// 	store.getRating();
// }
export default store;

//.................................................................................
