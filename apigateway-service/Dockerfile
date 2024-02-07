FROM openjdk:17-oracle

ARG JAR_FILE=./build/libs/apigateway-service-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} /apigateway-service.jar

ENV TZ=Asia/Seoul

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/apigateway-service.jar" ]
