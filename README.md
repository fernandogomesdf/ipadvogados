# ipadvogados
site do israel

curl --location --request POST 'https://ipadvogados.com/sqlite-rest/services/mail/enviar' \
--header 'Content-Type: application/json' \
--data '{
    "nome" : "Fer",
    "telefone": "123",
    "email" : "11@uu.com",
    "texto" : "meu texto"
}' --insecure

docker build -t ipadvogados .
docker run --name ipadvogados -d -p 80:80 ipadvogados

ssh-keygen -t rsa -b 4096 -m pem -C "ffernando_gomes@hotmail.com"

https://gitlab-ci@github.com/fernandogomesdf/ipadvogados.git