FROM openjdk:17-oracle

ARG JAR_FILE=./build/libs/discovery-service-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} /discovery-service.jar

ENV TZ=Asia/Seoul

EXPOSE 8761

ENTRYPOINT ["java", "-jar", "/discovery-service.jar" ]
