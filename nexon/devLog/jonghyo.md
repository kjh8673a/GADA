# 종효의 개발일지

## 2024-01-08

### Header와 Footer 제작

-   제작하면서 Header에서 TypeScript의 이벤트 설정하는 법에 대해서 배울수 있었음.
-   styled-component를 사용방법에 대해 익힐 수 있었고 flex에 대해서 다시금 익힐 수 있었다.

### 막힌 것

-   현재 CSS는 아직 완벽하게 제작하지 못함.
-   상단바와 하단바 사이 공간사이만 사용하고 싶은데 min-height : 100vh로 해놔 현재 가운데 Maple페이지는 상단,하단바도 먹으면서 사용중.
-   process.env 에 환경변수를 설정하여 assets을 가져오고 싶은데 아직 해결하지 못함.

### 2024-01-09

### 중간 SearchBar 제작

-   제작하면서 CSS를 더 알 수 있었고 input바 안에 img를 넣었음. (absolute를 사용하긴 했음.)
-   주황버섯.gif파일을 가져오는데 ../../으로 파일을 나가는 것이아닌 /assets부터 /public으로 바로 시작해야 불러옴.
-   우선 검색할때 닉네임을 입력하면 recoil로 저장해서 해당 닉네임 들고 Characterpage로 이동 하게 만듦.

### 막힌 것

-   CSS 아직 불안정
-   recoil 되는지 확인 해봐야함.
-   process.env 가 안되어 assets로 바로 시작함.
