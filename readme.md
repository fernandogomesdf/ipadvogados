docker build -t ipadvogados:latest .

docker save -o c:\temp\teste.tar ghcr.io/fernandogomesdf/ipadvogados:latest


ab -n 1000 -c 10 -g /mnt/c/temp/test.dat "https://ipadvogados.summtech.in/#/empresarial"