
# ghibli 팬페이지

![Group 2099](https://user-images.githubusercontent.com/118143036/232653271-8ad3e80f-b0b0-47bc-8753-11967a894600.png)

<br>

## 🌱 프로젝트소개
해당 프로젝트는 React 프레임워크인 Next.js를 사용하여 제작된 'ghibli' 팬페이지 프로젝트입니다.
스타일은 scss로 적용하였고, 흥미를 극대화하기 위해서 애니메이션 효과를 다수 사용했습니다.

<br>

## ☘️ 주요기능

#### 캐릭터 클릭시 애니메이션 섹션 이동

- 메인페이지에서 캐릭터를 클릭하면 해당 애니메이션 섹션으로 이동한다.

#### 로그인

- 로그인을 했을시에만 캐릭터별 sns페이지로 이동이 가능하게했다.

#### 캐릭터 sns 페이지

- sql을 사용해 캐릭터별 sns를 만들었고 cloudinary를 이용해 사진 업로드를 구현하였다.

<br>

## 🔨 기술스택

### **Tech**

<p>
<img src="https://img.shields.io/badge/nextdotjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
<br>
</p>

### **Design**
<p>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/>
<img src="https://img.shields.io/badge/adobeillustrator-FF9A00?style=for-the-badge&logo=adobeillustrator&logoColor=white"/>
<img src="https://img.shields.io/badge/adobephotoshop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white"/>
</p>

### **Tools**

<p>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
<br>
</p>

<br>

<br/>

## 🔥 Trouble shooting
<details>
<summary><strong> issue1: sns 이미지 업로드 </strong></summary>

이미지를 저장할 서버에대힌 고민이 많았다. aws등 다양한 방법을 찾았지만 cloudinary가 가장 현실적으로 보여
cloudinary를 사용해 이미지 업로드를 구현하였다.
</details>

<details>
<summary><strong> issue2: 데이터베이스 </strong></summary>

프론트만을 공부했기에 전체적인 DB 구조 설계 단계부터 어려움이 많았다. 특히 foreign key(외래키) 설정 및 admin 계정 분리 (권한설정)에서
cascade 사용으로 게시글 삭제시 연결된 댓글도 함께 삭제되도록 했다.
</details>




<br></br>
## 🌸 와이어프레임

[💾 와이어프레임](https://www.figma.com/file/cUR8eO5URaOlTQA3r7n4Cv/GHIBLI?node-id=0-1&t=ttEe7ouM2RXwLMZu-0)

<br></br>
