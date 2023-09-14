import { appName, greet } from "./module";
// 자동완성으로 파일명하고 모듈명을 동일하게 해줌
// import module from "./module";
import module from "./module";

const name = "Javascript";
console.log(
  greet(`${name}-${appName}-${metadata.version}-${metadata.creator}`)
  );