FROM openjdk:17-alpine

ARG JAR_FILE=./build/libs/maple-service-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} /maple-service.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/maple-service.jar"]
