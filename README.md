# TS는 JS의 상위 개념이다
# TS는 JS로 트랜스파일 된다 

### npm 최소 환경
npm i -g typescript ts-node tsc 
npm i -D @types/node  @types/lodash-es

### TS로 JS 생성하기
tsc xxx.ts => xxx.js 생성

### TS 파일 바로 실행하기
ts-node xxx.ts

### JS 파일 바로 실행하기
node xxx.js

### project 경로 생성 및 초기화
mkdir proj ; cd proj; tsc --init
-> tsconfig.json 파일 생성