class SaveLocally {
  set(name, data) {
    return localStorage.setItem(name, data);
  }

  get(name) {
    return localStorage.getItem(name);
  }

  remove(name) {
    return localStorage.removeItem(name);
  }
}

const LocalStore = new SaveLocally();

export default LocalStore;
