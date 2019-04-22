### Description

Jenkins Docker outside of Docker Architect

After build up the container, need to execute the command below:
docker exec -u root ${ContainerId} /bin/chmod -v a+s $(which docker)

More detail:
https://medium.com/@Roger.Jiang/jenkins-docker-outside-of-docker-260f038266bc
