FROM openjdk:17-oracle

ARG JAR_FILE=./build/libs/maple-service-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} /maple-service.jar

ENV TZ=Asia/Seoul

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/maple-service.jar" ]
