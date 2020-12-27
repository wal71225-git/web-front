import $api from './api/index'
declare module 'vue/types/vue' {
  interface Vue {
    $api: any
  }
  // interface Window {
  //   AliyunUpload: any
  // }
// }
//   interface Window {
//     AliyunUpload: any
//   }