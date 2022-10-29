# purple assignment

#### json server를 이용한 뉴스 정보 확인 및 투두리스트 어플리케이션

<br/>

# 목차

- [실행](#1-실행)

<br/>
<br/>

## Tech Stack

<div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=Next.js&logoColor=white">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
    <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black">
    <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
     <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
     <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white">
     
</div>

<br/>
<br/>

### 데모영상

![하이어엑스](https://user-images.githubusercontent.com/97820540/198778798-1e5b7139-2f3c-45a1-becb-c726b8cc7c5d.gif)

<br />
### json server 링크

https://drive.google.com/file/d/1x-t4PPH9lunAO4CufnBQjKgYrDaeGSg4/view?usp=sharing
<br />

#### json server 실행방법

<br />

```sh

npm install -g json-server

json-server -p 9000 db.json // 포트 9000으로 서버 실행
```

<br/>

<img width="665" alt="image" src="https://user-images.githubusercontent.com/97820540/198764314-79f0da7b-b8cd-4db2-8d7f-b7e8d2d5e69f.png">
<br/>
<br/>

<img width="665" alt="image" src="https://user-images.githubusercontent.com/97820540/198764881-188181bd-fe99-40d5-a56a-ad327fe785ba.png">

<br/>
<br/>

<img width="439" alt="image" src="https://user-images.githubusercontent.com/97820540/198769259-b5f74b85-bada-4de5-9d96-4bd0d6dd3ad8.png">

axios instance에 baseURL 설정.

<img width="439" alt="image" src="https://user-images.githubusercontent.com/97820540/198770366-4f19b261-62ac-4630-a884-d2439ce7fd52.png">

<br/>

<img width="490" alt="image" src="https://user-images.githubusercontent.com/97820540/198770876-4dd23662-a595-46c4-84ab-854741b20e8d.png">

Date 객체의 년, 월, 일 추출하여 오늘 뉴스만 조회하도록 모듈화.

<img width="490" alt="image" src="https://user-images.githubusercontent.com/97820540/198784589-e9d7247c-ee5a-49d0-a8f3-9079d2e84fff.png">

news와 파일 구분하여 todo관련 api 모듈화.

## 1. 실행

### 실행 방법

```sh
npm install

npm start
```

<br/>
<br/>

#### 2-1 Main 페이지

<img width="490" alt="image" src="https://user-images.githubusercontent.com/97820540/198785459-47d5d903-630e-4eaa-b7a8-a475fb4c8afe.png">

React-query 사용하여 로딩 및 에러처리.
<br/>

<img width="490" alt="image" src="https://user-images.githubusercontent.com/97820540/198786146-594302df-12f2-4967-a9bc-58b83f3a949e.png">
투두리스트를 조회하는 todoQuery 및 투두 삭제시 invalidateQueries 메소드를 사용하여 todolist refresh.
<br/>

<br/>

#### 2-2 Add 페이지

<img width="490" alt="image" src="https://user-images.githubusercontent.com/97820540/198801806-b8322ed0-096a-446f-a4ba-784b451490f5.png">
<img width="490" alt="image" src="https://user-images.githubusercontent.com/97820540/198802781-8e56e9ab-6c14-4b30-9c91-c1a0888b922e.png">

투두 생성시 필요한 state 생성 및 투두 폼에서 사용될 함수 구현.

##### add, update 페이지에서 중복사용 되는 폼은 컴포넌트로 분리하여 재사용.

<br/>

<img width="409" alt="image" src="https://user-images.githubusercontent.com/97820540/198815094-7b0cb195-03ae-4fdd-b528-b9dce97db329.png">

Update 페이지와 공통적으로 사용되는 useMutation을 useMutationQuery hook을 만들어 사용하며 invalidateQueries 메소드를 사용하여 할 일 추가 버튼 클릭시
해당 폼 추가 및 에러, 로딩 처리.
<br/>

#### 2-3 Update 페이지

<img width="490" alt="image" src="https://user-images.githubusercontent.com/97820540/198805031-02387ec8-7566-4bf6-b2aa-5ca891a1faba.png">

todoList의 todo 클릭시 navigate에 state로 해당 todo 내용을 담아 이동.
<br/>
<img width="490" alt="image" src="https://user-images.githubusercontent.com/97820540/198806417-a1f10509-4bce-4fc1-ab2f-fefb3109065c.png">

페이지 렌더링시 state가 있을경우 updateForm state에 state값을 담아 사용
<br/>

##### 반복되는 Form을 공통 컴포넌트로 분리하여 재사용성을 높임.

<br/>

##### 미비한 점

useMutationQuery 훅의 parameter로 사용되는 api의 타입 지정

반복되는 Add 페이지와 Update 페이지에서 반복되나 Update 페이지에선

기존 Main 페이지에서 전달한 state를 사용하기에 나오는 차이점을 Form hook에

구현하지 못함.

동적 라우팅을 사용하였다면 조금 더 수월했을거란 아쉬움이 있음.
