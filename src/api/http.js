import Axios from 'axios'
import qs from 'qs'

let axiosIns =  Axios.create({
    timeout: 30*1000
});
axiosIns.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.responseType = 'json';
axiosIns.defaults.validateStatus = function () {
    return true
};
export default {
    axiosIns
}
  
