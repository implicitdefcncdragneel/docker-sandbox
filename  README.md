<!-- Docker as System Daemon -->
1-->sudo systemctl start docker

2-->sudo systemctl enable docker

3-->sudo systemctl restart docker

<!-- Docker Permission -->
1-->sudo chmod 666 /var/run/docker.sock

<!-- Busy Box -->
1--> docker pull busybox

2--> docker run busybox ls

3--> docker run busybox whoami


<!--Listing Docker Image-->
1--> docker ps

2--> docker ps --all


<!-- Container -->
1--> docker start <container-id>

2--> docker system prune

3-->docker exec -it <container-id> bash

or

3-->docker run -it <container-name> bash

or

3-->docker exec -it <container-id> sh

4-->docker stop <container-id> 

5-->docker kill <container-id>

<!-- Container name -->
1-->docker build -t <dockerHub-id>/<customeName>:<Version> .

2-->docker build -f Dockerfile.dev -t <image-name> .

<!-- Run on specific port -->
1-->docker run -p <user-port>:<docker-port>  <docker-id>

<!-- Docker Compose -->
1-->docker-compose ps --all

2-->docker-compose up --build

<!-- Docker+Ngnix -->
1-->docker run -p <user-port>:<ngnix-port> <image-name>:latest

or

1-->docker run -p <user-port>:<ngnix-port> -v $(pwd):/usr/share/nginx/html <image-name>

<!-- Launch a container and expose the root-filesystem -->
1-->docker run -ti --rm -v <fileDirectory>:<dockerDirectory> alpine sh