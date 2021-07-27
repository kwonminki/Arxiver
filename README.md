# Arxive / Arxiver
2021.07.24 version 2.1

chrome extension file.

# Version 2.1
저자, 연도를 선택적으로 추가할 수 있도록 수정.
(팝업창은 arixiv.org 안에서만 열리는 것을 확인.. 아무래도 권한 설정 때문인듯 함.)
기타 자잘한 버그 수정.

https://chrome.google.com/webstore/detail/arxive/hkoblclipggkhhbllgefhnbjdcajmelh?hl=en-US&authuser=0
크롬 웹스토어에 런칭.

그냥 pdf 버튼 눌러서 다운되는 기능을 가진 Arxiver는 일단 그대로 냅둠.

# Version 2.0
Get some codes from https://github.com/j3soon/arxiv-utils (Thank you)

Direct Download 버튼을 페이지에 생성, 누르면 다운받게 만듬.

이전과 똑같이 toggle 존재, 다른이름으로 저장할지 바로 저장할지 정함.

페이지 이름 논문 제목으로 변경.

pdf 이름도 논문 제목으로 변경.

파일명 "논문제목 + 저자 + 날짜" 로 변경

# Korean
기능 : arxiv.org/abs/* 에서 pdf파일을 눌러 다운 받을 시 해당 파일의 이름을 논문 제목으로 바꿔준다.

세부사항 : 토글 버튼을 'on'으로 할 시 다운 받을 때 파일 위치를 어디로 받을 지 묻는다. 'off'라면 Downloads 폴더에 바로 받아진다.

적용방법 : 1. repo를 받는다.(압축을 푼다.) 2. 크롬 확장프로그램 관리로 들어간다. 3. 개발자모드를 킨다. (우상단에 토글버튼이 있다.) 4. load unpack을 클릭하여 다운받은 폴더를 선택한다.

단점 : 다운을 안받는 기능은 없다. toggle을 on으로 두고 취소를 눌러 다운을 안받는 방법정도? 추후 업데이트 해볼 생각이다.

버그, 오류, 건의 등등 이슈에 남겨주면 고칠 예정.

# English
Feature: When downloading a pdf file from arxiv.org/abs/*, it is renamed to the title of the paper.

Details: When toggles button is 'on', it asks where to get the file location when downloading. If 'off' it will be downladed directly in the Downloads folder.

How to apply: 1. Receive a repo.(and unzip) 2. Go to Chrome Extension Management. 3. Turn on developer mode. (There is a toggle button at the top of the icon.) 4. Click load unpack and select the folder you downloaded.

Disadvantage: There's no way not to download. lol. You can leave the toggle 'on' and press cancel. I am thinking of updating it later.
