~~https://github.com/arminc/clair-local-scan

<!-- Fetch Clair database -->
1--> docker run -d -p 5432:5432 --name <customeName> arminc/clair-db:latest

<!-- Clair Scan on specific container -->
1-->clair-scanner --ip $(<ip>) -r example.json <containerName>

2-->clair-scanner --whitelist=example-nginx.yaml --clair=http://YOUR_LOCAL_IP:6060 --ip=YOUR_LOCAL_IP nginx:1.11.6-alpine
