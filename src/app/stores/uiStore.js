import { observable, action } from 'mobx';
import { toast } from 'react-toastify';

class Alert {
    constructor(message) {
        this.message = '';
    }
//   @observable message = this.message;
  @observable acknowledged = false;
}

class UiStore {
    alerts = [];

    @observable loading = false;

    @action createAlert(message) {
        console.log(message);
        this.alerts.push(new Alert('test'))
        toast.success(this.alerts[this.alerts.length - 1].message)
    }
}

const uiStore = new UiStore();

export default uiStore;
export {UiStore};
