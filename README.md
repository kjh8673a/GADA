# 🧡 GADA

<img src="./docs/gadalogo.png" width="150px" alt=""/>

## 🎞️ Description

넥슨 게임들을 플레이하는 유저의 정보를 제공하는 서비스입니다.

NEXON Open API의 데이터들을 이용해 재가공하여 캐릭터 정보, 히스토리, 비교 등 사용자에게 유용한 정보를 제공합니다.

## 📑 Main Feature

### 🍄 GADA for 메이플스토리

메이플스토리를 플레이하는 유저들에게 유용한 정보를 제공합니다.

- **캐릭터 정보 조회**

  - 장비/스탯, 유니온, 스킬 정보를 조회할 수 있습니다.
  - 해당 캐릭터에 대해 같은 월드 내 본캐/부캐 정보를 제공합니다.
  - 파티 구성에 관련된 지표를 제시하며, 시뮬레이션을 해볼 수 있습니다.

<p align="center">
    <img src="./docs/gif/maple1.gif" width="60%" />
</p>

<br/>

- **길드 정보 조회**

  - 길드 노블 스킬 정보를 조회할 수 있습니다.
  - 길드원 목록을 조회할 수 있습니다.

<p align="center">
    <img src="./docs/gif/maple2.gif" width="60%" />
</p>

<br/>

- **랭킹**

  - 월드, 직업 별 개인 전투력 랭킹을 제공합니다.
  - 월드 별 길드 수로 랭킹을 제공합니다.
  - 월드 별 길드 전투력 랭킹을 제공합니다.
  - 주기적인 갱신을 통해 데이터를 최신화하고 있습니다.

<p align="center">
    <img src="./docs/gif/maple3.gif" width="60%" />
</p>

<br/>

- **캐릭터 비교**

  - 두 캐릭터의 스탯, 장비 정보를 비교할 수 있습니다.

<p align="center">
    <img src="./docs/gif/maple4.gif" width="60%" />
</p>

<br/>

### ⚱️ GADA for 던전앤파이터

던전앤파이터를 플레이하는 유저들에게 유용한 정보를 제공합니다.

- **캐릭터 정보 조회**

  - 스탯, 장비, 버프, 아바타, 휘장, 탈리스만에 대한 정보를 조회할 수 있습니다.

<p align="center">
    <img src="./docs/gif/dnf1.gif" width="60%" />
</p>

<br/>

- **경매장**

  - 경매장에 등록된 매물을 조회할 수 있습니다.
  - 최근 거래 내역을 조회할 수 있습니다.
  - 최근 7일, 24시간 동안의 해당 아이템에 대한 정보를 그래프를 통해 시각적으로 제공합니다.

<p align="center">
    <img src="./docs/gif/dnf2.gif" width="60%" />
</p>

<br/>

## 🔨 Server Architecture

<img src="./docs/아키텍처_설계도.jpg" alt=""/>

## 🛠️ Stack

<details open>
    <summary><b style="font-size: 18px">Application and Data</b></summary>
    <table>
        <tbody>
            <tr>
                <td align="center">
                    <img src="./docs/icons/react.png" width="100px" alt=""/><br />
                    <sub><b>React</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/java.png" width="100px" alt=""/><br />
                    <sub><b>Java</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/mysql.png" width="100px" alt=""/><br />
                    <sub><b>MySQL</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/nginx.png" width="100px" alt=""/><br />
                    <sub><b>NGINX</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/amazon-ec2.png" width="100px;" alt=""/><br />
                    <sub><b>Amazon EC2</b></sub><br />
                </td>
            <tr/>
            <tr>
                <td align="center">
                    <img src="./docs/icons/recoil.jpg" width="100px" alt=""/><br />
                    <sub><b>Recoiljs</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/typescript.jpg" width="100px" alt=""/><br />
                    <sub><b>TypeScript</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/springboot.png" width="100px" alt=""/><br />
                    <sub><b>Spring Boot</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/redis.png" width="100px" alt=""/><br />
                    <sub><b>Redis</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/jpa.jpg" width="100px" alt=""/><br />
                    <sub><b>Java Persistence API</b></sub><br />
                </td>
            </tr>
            <tr>
                <td align="center">
                    <img src="./docs/icons/querydsl.png" width="100px" alt=""/><br />
                    <sub><b>QueryDSL</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/openfeign.png" width="100px" alt=""/><br />
                    <sub><b>Spring Cloud OpenFeign</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/styled-components.png" width="100px" alt=""/><br />
                    <sub><b>styled-components</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/amazon-s3.png" width="100px" alt=""/><br />
                    <sub><b>Amazon S3</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/amazon-cloudfront.png" width="100px" alt=""/><br />
                    <sub><b>Amazon CloudFront</b></sub><br />
                </td>
            </tr>
        </tbody>
    </table>
</details>

<details open>
    <summary><b style="font-size: 18px">Utilities</b></summary>
    <table>
        <tbody>
            <tr>
                <td align="center">
                    <img src="./docs/icons/googleanalytics.jpg" width="100px" alt=""/><br />
                    <sub><b>Google Analytics</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/junit.png" width="100px" alt=""/><br />
                    <sub><b>JUnit</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/medis.jpg" width="100px" alt=""/><br />
                    <sub><b>Medis</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/postman.png" width="100px" alt=""/><br />
                    <sub><b>Postman</b></sub><br />
                </td>
            </tr>
        </tbody>
    </table>
</details>

<details open>
    <summary><b style="font-size: 18px">DevOps</b></summary>
    <table>
        <tbody>
            <tr>
                <td align="center">
                    <img src="./docs/icons/github.jpg" width="100px" alt=""/><br />
                    <sub><b>GitHub</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/git.png" width="100px" alt=""/><br />
                    <sub><b>Git</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/Visual_Studio_Code.png" width="100px" alt=""/><br />
                    <sub><b>Visual Studio Code</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/docker.png" width="100px" alt=""/><br />
                    <sub><b>Docker</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/jenkins.png" width="100px" alt=""/><br />
                    <sub><b>Jenkins</b></sub><br />
                </td>
            </tr>
            <tr>
                <td align="center">
                    <img src="./docs/icons/IntelliJIDEA.png" width="100px" alt=""/><br />
                    <sub><b>IntelliJ IDEA</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/gradle.png" width="100px" alt=""/><br />
                    <sub><b>Gradle</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/termius.jpg" width="100px" alt=""/><br />
                    <sub><b>Termius</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/grafana.jpg" width="100px" alt=""/><br />
                    <sub><b>Grafana</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/prometheus.png" width="100px" alt=""/><br />
                    <sub><b>Prometheus</b></sub><br />
                </td>
            </tr>
        </tbody>
    </table>
</details>

<details open>
    <summary><b style="font-size: 18px">Business Tools</b></summary>
    <table>
        <tbody>
            <tr>
                <td align="center">
                    <img src="./docs/icons/notion.jpg" width="100px" alt=""/><br />
                    <sub><b>Notion</b></sub><br />
                </td>
                <td align="center">
                    <img src="./docs/icons/discord.jpg" width="100px" alt=""/><br />
                    <sub><b>Discord</b></sub><br />
                </td>
            </tr>
        </tbody>
    </table>
</details>
