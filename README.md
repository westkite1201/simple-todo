## simple-todo

### 실행

1. download sources

```
$ git clone https://github.com/westkite1201/simple-todo.git
```

2. install dependencies

```
$ npm install
or
$ yarn

(front, back 둘다 동일하게 설치해줍니다.)
```



3. start development server
```
$ npm run start
or
$ yarn start
(front, back 둘다 실행 해주세요)

```


4. build + serve 

```
$ npm run serve
or
$ yarn serve
```

## 데이터베이스 세팅

```
1. mysqlworkbench 실행

2. File->open model 클릭

3. todo_model.mwb 선택,확인

4. Database=> Forwoad Engineer 클릭
```

![](https://images.velog.io/images/westkite/post/96289854-2765-4437-b5c3-a3df8dab97cb/image.png)
stored Connection에 사용할 db를 선택해주세요.

![](https://images.velog.io/images/westkite/post/ad09dc18-a74d-44a4-8792-668407b4bd6e/image.png)
next를 눌러주세요.

![](https://images.velog.io/images/westkite/post/e49b05a9-5961-4d08-bdab-2f81d27f71ef/image.png)
password를 입력합니다.

![](https://images.velog.io/images/westkite/post/9f3625de-3ecd-411f-a2d1-7096fda4d7a6/image.png)
next를 눌러주세요.

![](https://images.velog.io/images/westkite/post/72f8f7ef-4856-470a-9004-79fdfea375b1/image.png)
스키마 적용 완료. 

```
/*계정 추가*/
INSERT INTO user(ID, PASSWORD, GB_CD, NAME) VALUES ('ADMIN','ADMIN',0,'ADMIN');
/*계정 확인 */
SELECT *
FROM user;

/*기본 TODO 추가 */
INSERT INTO todo(USER_INDEX, TODO_TITLE) VALUES (1, 'TEST');
/*TODO 확인 */
SELECT *
FROM todo;
```
기본 user와 todo를 등록해주세요.
