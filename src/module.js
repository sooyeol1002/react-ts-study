// js : es-module : 방법에서 모듈을 내보내는 방법
// 내보내고 싶은 모듈앞에 export를 사용
// 모듈 : 코드 집합, 변수, 함수, 객체, 클래스, 인터페이스...
// export(수출) : 내보내기
export function greet(name) {
  return `Hello, ${name}!`;
}
export const appName = "myapp";
export const user = {
  name: "Alice",
  age : 30,
}
// 기본 모듈 내보내기
export default {
  version: '1.0',
  creator: 'GangChan Park'
};
module.export = {
  greet,
  appName
}