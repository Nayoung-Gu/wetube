# 🎞 WETUBE-2022

## 🖋 개요

- 유저, 동영상 CRUD 기능을 포함한 유튜브의 기본 기능 및 화면 클론 코딩
- ES6 문법을 활용해 효율적인 코드 연습
- SCSS를 활용했지만 미적 요소 구현보다 여러 프레임워크를 이용한 js 집중적 프로젝트 
<br>

## 💻 주요 기능

- 예외 처리를 위한 미들웨어 생성 (ex. 로그인하지 않은 유저가 파일 업로드, 수정 페이지에 접속하면 alert를 띄우고 로그인 페이지로 redirect)
- express로 라우터 설계 및 get, post 요청을 다루기 위한 컨트롤러 설정
- 파일간의 함수 (default) export, import 활용
- Node.js로 웹 서버 구축
- MongoDB와 이를 JS와 잇는 Mongoose 라이브러리 활용
- 유저와 동영상 Schema와 실제 정보를 MongoDB에 저장
- 유저와 동영상을 다루는 CRUD 기능 구현
- HTML을 활용하지 않고 PUG로 화면 렌더링 
- 동영상 포맷과 같이 컴포넌트화 할 수 있는 부분은 PUG의 mixin과 partial 활용
<br>

## ✍ 프로젝트를 하며 느낀 점

- 크게 root, user, video로 구분되는 라우터들을 디자인하고 설정하는 부분이 재미있고 URL 경로를 이해하는 데 도움이 되었다.
- 실제로 프레임워크, 컴파일러 등을 다운받고 활용하는 과정에서 기능 구현에 필수적인 dependencies와 프로그래머들의 개발을 편리하게 해주는 devDependencies의 개념을 이해할 수 있었다.
- webpack을 설정하는 과정과 용어들이 어려웠었고 이해보다 복붙으로 해결한 부분이 많았다. 앞으로 추가적인 공부를 할 예정이다.
- 처음 접해보는 PUG의 문법이 신기하고 흥미로웠다. 반복적인 화면 혹은 엘리먼트 렌더링을 할 때 mixin과 partial을 유용하게 활용할 수 있을 것 같다.

## 🔨 이슈

- 유저와 동영상 간의 데이터를 연결하는 과정에서 user가 남긴 comment가 연동되지 않는 문제 (userController 내부 함수 문제 추정)
- 배포 과정은 추후 Netlify 혹은 Heroku로 진행할 예정
<br>

## 🔎 실제 구현 화면
![image](https://user-images.githubusercontent.com/80025366/163708010-3c70e5e4-75d4-4387-813b-e18d9fe00377.png)
