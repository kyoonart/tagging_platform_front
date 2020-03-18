// /* eslint-disable no-unused-vars */
// import axios from 'axios';
// let baseURL = 'http://tagapi.whip1ash.cn/';
// const $http = axios.create({
//     baseURL,
// })
// export const get = (url, params) => {
//     params = params || {};
//     return new Promise((resolve, reject) => {
//         $http.get(url, {
//             params,
//         }).then(res => {
//             if (res.data.status === 0) {
//                 resolve(res.data);
//             } else {
//                 alert(res.data.msg)
//             }
//         }).catch(error => {
//             alert('网络异常');
//         })
//     })
// }

// export const post = (url, params) => {
//     params = params || {};
//     return new Promise((resolve, reject) => {
//         $http.post(url, params).then(res => {
//             if (res.data.status === 0) {
//                 resolve(res.data);
//             } else {
//                 alert(res.data.msg);
//             }
//         }).catch(error => {
//             alert('网络异常');
//         })
//     })
// }