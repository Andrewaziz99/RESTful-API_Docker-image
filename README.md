# RESTful-API_Docker-image
Simple Docker project, to run a simple RESTful API with a simple database.

## How to run
1. Clone the repository
2. Create your own .env file, Paste this in your .env file, Change the ### to your own
``` 
MONGO_USERNAME=###
MONGO_PASSWORD=###
MONGO_CLUSTER=###
MONGO_DBNAME=###
```

3. Run the following command
```
docker-compose build
```
4. To find your image name Run the following command
```
docker images
```
5. Run the following command
```
docker run --name <container-name> <image-name> 
``` 
6. To find your container IP Run the following command
```
docker inspect <container-name> | grep "IPAddress"
```
7. Open your browser and go to the IP address you got from the previous step with the port 3000
```
<IP>:3000
```
8. To stop the container Run the following command
```
docker kill <container-name>
```
9. To remove the container Run the following command
```
docker rm <container-name>
```
10. To remove the image Run the following command
```
docker rmi <image-name>
```
## Video to Illustrate the project

https://user-images.githubusercontent.com/74116427/235420027-a0afe83d-42cb-4674-be1f-0a0951040398.mp4

