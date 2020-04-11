FROM java:8-jre

ADD ./target/catalog-service.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/catalog-service.jar"]

EXPOSE 8112