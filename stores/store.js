import { decorate, observable, action, computed } from "mobx";
import axios from "axios";

class Store {
  constructor() {
    this.doctorList = [];
    this.doctorProfile = [];
    this.Areas = [];
    this.AreaList = [];
    this.itemList = [];
    this.itemsProducts = [];
    this.filteredCategories = [];
    this.filteredItems = [];
    this.cartList = [];
    this.theQuery = "";
    this.counter = 0;
    this.orderList = [];
    this.totalPrice = 0;
    this.Speciality = [];
  }
  getDoctors() {
    axios
      .get("http://127.0.0.1:8000/doctor/list")
      .then(res => res.data)
      .then(doctors => {
        this.doctorList = doctors;
        this.filteredDoctors = doctors;
        this.itemList = doctors.reduce((a, b) => a.concat(b.items), []);
      })
      .catch(err => console.error(err));
  }

  getCities() {
    axios
      .get("http://127.0.0.1:8000/cities/")
      .then(res => res.data)
      .then(cities => {
        this.Areas = cities;
      })
      .catch(err => console.error(err));
  }

  getSpeciality() {
    axios
      .get("http://127.0.0.1:8000/Speciality/")
      .then(res => res.data)
      .then(Speciality => {
        this.Speciality = Speciality;
      })
      .catch(err => console.error(err));
  }

  bringToProfile(id) {
    const productInCat = this.doctorList.find(item => +item.id === +id);
    this.doctorProfile = productInCat;
  }

  onSearchCategoryChangeHandler(e) {
    const items = this.itemsProducts.filter(product =>
      product.name.toLowerCase().includes(e)
    );
    this.filteredItems = items;
  }
  get cartLength() {
    return this.cartList.length;
  }
  changeCategoryValue(e) {
    this.theQuery = e.toLowerCase();
    this.onSearchCategoryChangeHandler(this.theQuery);
  }
}
decorate(Store, {
  doctorList: observable,
  getDoctors: action,
  Speciality: observable,
  getSpeciality: action,
  getCities: action,
  Areas: observable,
  doctorProfile: observable,
  AreaList: observable,
  getArea: action,
  cartList: observable,
  itemList: observable,
  cartLength: computed,
  addToCart: action,
  theQuery: observable,
  onSearchCategoryChangeHandler: action,
  changeCategoryValue: action,
  itemsProducts: observable,
  filteredItems: observable,
  bringToProfile: action,
  counter: observable,
  orderList: observable,
  totalPrice: observable
});

const store = new Store();
store.getDoctors();
store.getCities();
store.getSpeciality();
export default store;

//.................................................................................
