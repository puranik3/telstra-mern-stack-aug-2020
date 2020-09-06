docker

// most recent image version is tagged as latest
docker pull hello-world
docker pull hello-world:latest

docker images
docker run hello-world

// both these commands show running containers
docker ps
docker container ls

// even stopped container are shown this way
docker ps - a

// if container is stopped it can be removed using...
docker rm <container id or name>

// if container is running it can be removed using...
docker rm -f <container id or name>

or

docker stop <container id>
docker rm <container id>

// remove an image
docker rmi hello-world

docker pull nginx
docker run -p 10000:80 -d nginx

docker stop <container id>

docker run --name some-nginx -v "/Users/admin/Documents/trainings/general/full-stack/aug-24-2020-mern-telstra/06-nodejs/04-serving-files/public":/usr/share/nginx/html:ro -d -p 10000:80 nginx